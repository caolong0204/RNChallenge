/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ChatScreen from './ChatScreen';
// import DragOnly from './DragOnly';
// import LongPressToDrag from './LongPressToDrag';
// import VibrateView from './VibrateView';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      {/* <LongPressToDrag />
      <DragOnly />
      <VibrateView/> */}
      <ChatScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});

export default App;
