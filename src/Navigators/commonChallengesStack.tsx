// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {APP_SCREEN, RootNativeStackParamList} from './screenTypes';
import Challenges1Stack from './Challenges1Stack';
// import MomoScreen from '../Container/CommonChallenges/MomoScreen';
import Challenges2Stack from './Challenges2Stack';
import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const Stack = createStackNavigator<RootNativeStackParamList>();

const CommonChallengesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationTypeForReplace: 'pop',
        headerShown: false,
      }}
      initialRouteName={APP_SCREEN.CHALLENGE1}>
      <Stack.Screen name={APP_SCREEN.CHALLENGE1} component={Challenges1Stack} />
      <Stack.Screen name={APP_SCREEN.CHALLENGE2} component={Challenges2Stack} />
      {/* <Stack.Screen name={APP_SCREEN.MOMO_SCREEN} component={MomoScreen} /> */}
    </Stack.Navigator>
  );
};

export default CommonChallengesStack;
