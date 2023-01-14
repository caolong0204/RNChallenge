import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import LoadingScreen from '../Container/LoadingScreen';
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
      initialRouteName={APP_SCREEN.LOADING_SCREEN}>
      <Stack.Screen
        name={APP_SCREEN.REACT_TO_MESSAGE}
        component={ReactToMessage}
      />
      <Stack.Screen
        name={APP_SCREEN.PROGRESS_BAR}
        component={ProgressBarScreen}
      />
      <Stack.Screen
        name={APP_SCREEN.LOADING_SCREEN}
        component={LoadingScreen}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenStack;
