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
  buttonStyles?: ViewStyle;
  textStyles?: TextStyle;
  props?: PressableProps;
};

const AppButton = ({
  backgroundColor = 'red',
  onPress = () => {},
  textColor = '#000',
  title = '',
  buttonStyles = {},
  textStyles = {},
  props,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={[styles.button, buttonStyles, {backgroundColor}]}>
      <Text style={[styles.buttonText, textStyles, {color: textColor}]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default AppButton;
