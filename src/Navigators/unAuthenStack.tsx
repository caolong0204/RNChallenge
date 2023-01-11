import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import ProgressBarScreen from '../Container/ProgressBarScreen';
import ReactToMessage from '../Container/ReactToMessage';
import {APP_SCREEN, RootNativeStackParamList} from './screenTypes';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const UnAuthenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: false,
      }}
      initialRouteName={APP_SCREEN.PROGRESS_BAR}>
      <Stack.Screen
        name={APP_SCREEN.REACT_TO_MESSAGE}
        component={ReactToMessage}
      />
      <Stack.Screen
        name={APP_SCREEN.PROGRESS_BAR}
        component={ProgressBarScreen}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenStack;
