import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {APP_SCREEN, RootNativeStackParamList} from './screenTypes';

import GeneralScreen from '../Container/CommonChallenges/GeneralScreen';
import LoadingScreen from '../Container/CommonChallenges/LoadingScreen';
import ProgressBarScreen from '../Container/CommonChallenges/ProgressBarScreen';
import ReactToMessage from '../Container/CommonChallenges/ReactToMessage';
import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const Stack = createStackNavigator<RootNativeStackParamList>();

const Challenges1Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: false,
      }}
      initialRouteName={APP_SCREEN.GENERATE2SCREEN}>
      <Stack.Screen
        name={APP_SCREEN.GENERAL_SCREEN}
        component={GeneralScreen}
      />
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

export default Challenges1Stack;
