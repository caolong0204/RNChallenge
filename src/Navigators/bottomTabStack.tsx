import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Container/BottomTab/HomeScreen';
import AccountScreen from '../Container/BottomTab/AccountScreen';
import PodCastScreen from '../Container/BottomTab/PodCastScreen';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <View style={styles.customButtonView}>{children}</View>
    </TouchableOpacity>
  );
};
const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      })}
      initialRouteName={BOTTOM_TAB_ROUTE.home}>
      <Tab.Screen
        name={BOTTOM_TAB_ROUTE.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.iconBottom}>
              <Entypo name="home" size={30} color={focused ? 'red' : 'grey'} />
              <Text style={{color: focused ? 'red' : 'grey'}}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={BOTTOM_TAB_ROUTE.podCast}
        component={PodCastScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <MaterialIcons
                name="podcast"
                size={30}
                color={focused ? 'red' : 'grey'}
              />
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={BOTTOM_TAB_ROUTE.account}
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <MaterialIcons
                name="account"
                size={30}
                color={focused ? 'red' : 'grey'}
              />
              <Text style={{color: focused ? 'red' : 'grey'}}>Account</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabStack;
export const BOTTOM_TAB_ROUTE = {
  home: 'HOME',
  account: 'ACCOUNT',
  podCast: 'PODCAST',
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  customButtonView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  customButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconBottom: {alignItems: 'center', justifyContent: 'center', top: 10},
});
