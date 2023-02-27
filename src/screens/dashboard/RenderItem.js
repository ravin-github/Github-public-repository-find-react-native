import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {s, vs, ms} from 'react-native-size-matters/extend';
import {Text} from '@components';
import {Colors} from '@themes';

const RenderItem = ({item}) => {
  return (
    <View onPress={() => navigation.navigate('chatScreen')}
        style={styles.itemContainer}
        buttonWrapperStyle={[
          styles.itemContainerWrapper
        ]}>
        <View
          style={[
            styles.itemSecondContainer,
            {backgroundColor: Colors.grayL5},
          ]}>
          <Image source={{uri: item?.owner?.avatar_url}} style={styles.userIcon} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textHeaderWrapper}>
            <Text variant={'bodyMedium'} style={{color: Colors.black}}>
              {item?.full_name}
            </Text>
          </View>
            <Text variant={'label'} style={{marginTop: vs(8), color: Colors.grayL5}}>
             Name: {item?.name}
            </Text>
            <Text variant={'label'} style={{ color: Colors.grayL5}}>
             Stars: {item?.stargazers_count}
            </Text>
            <Text variant={'label'} style={{ color: Colors.grayL5}}>
             Watchers: {item?.watchers_count}
            </Text>
            <Text variant={'label'} style={{ color: Colors.grayL5}}>
             Score: {item?.score}
            </Text>
            <Text variant={'label'} style={{ color: Colors.grayL5}}>
            Languages: {item?.language}
            </Text>
            <Text variant={'label'} style={{ color: Colors.grayL5}}>
            Created: {item?.created_at}
            </Text>
            <Text variant={'label'} style={{ color: Colors.grayL5}}>
            Updated: {item?.updated_at}
            </Text>
            <Text variant={'label'} style={{ color: Colors.grayL5}}>
            Description: {item?.description}
            </Text>
          <Text
            variant={'label'}
            style={{marginTop: vs(8), color: Colors.grayL5}}
            numberOfLines={2}>
          </Text>
        </View>
      </View>
    )
   };

export default RenderItem;
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: vs(5),
    marginVertical: vs(8),
    marginHorizontal: vs(8),
    backgroundColor: '#F9F9FF',
    borderRadius:  ms(20)
  },
  itemContainerWrapper: {
    backgroundColor: 'red',
    overflow: 'hidden',
    width: s(345),
    height: vs(88),
    borderRadius: ms(10),
    alignSelf: 'center',
  },
  itemSecondContainer: {
    width: ms(50),
    height: ms(50),
    marginLeft: s(16),
    borderRadius: ms(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon :{
    width: ms(50),
    height: ms(50),
    borderRadius: ms(30),
  },
  textContainer: {
    flex: 1,
    marginHorizontal: s(13),
    marginTop: vs(10)
  },
  textHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: s(17),
  },
  image: {
    height: vs(70),
    width: s(70),
  },
});
