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
// import ChatScreen from './ChatScreen';
import DragOnly from './DragOnly';
// import LongPressToDrag from './LongPressToDrag';
// import VibrateView from './VibrateView';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DragOnly />
      {/* <LongPressToDrag />
      <VibrateView/> */}
      {/* <ChatScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
});

export default App;
