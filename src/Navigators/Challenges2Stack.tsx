import * as React from 'react';

import {APP_SCREEN, RootNativeStackParamList} from './screenTypes';

import MomoScreen from '../Container/CommonChallenges/MomoScreen';
import TimeLine from '../Container/CommonChallenges/Timeline';
import {CarsWithTimeList} from '../Container/CommonChallenges/CarWithTime';
import NewChallenge from '../Container/CommonChallenges/NewChallengeScreen';
import General2Screen from '../Container/CommonChallenges/General2Screen';
import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const Stack = createStackNavigator<RootNativeStackParamList>();
const Challenges2Stack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: true,
      }}
      initialRouteName={APP_SCREEN.GENERATE2SCREEN}>
      <Stack.Screen
        name={APP_SCREEN.GENERATE2SCREEN}
        component={General2Screen}
      />
      <Stack.Screen name={APP_SCREEN.MOMO_SCREEN} component={MomoScreen} />
      <Stack.Screen name={APP_SCREEN.TIME_LINE} component={TimeLine} />
      <Stack.Screen name={APP_SCREEN.CAR_TIME} component={CarsWithTimeList} />
      <Stack.Screen name={APP_SCREEN.NEW_CHALLENGE} component={NewChallenge} />
    </Stack.Navigator>
  );
};

export default Challenges2Stack;
