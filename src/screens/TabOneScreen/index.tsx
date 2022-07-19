import {Text, View} from 'react-native';
import React, {Suspense, useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

import {AppButton, AppSafeAreaView, Field, TeamStats} from 'components';
import PlayersBottomSheetContent from './PlayersBottomSheetContent';
import FilterBottomSheetContent from './FilterBottomSheetContent';

import {COLORS} from 'constants/Colors';
import styles from './styles';

type Props = {};

const TabOneScreen = (props: Props) => {
  const playersBottomSheet = useRef<BottomSheet>(null);
  const filtersBottomSheet = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const viewPlayers = useCallback(
    () => playersBottomSheet.current?.expand(),
    [],
  );

  const handleFilters = useCallback(
    () => filtersBottomSheet.current?.expand(),
    [],
  );

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
        ref={playersBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <Suspense fallback={<Text>Loading...</Text>}>
          <PlayersBottomSheetContent {...{handleFilters}} />
        </Suspense>
      </BottomSheet>

      <BottomSheet
        ref={filtersBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose>
        <FilterBottomSheetContent />
      </BottomSheet>
    </>
  );
};

export default TabOneScreen;
