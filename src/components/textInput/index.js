import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {s, ms, vs} from 'react-native-size-matters/extend';
import { Colors } from '@themes';

const TextInputContainer = ({
  LeftIcon,
  RightIcon,
  innerRef,
  svgColor,
  textInputStyle,
  errorMessage,
  ...props
}) => {

  const LeftShow = () => {
    return (
      <View style={[styles.eyeButtonWrapper, styles.leftIconWrapper]}>
        <Image source={LeftIcon} style={styles.icon}  />
      </View>
    );
  };

  return (
   <View>
    <View style={[styles.inputBox, props.style]}>
     {LeftIcon && <LeftShow />}
      <TextInput
        {...props}
        ref={innerRef}
        placeholderTextColor={'rgba(0, 0, 0, 0.4)'}
        style={[
          styles.inputStyle,
          textInputStyle
        ]}
      />
    </View>
    </View>
  ); 
};

export default TextInputContainer;

const styles = StyleSheet.create({
  inputBox: {
    width: s(295),
    height: vs(50),
    marginBottom: vs(10),
    borderRadius: ms(25),
    backgroundColor: Colors.gray,
    alignSelf: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: ms(16),
    lineHeight: vs(19),
    color: 'black',
  },
  eyeButtonWrapper: {
    overflow: 'hidden',
    height: ms(50),
    width: ms(50),
    borderRadius: ms(25),
  },
  leftIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: vs(20),
    width: s(20),
    tintColor: 'grey',
  },
  eyeButton: {
    paddingHorizontal: vs(23),
    borderRadius: ms(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: ms(14),
    paddingLeft: s(10),
    color: 'red'
  },
});
