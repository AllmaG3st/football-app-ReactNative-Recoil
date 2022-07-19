import {View, Text} from 'react-native';
import React from 'react';

import {useRecoilValue} from 'recoil';
//@ts-ignore
import {numberOfPlayers} from 'atoms/MyTeam';
//@ts-ignore
import {valueOfPlayers} from 'atoms/MyTeam';

import styles from './styles';

type Props = {};

const TeamStats = (props: Props) => {
  const numOfPlayers = useRecoilValue<number>(numberOfPlayers);
  const valOfPlayers = useRecoilValue<number>(valueOfPlayers);

  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Players</Text>
        <Text style={styles.value}>{`${numOfPlayers} / 15`}</Text>
      </View>

      <View>
        <Text style={styles.label}>Remaining</Text>
        <Text style={styles.value}>
          {((100_000_000 - valOfPlayers) / 1_000_000).toFixed(1)}m
        </Text>
      </View>
    </View>
  );
};

export default TeamStats;
