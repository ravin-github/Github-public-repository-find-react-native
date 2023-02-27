import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ms, mvs} from 'react-native-size-matters/extend';
import {Colors} from '@themes';

const TextComponent = ({children, ...props}) => {
  let customStyle;

  switch (props.variant) {
    case 'title': {
      customStyle = styles.titleStyle;
      break;
    }
    case 'titleLarge': {
      customStyle = styles.titleLargeStyle;
      break;
    }
    case 'bodyMedium': {
      customStyle = styles.bodyMediumStyle;
      break;
    }
    case 'body': {
      customStyle = styles.bodyStyle;
      break;
    }
    case 'labelLarge': {
      customStyle = styles.labelLargeStyle;
      break;
    }
    case 'labelBold': {
      customStyle = styles.labelBoldStyle;
      break;
    }
    case 'label': {
      customStyle = styles.labelStyle;
      break;
    }
    default: {
      customStyle = styles.bodyStyle;
      break;
    }
  }
  return (
    <Text {...props} style={[customStyle, {color: Colors.black}, props.style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: ms(16),
    lineHeight: mvs(26),
  },
  titleLargeStyle: {
    fontSize: ms(24),
    lineHeight: mvs(28),
  },
  bodyMediumStyle: {
    fontSize: ms(16),
    lineHeight: mvs(19),
  },
  bodyStyle: {
    fontSize: ms(16),
    lineHeight: mvs(19),
  },
  labelLargeStyle: {
    fontSize: ms(14),
    lineHeight: mvs(16),
  },
  labelBoldStyle: {
    fontSize: ms(14),
    lineHeight: mvs(16),
  },
  labelStyle: {
    fontSize: ms(14),
    lineHeight: mvs(16),
  },
});

export default TextComponent;
