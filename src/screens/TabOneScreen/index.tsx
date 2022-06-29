import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

import AppSafeAreaView from 'components/AppSafeAreaView';

//@ts-ignore
import field from 'assets/images/field.jpg';
import styles from './styles';

type Props = {};

const players = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
};

const TabOneScreen = (props: Props) => {
  return (
    <AppSafeAreaView style={styles.container}>
      <ImageBackground
        source={field}
        resizeMode="contain"
        style={styles.bgImage}>
        {Object.keys(players).map(position => (
          <Text>{position}</Text>
        ))}
      </ImageBackground>
    </AppSafeAreaView>
  );
};

export default TabOneScreen;
