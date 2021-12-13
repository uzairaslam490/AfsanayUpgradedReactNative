/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

export default class NotificationItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {notifications} = this.props;
    let name = notifications.name;
    return (
      <View>
        <TouchableOpacity>
          <Text> {name} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
