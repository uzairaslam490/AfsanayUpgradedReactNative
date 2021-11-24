/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAuthors, resetAuthors} from './actions';
import Authors from './Authors';

const mapStateToProps = store => {
  return {
    authors: store.authors.authors,
    isFetching: store.authors.isFetching,
    error: store.authors.error,
    hasMore: store.authors.hasMore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthors: (params, reset) => dispatch(getAuthors(params, reset)),
    resetAuthors: () => dispatch(resetAuthors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authors);

