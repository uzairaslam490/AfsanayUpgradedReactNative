/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {FlatList, View, Text, RefreshControl} from 'react-native';
import novel from '../../novel';
import Novel from './Novel';
// import {COLOR_PRIMARY} from '../../colors';

export default class NovelsList extends Component {
  static get defaultProps() {
    return {
      allowAuthorPage: true,
    };
  }

  constructor(props) {
    super(props);
    this.getNovels = this.getNovels.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.refreshList = this.refreshList.bind(this);
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.getNovels();
  }
  renderItem(options) {
    let {allowAuthorPage} = this.props;
    return <Novel novel={options.item} allowAuthorPage={allowAuthorPage} navigation={this.props.navigation}/>;
  }
  keyExtractor(item, index) {
    return item.id.toString();
  }
  onEndReached() {
    this.getNovels();
  }
  getNovels(reset = false) {
    let {getNovels, novels, isFetching, hasMore} = this.props;
    if  (!isFetching && hasMore) {
      let params = {
        limit: 10,
        offset: reset ? 0 : novels.length,
      };
      console.log(isFetching, hasMore, params);
      this.props.getNovels(params, reset);
  }
}
  refreshList() {
    this.getNovels();
  }
  render() {
    let {novels, isFetching} = this.props;
    // console.log(novels);
    return (
      <FlatList
        data={novels}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        onEndReached={this.onEndReached}
        refreshing={isFetching}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={this.refreshList}
          />
        }
      />
    );
  }
}
