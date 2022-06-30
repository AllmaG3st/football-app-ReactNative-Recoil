import {View, Text, ImageBackground} from 'react-native';
import React from 'react';

//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5';

//@ts-ignore
import field from 'assets/images/field.jpg';
import {COLORS} from 'constants/Colors';
import styles from './styles';

type PlayersType = {
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
  return (
    <ImageBackground source={field} resizeMode="contain" style={styles.bgImage}>
      {Object.keys(players).map(position => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          {players[position].map(player => (
            <View style={{alignItems: 'center'}}>
              <Icon
                name="tshirt"
                size={35}
                color={player ? COLORS.player : COLORS.existing}
              />
              <Text
                style={{
                  backgroundColor: COLORS.existing,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  fontSize: 12,
                  padding: 2,
                  paddingHorizontal: 7,
                }}>
                {position}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </ImageBackground>
  );
};

export default Field;
