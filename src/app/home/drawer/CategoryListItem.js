/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR_PRIMARY} from '../../colors';
import Loading from '../../common/loading';

export default class CategoryListItem extends Component {
  constructor(props) {
    super(props);
    this.goToCategory = this.goToCategory.bind(this);
  }
  goToCategory() {
    let {category, navigation} = this.props;
    let id = category.id;
    let name = category.urdu_name;
    navigation.navigate('Category',{id,name});
  }

  render() {
    let {category, isFetching} = this.props;
    // return (
    //     <View>
    //         <Text>Hello</Text>
    //     </View>
    // );
    let name = category.urdu_name || category.name;
    if (isFetching){
      return <Loading/>;
    } else {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.goToCategory}
        style={styles.container}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#ffffff',
    marginBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: COLOR_PRIMARY,
  },
  name: {
    fontFamily: 'Alvi-Nastaleeq-Regular',
    fontSize: 28,
    color: COLOR_PRIMARY,
  },
});
