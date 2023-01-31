import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Container/BottomTab/HomeScreen';
import AccountScreen from '../Container/BottomTab/AccountScreen';
import PodCastScreen from '../Container/BottomTab/PodCastScreen';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName={BOTTOM_TAB_ROUTE.home}>
      <Tab.Screen name={BOTTOM_TAB_ROUTE.home} component={HomeScreen} />
      <Tab.Screen name={BOTTOM_TAB_ROUTE.account} component={AccountScreen} />
      <Tab.Screen name={BOTTOM_TAB_ROUTE.podCast} component={PodCastScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabStack;
export const BOTTOM_TAB_ROUTE = {
  home: 'HOME',
  account: 'ACCOUNT',
  podCast: 'PODCAST',
};
