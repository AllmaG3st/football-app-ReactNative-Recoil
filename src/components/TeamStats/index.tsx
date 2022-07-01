import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

type Props = {};

const TeamStats = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Players</Text>
        <Text style={styles.value}>0 / 15</Text>
      </View>

      <View>
        <Text style={styles.label}>Remaining</Text>
        <Text style={styles.value}>100m</Text>
      </View>
    </View>
  );
};

export default TeamStats;
