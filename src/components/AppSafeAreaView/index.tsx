import {View, SafeAreaView, ViewStyle} from 'react-native';

import React, {PropsWithChildren} from 'react';

import styles from './styles';

type Props = {
  style?: ViewStyle;
};

const players = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
};

const Screen = ({children, style}: PropsWithChildren<Props>) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
