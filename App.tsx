import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';

import TabOneScreen from 'screens/TabOneScreen';

type Props = {};

const App = (props: Props) => {
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.container}>
          <TabOneScreen />
        </View>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
