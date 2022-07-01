import {View} from 'react-native';
import React, {useCallback} from 'react';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import {PlayerListItem} from 'components';
import {players} from 'assets/data/players';

import styles from './styles';
import {Player} from 'types';

type Props = {};

const BottomSheetContent = (props: Props) => {
  const renderItem = useCallback(
    ({item}: {item: Player}) => <PlayerListItem player={item} />,
    [],
  );

  return (
    <View style={styles.contentContainer}>
      <BottomSheetFlatList data={players} renderItem={renderItem} />
    </View>
  );
};

export default BottomSheetContent;
