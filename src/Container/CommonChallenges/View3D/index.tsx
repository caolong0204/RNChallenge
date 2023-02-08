import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import ThreeDots from '../../../Components/ThreeDot';

const View3D = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subView}>
        <Text>3D</Text>
        <ThreeDots />
      </View>
    </View>
  );
};

export default View3D;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, paddingHorizontal: 20},
  subView: {flexDirection: 'row', justifyContent: 'center'},
});
