import React, {useState, useRef, useCallback, useMemo} from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import {useDispatch, useSelector} from 'react-redux';
import {repoAction} from '@store/entities/repo';
import {Colors} from '@themes';
import {TextInput, Text} from '@components';
import searchIcon from '@images/searchIcon.png';
import RenderItem from './RenderItem';

const Home = () => {
  const dispatch = useDispatch();
  const {loading, repos, fetching, totalCount} = useSelector(
    state => state.repo,
  );
  const [state, setState] = useState({
    page: 1,
    list: repos,
    text: '',
  });
  const onEndReachedCalledDuringMomentum = useRef(true);

  const fetchData = isInitial => {
    let page = isInitial ? 1 : state.page;
    let payload = {
      query: state.text,
      page: page,
    };
    dispatch(repoAction(payload));
    setState({...state, page: page + 1});
  };

  const renderRow = ({item, index}) =>   <RenderItem item={item} index={index} onPress={() => onPress(item)} />

  const ListFooterComponent = () => {
    return (
      <View>
        {fetching ? (
          <ActivityIndicator color={Colors.primary} size={'large'} />
        ) : null}
      </View>
    );
  };

  const onChangeText = useCallback(
    text => {
      setState({...state, text: text});
    },
    [state.text],
  );

  const ListHeader = useMemo(() => {
    return (
      <View style={[styles.searchInput, {backgroundColor: Colors.background}]}>
        <TextInput
          LeftIcon={searchIcon}
          placeholder={'Search repository'}
          onChangeText={onChangeText}
          onSubmitEditing={() => onSubmitEditing()}
          value={state.text}
          style={{
            width: '100%',
            marginTop: vs(10),
            backgroundColor: Colors.gray,
          }}
          blurOnSubmit={true}
        />
      </View>
    );
  }, [state.text]);

  const onSubmitEditing = () => {
    fetchData(true);
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyViewContainer}>
        <Text variant={'titleLarge'}>No records</Text>
      </View>
    );
  };

  const LoadMore = () => {
    if (!onEndReachedCalledDuringMomentum.current) {
      if (repos.length <= totalCount) {
        fetchData(false);
      }
      onEndReachedCalledDuringMomentum.current = true;
    }
  };

  if (loading && !state.fetching) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator
          style={{flex: 1}}
          animating={loading}
          color={Colors.black}
        />
      </View>
    );
  }

  return (
    <FlatList
      data={repos}
      renderItem={renderRow}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooterComponent}
      contentContainerStyle={{flexGrow: 1}}
      ListEmptyComponent={ListEmptyComponent}
      onEndReachedThreshold={0.5}
      onMomentumScrollBegin={() => {
        onEndReachedCalledDuringMomentum.current = false;
      }}
      onEndReached={LoadMore}
      keyExtractor={(item, index) => item.id.toString()}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  searchInput: {
    paddingHorizontal: s(20),
    marginTop: vs(1),
  },
  emptyViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
