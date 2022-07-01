import {Text, View} from 'react-native';
import React, {useMemo, useRef} from 'react';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {
  AppButton,
  AppSafeAreaView,
  Field,
  PlayerListItem,
  TeamStats,
} from 'components';

import {players} from 'assets/data/players';

import {COLORS} from 'constants/Colors';
import styles from './styles';
import BottomSheetContent from './BottomSheetContent';

type Props = {};

const TabOneScreen = (props: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%'], []);

  const viewPlayers = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <AppSafeAreaView style={styles.container}>
        <TeamStats />
        <Field />

        <AppButton
          onPress={viewPlayers}
          title="View Players"
          backgroundColor={COLORS.orange}
          buttonStyles={styles.viewPlayersButton}
        />
      </AppSafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <BottomSheetContent />
      </BottomSheet>
    </>
  );
};

export default TabOneScreen;
