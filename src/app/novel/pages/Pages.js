/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PageButton from './partials/PageButton';
import { COLOR_PRIMARY } from '../../colors';

export default class Page extends Component {
  constructor(props){
    super(props);
    this.goToPage = this.goToPage.bind(this);
  }
  goToPage(page){
    let { getNovelPage, no, navigation } = this.props;
    let {id} = this.props.params;
    if (no !== page){
      getNovelPage(id, page);
    }
    navigation.navigate('PageRoot');
  }
  render() {
    let { isFetching, error, no, novel } = this.props;
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={{ flexDirection: 'row-reverse',
                         flexWrap: 'wrap',
                         justifyContent: 'space-around',
                         margin: 15,
                         backgroundColor: '#fff' }}>
            {(() => {
              let pages = [];
              for (let i = 1; i <= novel.totalPages; i++){
                pages.push((
                  <PageButton
                    key={i}
                    activePage={no}
                    page={i}
                    goToPage={this.goToPage}
                    />
                ));
              }
              return pages;
            })()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  controlsContainer: {
    backgroundColor: COLOR_PRIMARY,
    flexDirection: 'row',
    elevation: 10,
    padding: 6,
  },
  control: {
    flex: 1,
    padding: 8,
    margin: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  controlText: {
    textAlign: 'center',
    color: COLOR_PRIMARY,
    fontSize: 16,
  },
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    elevation: 5,
    borderRadius: 6,
  },
  loading: {
    textAlign: 'center',
  },
  text: {
    fontFamily: 'NotoNaskhArabic-Regular',
    fontSize: 22,
  },
});

