/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, FlatList, RefreshControl, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLOR_PRIMARY } from '../../colors';
import NotificationItem from './NotificationItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.getNotifications = this.getNotifications.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.refreshList = this.refreshList.bind(this);
  }
  componentDidMount(){
    this.getNotifications();
  }
  renderItem = (item) => {
      let {navigation} = this.props;
      return (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.message}</Text>
        </View>
      );
  }
  onEndReached() {
    this.getNotifications();
  }
  getNotifications(reset = false){
      let {getNotifications, isFetching, hasMore} = this.props;
        console.log(isFetching, hasMore);
        getNotifications(reset);
  }
  refreshList(){
      this.getNotifications();
  }
  render() {
      let {notifications, isFetching} = this.props;
      console.warn(notifications);
      // if (isFetching){
      //   return (
      //     <View>
      //       <Icon name="document-text" size={40}/>
      //       <Text style={{fontSize: 40, textAlign: 'center'}}>No new Notification</Text>
      //     </View>
      //   );
      // } else {
    return (
      // <FlatList
      //   data={notifications}
      //   renderItem={this.renderItem}
      //   keyExtractor={item => item.id}
      //   onEndReached={this.onEndReached}
      //   onEndReachedThreshold={0.5}
      //   refreshing={isFetching}
      //   refreshControl={
      //     <RefreshControl
      //       refreshing={isFetching}
      //       onRefresh={this.refreshList}
      //       colors={[COLOR_PRIMARY]}
      //       size={'large'}
      //     />
      //   }
      // />
      <View>
        <Text style={{textAlign: 'center', fontSize: 30}}>Hello World</Text>
      </View>
    );
  }
}
