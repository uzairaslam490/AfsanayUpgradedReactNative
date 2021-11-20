/* eslint-disable prettier/prettier */
import NovelsList from '../../common/novels-list/index';
import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

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
export default class List extends Component{
  constructor(props){
      super(props);
  }
  render(){
      let {novels, isFetching, error,hasMore, getNovels, navigation} = this.props;
      return (
        <View style={styles.container}>
          <NovelsList
            isFetching={isFetching}
            novels={novels}
            hasMore={hasMore}
            getNovels={getNovels}
            navigation={navigation}
          />
        </View>
      );
  }
}
