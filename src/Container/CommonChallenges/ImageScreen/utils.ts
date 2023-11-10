import {Platform} from 'react-native';

export const Android = Platform.OS === 'android';
export const convertPathForPlatform = (path: string) => {
  if (!path) return null;
  return Android
    ? /file:\/\//.test(path)
      ? path
      : 'file://' + path
    : path?.replace(/file:\/\//g, '');
};
