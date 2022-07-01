import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import TabOneScreen from 'screens/TabOneScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type Props = {};

const App = (props: Props) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <TabOneScreen />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
