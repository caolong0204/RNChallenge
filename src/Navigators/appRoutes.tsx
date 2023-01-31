import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import BottomTabStack from './bottomTabStack';
import CommonChallengesStack from './commonChallengesStack';
import {navigationRef} from './navigationService';

const AppRoutes = () => {
  const isTabStack = true;
  return (
    <NavigationContainer ref={navigationRef}>
      <>
        <StatusBar translucent backgroundColor={'transparent'} />
        {!isTabStack ? <BottomTabStack /> : <CommonChallengesStack />}
      </>
    </NavigationContainer>
  );
};

export default AppRoutes;
