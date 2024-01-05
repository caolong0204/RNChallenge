import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootNativeStackParamList} from './screenTypes';

export const navigationRef =
  createNavigationContainerRef<
    NavigationContainerRef<RootNativeStackParamList>
  >();

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
export function pushScreen<RouteName extends keyof RootNativeStackParamList>(
  ...arg: undefined extends RootNativeStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootNativeStackParamList[RouteName]]
    : [screen: RouteName, params: RootNativeStackParamList[RouteName]]
) {
  navigationRef.current?.dispatch(
    StackActions.push(arg[0] as any, arg.length > 1 ? arg[1] : undefined),
  );
}

export function replaceScreen<RouteName extends keyof RootNativeStackParamList>(
  ...arg: undefined extends RootNativeStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootNativeStackParamList[RouteName]]
    : [screen: RouteName, params: RootNativeStackParamList[RouteName]]
) {
  navigationRef?.dispatch(
    StackActions.replace(arg[0] as any, arg.length > 1 ? arg[1] : undefined),
  );
}

export function navigateAndSimpleReset(name: string, index = 0) {
  navigationRef?.dispatch(
    CommonActions.reset({
      index,
      routes: [{name}],
    }),
  );
}
export function getCurrentRoute() {
  return navigationRef?.getCurrentRoute()?.name;
}

export function getNavState() {
  return navigationRef?.getState();
}
