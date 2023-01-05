import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';
// import { AppStorage } from 'utils/storage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppRoutes from './Navigators/appRoutes';
// if (__DEV__) {
//   initializeMMKVFlipper({ default: AppStorage });
// }

const App = () => {
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
