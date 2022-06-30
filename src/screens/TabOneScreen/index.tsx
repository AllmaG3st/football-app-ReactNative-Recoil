import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

import {AppSafeAreaView, Field} from 'components';

import styles from './styles';

type Props = {};

const TabOneScreen = (props: Props) => {
  return (
    <AppSafeAreaView style={styles.container}>
      <Field />
    </AppSafeAreaView>
  );
};

export default TabOneScreen;
