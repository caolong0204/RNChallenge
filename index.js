/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {setCustomView, setCustomText} from 'react-native-global-props';
const customViewProps = {
  style: {
    backgroundColor: '#fff', // light gray
  },
};
const customTextProps = {
    style: {
      fontSize: 16,
      fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
      color: 'black',
      fontWeight:"500"
    }
  };
setCustomView(customViewProps);
setCustomText(customTextProps);
AppRegistry.registerComponent(appName, () => App);
