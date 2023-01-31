import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import GeneralScreen from '../Container/CommonChallenges/GeneralScreen';
import LoadingScreen from '../Container/CommonChallenges/LoadingScreen';
import MomoScreen from '../Container/CommonChallenges/MomoScreen';
import ProgressBarScreen from '../Container/CommonChallenges/ProgressBarScreen';
import ReactToMessage from '../Container/CommonChallenges/ReactToMessage';
import {APP_SCREEN, RootNativeStackParamList} from './screenTypes';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const CommonChallengesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: true,
      }}
      initialRouteName={APP_SCREEN.GENERAL_SCREEN}>
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
      <Stack.Screen name={APP_SCREEN.MOMO_SCREEN} component={MomoScreen} />
    </Stack.Navigator>
  );
};

export default CommonChallengesStack;