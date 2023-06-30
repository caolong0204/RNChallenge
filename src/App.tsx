import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppRoutes from './Navigators/appRoutes';

import {enableLatestRenderer} from 'react-native-maps';

const App = () => {
  enableLatestRenderer();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.root}>
        <AppRoutes />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
