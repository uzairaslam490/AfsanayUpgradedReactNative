/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import * as RootNavigation from './src/RootNavigation';
import {
  removeNotification,
  setNotification,
} from './src/app/home/Notifications/actions';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  setNotification(remoteMessage);
  RootNavigation.navigate('Notification');
});
messaging().onMessage(async remoteMessage => {
  RootNavigation.navigate('Notification');
});
AppRegistry.registerComponent(appName, () => App);
