/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {COLOR_PRIMARY} from '../../colors';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={COLOR_PRIMARY} size={'large'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
