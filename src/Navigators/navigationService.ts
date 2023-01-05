import {createRef} from 'react';

import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {RootNativeStackParamList} from './screenTypes';

export const navigationRef =
  createRef<NavigationContainerRef<RootNativeStackParamList>>();

export function navigate<RouteName extends keyof RootNativeStackParamList>(
  ...arg: undefined extends RootNativeStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootNativeStackParamList[RouteName]]
    : [screen: RouteName, params: RootNativeStackParamList[RouteName]]
) {
  navigationRef.current?.navigate(
    arg[0] as any,
    arg.length > 1 ? arg[1] : undefined,
  );
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack);
}

export function navigateAndSimpleReset(name: string, index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{name}],
    }),
  );
}
export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute()?.name;
}
