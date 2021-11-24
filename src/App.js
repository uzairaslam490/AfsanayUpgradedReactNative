/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './app/home/index';
import Novel from './app/novel/index';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './store';
import { parseAsync } from '@babel/core';
import { TabRouter } from 'react-navigation';
import Settings from './app/novel/settings';
import Author from './app/author/index';
const { Screen, Navigator } = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Navigator>
              <Screen name="Home" options={{headerShown: false}} component={Home}/>
              <Screen name="Novel" options={{headerTitleAlign: 'center'}} component={Novel} />
              <Screen name="Author" options={{headerTitleAlign: 'center'}} component={Author}/>
              <Screen name="Settings" options={{headerTitleAlign: 'center'}} component={Settings}/>
          </Navigator>
      </NavigationContainer>
    </Provider>
  );
}
