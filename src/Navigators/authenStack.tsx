import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Container/HomeScreen';
import AccountScreen from '../Container/AccountScreen';
import PodCastScreen from '../Container/PodCastScreen';

const Tab = createBottomTabNavigator();

const AuthenStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
      })}
      initialRouteName={BOTTOM_TAB_ROUTE.home}>
      <Tab.Screen name={BOTTOM_TAB_ROUTE.home} component={HomeScreen} />
      <Tab.Screen name={BOTTOM_TAB_ROUTE.account} component={AccountScreen} />
      <Tab.Screen name={BOTTOM_TAB_ROUTE.podCast} component={PodCastScreen} />
    </Tab.Navigator>
  );
};
export default AuthenStack;
export const BOTTOM_TAB_ROUTE = {
  home: 'HOME',
  account: 'ACCOUNT',
  podCast: 'PODCAST',
};
