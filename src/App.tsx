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
import ModalVideo from './VideoModal';
// import DragOnly from './DragOnly';
// import LongPressToDrag from './LongPressToDrag';
// import VibrateView from './VibrateView';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      {/* <LongPressToDrag />
      <DragOnly />
      <VibrateView/> */}
      {/* <ChatScreen /> */}
      <ModalVideo />
    </SafeAreaView>
  );
};


export default App;
