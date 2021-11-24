/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNovels, resetAuthor, getAuthor} from './actions';
import Author from './Author';

const mapStateToProps = store => {
  return {
    author: store.author.author,
    novels: store.author.novels,
    isFetching: store.author.isFetching,
    error: store.author.error,
    hasMore: store.author.hasMore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthor: (id, reset) => dispatch(getAuthor(id, reset)),
    getNovels: (params, reset) => dispatch(getNovels(params, reset)),
    resetAuthor: () => dispatch(resetAuthor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Author);

