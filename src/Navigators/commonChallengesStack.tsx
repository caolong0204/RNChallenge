import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {APP_SCREEN, RootNativeStackParamList} from './screenTypes';
import LoadingScreen from '../Container/CommonChallenges/LoadingScreen';
import ProgressBarScreen from '../Container/CommonChallenges/ProgressBarScreen';
import GeneralScreen from '../Container/CommonChallenges/GeneralScreen';
import ReactToMessage from '../Container/CommonChallenges/ReactToMessage';
import MomoScreen from '../Container/CommonChallenges/MomoScreen';
import TimeLine from '../Container/CommonChallenges/Timeline';
import {CarsWithTimeList} from '../Container/CommonChallenges/CarWithTime';
import NewChallenge from '../Container/CommonChallenges/NewChallengeScreen';

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
      <Stack.Screen name={APP_SCREEN.TIME_LINE} component={TimeLine} />
      <Stack.Screen name={APP_SCREEN.CAR_TIME} component={CarsWithTimeList} />
      <Stack.Screen name={APP_SCREEN.NEW_CHALLENGE} component={NewChallenge} />
    </Stack.Navigator>
  );
};

export default CommonChallengesStack;
