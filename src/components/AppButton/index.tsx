import {
  Text,
  Pressable,
  ViewStyle,
  PressableProps,
  TextStyle,
} from 'react-native';
import React from 'react';

import styles from './styles';

type Props = {
  backgroundColor?: string;
  onPress: () => void;
  textColor?: string;
  title: string;
  pressableStyles?: ViewStyle;
  textStyles?: TextStyle;
  props?: PressableProps;
};

const AppButton = ({
  backgroundColor = 'red',
  onPress = () => {},
  textColor = '#000',
  title = '',
  pressableStyles,
  textStyles,
  props,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={[styles.button, pressableStyles, {backgroundColor}]}>
      <Text style={[styles.buttonText, textStyles, {color: textColor}]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default AppButton;
