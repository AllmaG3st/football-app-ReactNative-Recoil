import {View, Text, ImageBackground, Pressable} from 'react-native';
import React from 'react';

import {AppButton, AppSafeAreaView, Field} from 'components';

import styles from './styles';
import {COLORS} from 'constants/Colors';

type Props = {};

const TabOneScreen = (props: Props) => {
  const viewPlayers = () => {};

  return (
    <AppSafeAreaView style={styles.container}>
      <Field />

      <AppButton
        onPress={viewPlayers}
        title="View Players"
        backgroundColor={COLORS.orange}
        buttonStyles={styles.viewPlayersButton}
      />
    </AppSafeAreaView>
  );
};

export default TabOneScreen;
