import {View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useRecoilState} from 'recoil';

import {AppButton, PlayerListItem} from 'components';
//@ts-ignore
import {allPlayersState} from 'atoms/Players';
import {Player} from 'types';

import styles from './styles';
import {COLORS} from 'constants/Colors';

type Props = {
  handleFilters: () => void;
};

const PlayersBottomSheetContent = ({handleFilters}: Props) => {
  const [players, setPlayers] = useRecoilState<Player[]>(allPlayersState);

  const renderItem = useCallback(
    ({item}: {item: Player}) => <PlayerListItem player={item} />,
    [],
  );

  return (
    <View style={styles.contentContainer}>
      <AppButton
        onPress={handleFilters}
        title="Filters"
        backgroundColor={COLORS.orange}
        buttonStyles={styles.filterButtonContainer}
      />
      <BottomSheetFlatList data={players} renderItem={renderItem} />
    </View>
  );
};

export default memo(PlayersBottomSheetContent);
