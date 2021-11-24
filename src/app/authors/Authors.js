/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DrawerLayoutAndroid, View, Text} from 'react-native';
import PageWrapper from '../common/page-wrapper';
import Loading from '../common/loading';
import AuthorsList from '../common/authors-list';
import Header from '../common/header';
import {trackEvent, trackScreen} from '../common/helpers';

export default class Authors extends Component {
  static get propTypes() {
    return {
      authors: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.string,
      getAuthors: PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.getAuthors = this.getAuthors.bind(this);
  }

  componentDidMount() {
    // trackScreen('HomeScreenOpened');
    // trackEvent('HomeScreenOpened');
  }

  componentWillUnmount() {
    let {resetAuthors} = this.props;
    resetAuthors();
  }

  getAuthors(params = {}, reset = false) {
    let {getAuthors} = this.props;
    getAuthors(params, reset);
  }

  render() {
    let {authors, isFetching, error, hasMore} = this.props;
    return (
        <AuthorsList
          isFetching={isFetching}
          authors={authors}
          hasMore={hasMore}
          getAuthors={this.getAuthors}
          navigation={this.props.navigation}
        />
    );
  }
}
