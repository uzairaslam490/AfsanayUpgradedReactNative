/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigation;
  }
  render() {
    // const {navigation} = this.props;
    //   if (navigation.isFocused()){
    //   navigation.setOptions({tabBarIcon:() => {
    //     return <Icon name="book" size={25}/>;
    //   }});}
    //   else {
    //     navigation.setOptions({tabBarIcon:() => {
    //       return <Icon name="book-outline" size={25}/>;
    //     }});
    //   }
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>How are you doing today ?</Text>
      </View>
    );
  }
}
