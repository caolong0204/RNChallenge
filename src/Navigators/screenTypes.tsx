import {NativeStackScreenProps as RNStackScreenProps} from '@react-navigation/native-stack';

export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  REACT_TO_MESSAGE = 'REACT_TO_MESSAGE',

  AUTHORIZE = 'AUTHORIZE',
  CHALLENGE_TAB = 'CHALLENGE_TAB',
  HOME_SCREEN = 'HOME_SCREEN',
  ACCOUNT_SCREEN = 'ACCOUNT_SCREEN',
  POD_CAST_SCREEN = 'POD_CAST_SCREEN',
}
export type UnAuthorizeParamsList = {
  [APP_SCREEN.REACT_TO_MESSAGE]: undefined;
};
export type AuthorizeParamsList = {
  //3 Màn chính trong bottom Tab
  [APP_SCREEN.CHALLENGE_TAB]: undefined;
  [APP_SCREEN.HOME_SCREEN]: undefined;
  [APP_SCREEN.ACCOUNT_SCREEN]: undefined;
  [APP_SCREEN.POD_CAST_SCREEN]: undefined;
};
export type RootNativeStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
} & UnAuthorizeParamsList &
  AuthorizeParamsList;

export type StackScreenProps<T extends keyof RootNativeStackParamList> =
  RNStackScreenProps<RootNativeStackParamList, T>;
