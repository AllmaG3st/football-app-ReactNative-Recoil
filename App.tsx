import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabOneScreen from 'screens/TabOneScreen';

type Props = {};

const App = (props: Props) => {
  return (
    <View style={styles.container}>
      <TabOneScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
