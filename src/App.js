/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Alert, BackHandler, Linking} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './app/home/index';
import Novel from './app/novel/index';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './store';
import Settings from './app/novel/settings';
import Author from './app/author/index';
import Category from './app/category/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notification from './app/home/Notifications';
import { navigationRef } from './RootNavigation';
import { APP_STORE_URL } from './app/config';
const { Screen, Navigator } = createNativeStackNavigator();

let counter = 0;
const setCounter = async (value) => {
  try {
    const Jsonvalue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', Jsonvalue);
  } catch (e) {
    console.log('Error saving value');
  }
};

const getCounter = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.log('Error reading value');
  }
};

const rateUs = () => {
  return getCounter()
  .then(count => {
    if (count === null) {
      setCounter(counter);
    }
    else if (count === -1) {
      BackHandler.removeEventListener('hardwareBackPress', rateUs);
    } else if (count === 5) {
      counter = 0;
      setCounter(counter);
      BackHandler.removeEventListener('hardwareBackPress', rateUs);
      Alert.alert(
        'Rate Us',
        'Rate us if you like this app',
        [
          {
            text: 'Later',
            onPress: () => {
              counter = 0;
              setCounter(counter);
            },
          },
          {
            text: 'Rate Us',
            onPress: () => Linking.openURL(APP_STORE_URL),
            style: 'cancel',
          },
          { text: 'Never', onPress: () => {
            counter = 0;
            setCounter(counter);
          } },
        ]
      );
      return true;
    } else {
      counter++;
      console.warn(count);
      setCounter(counter);
      BackHandler.removeEventListener('hardwareBackPress', rateUs);
    }})
    .catch((err) =>{
    return console.log('Error Occured', err);
  });
};
export default function App() {
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', rateUs);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
          <Navigator>
              <Screen name="Home" options={{headerShown: false}} component={Home}/>
              <Screen name="Novel" options={{headerTitleAlign: 'center'}} component={Novel} />
              <Screen name="Author" options={{headerTitleAlign: 'center'}} component={Author}/>
              <Screen name="Settings" options={{headerTitleAlign: 'center'}} component={Settings}/>
              <Screen name="Category" options={{headerTitleAlign: 'center'}} component={Category}/>
              <Screen name="Notifications" options={{headerTitleAlign: 'center'}} component={Notification}/>
          </Navigator>
      </NavigationContainer>
    </Provider>
  );
}
