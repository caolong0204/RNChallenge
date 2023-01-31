import * as React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Screen} from 'react-native-screens';
import Box from '../../../Components/Box';
import ProgressBar, {ProgressBarRef} from '../../../Components/ProgressBar';

const ProgressBarScreen = () => {
  const MAX_VALUE = 100;
  const ProgressRef = React.useRef<ProgressBarRef>(null);
  const handleAddValue = async () => {
    ProgressRef.current?.handleUpProgressBar();
  };
  const handleSubtractValue = async () => {
    ProgressRef.current?.handleDownProgressBar();
  };

  return (
    <View style={styles.container}>
      <Box />
      <ProgressBar currentValue={0} maxValue={MAX_VALUE} ref={ProgressRef} />
      <View style={styles.controller}>
        <TouchableOpacity style={styles.button} onPress={handleAddValue}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubtractValue}>
          <Text>Sub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProgressBarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'green',
    marginRight: 30,
    marginTop: 50,
  },
});
