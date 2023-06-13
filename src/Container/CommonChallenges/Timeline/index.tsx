import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const TimeLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subView}>
        <Text>TimeLine</Text>
      </View>
    </View>
  );
};

export default TimeLine;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, paddingHorizontal: 20},
  subView: {flexDirection: 'row', justifyContent: 'center'},
});
