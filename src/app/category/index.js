/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNovels, resetNovels} from './actions';
import Category from './Category';

const mapStateToProps = store => {
  return {
    novels: store.category.novels,
    isFetching: store.category.isFetching,
    error: store.category.error,
    hasMore: store.category.hasMore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNovels: (params, reset) => dispatch(getNovels(params, reset)),
    resetNovels: () => dispatch(resetNovels()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
