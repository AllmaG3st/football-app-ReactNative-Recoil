import {View, Text, Image, Pressable} from 'react-native';
import React, {memo, useCallback} from 'react';
import {useRecoilState} from 'recoil';

//@ts-ignore
import {myTeamState} from 'atoms/MyTeam';
import {Player} from 'types';

import styles from './styles';
import {COLORS} from 'constants/Colors';

type Props = {
  player: Player;
};

const PlayerListItem = ({player}: Props) => {
  const [myPlayers, setMyPlayers] = useRecoilState<Player[]>(myTeamState);

  const handlePlayerPress = useCallback(
    (player: Player) => {
      if (myPlayers.some(pl => pl.id === player.id)) {
        return setMyPlayers(currentPlayer =>
          currentPlayer.filter(pl => pl.id !== player.id),
        );
      } else {
        return setMyPlayers(currentPlayers => [...currentPlayers, player]);
      }
    },
    [myPlayers],
  );

  const isSelected = myPlayers.some(pl => pl.id === player.id);

  return (
    <Pressable
      onPress={() => handlePlayerPress(player)}
      style={[
        styles.container,
        {backgroundColor: isSelected ? COLORS.purple : COLORS.white},
      ]}>
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
    </Pressable>
  );
};

export default memo(PlayerListItem);
