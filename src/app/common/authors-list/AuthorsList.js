/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {FlatList, View, Text, RefreshControl} from 'react-native';
import Author from './Author';
import {COLOR_PRIMARY} from '../../colors';

export default class AuthorsList extends Component {
  constructor(props) {
    super(props);
    this.getAuthors = this.getAuthors.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.refreshList = this.refreshList.bind(this);
  }
  componentDidMount() {
    this.getAuthors();
  }
  renderItem(options) {
    return <Author author={options.item} navigation={this.props.navigation} />;
  }
  keyExtractor(item, index) {
    return item.id.toString();
  }
  onEndReached() {
    this.getAuthors();
  }
  getAuthors(reset = false) {
    let {getAuthors, authors, isFetching, hasMore} = this.props;
    if (!isFetching && hasMore) {
      let params = {
        limit: 10,
        offset: reset ? 0 : authors.length,
      };
      getAuthors(params, reset);
    }
  }
  refreshList() {
    this.getAuthors({}, true);
  }
  render() {
    let {authors, getAuthors, isFetching} = this.props;
    return (
      <FlatList
        data={authors}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.5}
        refreshing={isFetching}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={this.refreshList}
            colors={[COLOR_PRIMARY]}
          />
        }
      />
    );
  }
}
