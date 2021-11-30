/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCategoryNovels, resetNovels} from './actions';
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
    getCategoryNovels: (params, reset) => dispatch(getCategoryNovels(params, reset)),
    resetNovels: () => dispatch(resetNovels()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
