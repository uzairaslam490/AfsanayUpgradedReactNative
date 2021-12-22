/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, FlatList, RefreshControl, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLOR_PRIMARY } from '../../colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setNotifications } from './actions';
import NotificationItem from './NotificationItem';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.getNotifications = this.getNotifications.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.refreshList = this.refreshList.bind(this);
  }
  componentDidMount(){
    let {isFetched, isFetching, hasMore} = this.props;
    if (!isFetched) {
    this.getNotifications();
    }
  }
  renderItem (options) {
      let {navigation} = this.props;
      return  <NotificationItem notifications={options.item} navigation={navigation}/>;
  }
  onEndReached() {
    this.getNotifications();
  }
  getNotifications(reset = false){
      let {getNotifications, isFetching, hasMore} = this.props;
        // console.log(isFetching, hasMore);
        getNotifications(reset);
  }
  refreshList(){
      this.getNotifications();
  }
  render() {
      let {notifications, isFetching,isFetched, hasMore} = this.props;
      console.log(isFetched, isFetching,hasMore);
      console.log(notifications);
      let Notification = notifications.map(item => {return item.data;});
      // console.log(Notification);
      // if (isFetching){
      //   return (
      //     <View>
      //       <Icon name="document-text" size={40}/>
      //       <Text style={{fontSize: 40, textAlign: 'center'}}>No new Notification</Text>
      //     </View>
      //   );
      // } else {
    return (
      <FlatList
        data={Notification}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        // onEndReached={this.onEndReached}
        // onEndReachedThreshold={0.5}
        // refreshing={isFetching}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={isFetching}
        //     onRefresh={this.refreshList}
        //     colors={[COLOR_PRIMARY]}
        //     size={'large'}
        //   />
        // }
      />
      // <View>
      //   {notifications.map(item => <Text>{item.data.title}</Text>)}
      // </View>
    );
  }
}
