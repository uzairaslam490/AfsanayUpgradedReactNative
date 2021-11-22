/* eslint-disable prettier/prettier */
import * as React from 'react';
import {FlatList, StyleSheet,View, Text, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NovelsList from '../common/novels-list/index';
import  Icon  from 'react-native-vector-icons/Ionicons';
import List from './List';


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
const Drawer = createDrawerNavigator();

export default class HomeContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Drawer.Navigator>
              <Drawer.Screen name="HomeContent" component={List} options={{title: 'اردو ناول اور افسانے', headerTitleAlign: 'center', headerTitleStyle: {fontFamily: 'Alvi-Nastaleeq-Regular', fontSize: 28},
              drawerLabel: 'Home', drawerIcon:(tintColor) => {
              return <Icon name="home" color={tintColor} size={20}/>;}}}/>
            </Drawer.Navigator>
          );
    }
}
