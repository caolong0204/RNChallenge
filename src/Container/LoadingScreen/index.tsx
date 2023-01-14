import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Screen from '../../Components/Screen';
import ThreeDots from '../../Components/ThreeDot';

const LoadingScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.subView}>
          <Text>Loading</Text>
          <ThreeDots />
        </View>
      </View>
    </Screen>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, paddingHorizontal: 20},
  subView: {flexDirection: 'row', justifyContent: 'center'},
});
