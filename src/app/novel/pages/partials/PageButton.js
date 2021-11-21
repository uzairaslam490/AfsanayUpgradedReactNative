/* eslint-disable prettier/prettier */
/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR_PRIMARY} from '../../../colors';

export default class PageButton extends Component {
  constructor(props) {
    super(props);
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage() {
    let {page, goToPage} = this.props;
    goToPage(page);
  }

  render() {
    let {activePage, page} = this.props;
    let buttonStyles = [styles.button];
    let textStyles = [styles.text];
    if  (activePage === page) {
      buttonStyles.push(styles.activeButton);
      textStyles.push(styles.activeText);
    }
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={buttonStyles}
        onPress={this.goToPage}>
        <Text style={textStyles}>صفحہ نمبر {page}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
  },
  activeButton: {
    backgroundColor: COLOR_PRIMARY,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'NotoNaskhArabic-Regular',
    color: '#666666',
  },
  activeText: {
    color: '#ffffff',
  },
});
