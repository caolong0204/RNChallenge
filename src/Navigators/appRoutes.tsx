import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AuthenStack from './authenStack';
import UnAuthenStack from './unAuthenStack';
import {navigationRef} from './navigationService';

const AppRoutes = () => {
  const isSignIn = true;
  return (
    <NavigationContainer ref={navigationRef}>
      <>
        <StatusBar translucent backgroundColor={'transparent'} />
        {!isSignIn ? <AuthenStack /> : <UnAuthenStack />}
      </>
    </NavigationContainer>
  );
};

export default AppRoutes;
