/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AdBanner from '../ad-banner';

export default class Author extends Component {
  constructor(props) {
    super(props);
    this.gotoAuthor = this.gotoAuthor.bind(this);
  }
  gotoAuthor() {
    let {author, navigation} = this.props;
    let id = author.id;
    let name = author.urdu_name;
      navigation.navigate('Author',{
        id: id,
        name: name,
  });
}
  render() {
    let {author, index} = this.props;
    let name = author.urdu_name || author.name;
    return (
      <View>
        <TouchableOpacity activeOpacity={0.7} onPress={this.gotoAuthor}>
          <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Alvi-Regular',
    textAlign: 'center',
  },
  adContainer: {
    marginBottom: 4,
    marginTop: 4,
  },
});
