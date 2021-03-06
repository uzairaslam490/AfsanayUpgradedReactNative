/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {FlatList, StyleSheet,View, Text, TouchableOpacity,Image,Linking, BackHandler, Alert} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,
  DrawerItem,
  DrawerItemList } from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/Ionicons';
import List from './List';
import Authors from '../authors/index';
import DrawerComponent from './drawer/index';
import {APP_STORE_URL} from '../config';
import messaging from '@react-native-firebase/messaging';
import { getAsyncNotifications, setNotification, removeNotification } from './Notifications/actions';

const cover = require('../../assets/icons/cover.png');


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
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image source={cover} style={{height: 200, width: null, resizeMode: 'stretch', marginBottom: 20}}/>
      <DrawerItemList {...props} />
      <DrawerItem label="Rate Us" icon={() =>{ return <Icon name="star" size={20}/>;}} onPress={() => Linking.openURL(APP_STORE_URL)} style={{marginLeft: 12}}/>
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

export default class HomeContent extends React.Component {
  _didFocusSubscription;
  _willBlurSubscription;
    constructor(props) {
        super(props);
        // this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
      // BackHandler.addEventListener('hardwareBackPress', this.RateUs));
    }
    componentDidMount() {
      let {navigation} = this.props;
      // this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      //   BackHandler.removeEventListener('hardwareBackPress', this.RateUs)
      // );
      this.requestUserPermission();
      messaging().onNotificationOpenedApp(remoteMessage => {
        setNotification(remoteMessage);
        console.log(remoteMessage);
      });
    }
    requestUserPermission = async() => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        this.getFcmToken();
        console.log('Authorization status:', authStatus);
      }
    }
    getFcmToken = async () => {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
       console.log('Your Firebase Token is:', fcmToken);
      } else {
       console.log('Failed', 'No token received');
      }
    }
    RateUs =() =>{
      if (this.isSelectionModeEnabled()) {
        this.disableSelectionMode();
        return true;
      } else {
        return false;
      }
    }
    componentWillUnmount() {
      // this._didFocusSubscription && this._didFocusSubscription.remove();
      // this._willBlurSubscription && this._willBlurSubscription.remove();
    }
    render() {
      let {navigation} = this.props;
        return (
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
              <Drawer.Screen name="HomeContent" component={List} options={{title: '???????? ???????? ?????? ????????????',headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                  <Icon name="notifications" size={25} style={{marginRight: 10}}/>
              </TouchableOpacity>),
              headerTitleAlign: 'center', headerTitleStyle: {fontFamily: 'Alvi-Regular', fontSize: 28},
              drawerLabel: 'Home', drawerIcon:(tintColor) => {
              return <Icon name="home" color={tintColor} size={20}/>;}}}/>

              <Drawer.Screen name="Authors" component={Authors} options={{title: '????????', headerTitleAlign: 'center', headerTitleStyle: {fontFamily: 'Alvi-Regular', fontSize: 28},
              drawerLabel: 'Authors', drawerIcon:(tintColor) => {
              return <Icon name="people" color={tintColor} size={20}/>;}}}/>
              <Drawer.Screen name="Categories" component={DrawerComponent} options={{title: '?????????? ?? ??????????', headerTitleAlign: 'center', headerTitleStyle: {fontFamily: 'Alvi-Regular', fontSize: 28},
              drawerLabel: 'Categories', drawerIcon:(tintColor) => {
              return <Icon name="file-tray" color={tintColor} size={20}/>;}}}/>
            </Drawer.Navigator>
          );
    }
}
