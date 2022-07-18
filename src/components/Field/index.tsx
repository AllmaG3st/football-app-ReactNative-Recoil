import {View, ImageBackground} from 'react-native';
import React from 'react';
import {useRecoilValue} from 'recoil';

//@ts-ignore
import {myPlayersByPosition} from 'atoms/MyTeam';
import FieldPlayer from './FieldPlayer';

//@ts-ignore
import field from 'assets/images/field.jpg';
import styles from './styles';

export type PlayersType = {
  [key: string]: null[];
};

const players: PlayersType = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
};

type Props = {};

const Field = (props: Props) => {
  const players = useRecoilValue<PlayersType>(myPlayersByPosition);

  return (
    <ImageBackground source={field} resizeMode="contain" style={styles.bgImage}>
      {Object.keys(players).map((position, index) => (
        <View style={styles.positionContainer} key={index}>
          {players[position].map((player, index) => (
            <FieldPlayer {...{position, player}} key={index} />
          ))}
        </View>
      ))}
    </ImageBackground>
  );
};

export default Field;
