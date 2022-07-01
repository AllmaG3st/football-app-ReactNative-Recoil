import {View, Text, Image} from 'react-native';
import React from 'react';

import {Player} from 'types';

import styles from './styles';

type Props = {
  player: Player;
};

const PlayerListItem = ({player}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://media.api-sports.io/football/players/${player.id}.png`,
        }}
        style={styles.image}
      />

      <View style={styles.nameContainer}>
        <Text style={styles.name}>{player.name}</Text>
        <Text>{player.match}</Text>
      </View>

      <View style={styles.positionContainer}>
        <Text style={styles.name}>
          ${(player.price / 1_000_000).toFixed(1)}m
        </Text>
        <Text>{player.position}</Text>
      </View>

      <Text style={styles.points}>{player.totalPoints}</Text>
    </View>
  );
};

export default PlayerListItem;
