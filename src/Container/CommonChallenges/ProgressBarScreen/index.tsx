import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  InteractionManager,
} from 'react-native';
import Box from '../../../Components/Box';
import ProgressBar, {ProgressBarRef} from '../../../Components/ProgressBar';
import {goBack, navigate} from '../../../Navigators/navigationService';
import {APP_SCREEN} from '../../../Navigators/screenTypes';
import {useState} from 'react';

const ProgressBarScreen = () => {
  const MAX_VALUE = 100;
  const ProgressRef = React.useRef<ProgressBarRef>(null);
  const [flag, setFlag] = useState(false);

  const handleAddValue = async () => {
    ProgressRef.current?.handleUpProgressBar();
  };
  const handleSubtractValue = async () => {
    ProgressRef.current?.handleDownProgressBar();
  };
  console.log('=======renderA');
  React.useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      console.log('========runAfterInteractions');
      setFlag(true);
    });
    console.log('============useEffect');
  }, []);
  console.log('=======renderB');
  return (
    <View style={styles.container}>
      <Button title={'back'} onPress={goBack} />
      <Text>A</Text>
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
      <Button
        title="go to B"
        onPress={() => {
          navigate(APP_SCREEN.REACT_TO_MESSAGE);
        }}
      />
      {flag && <Text>Hello</Text>}
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
