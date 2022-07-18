import {View, Text} from 'react-native';
import React, {memo} from 'react';

//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5';

import {COLORS} from 'constants/Colors';
import styles from './styles';
import {Player} from 'types';

type Props = {
  player: Player | null;
  position: string;
};

const FieldPlayer = ({player = null, position = ''}: Props) => {
  return (
    <View style={styles.iconContainer}>
      <Icon
        name="tshirt"
        size={35}
        color={player ? COLORS.purple : COLORS.grey}
      />
      <Text style={styles.iconText}>{player ? player.name : position}</Text>
    </View>
  );
};

export default memo(FieldPlayer);
