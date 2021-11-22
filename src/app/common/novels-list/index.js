/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NovelList from './NovelsList';

const mapStateToProps = (store) => {
  return {
    novel: store.novel.novel,
    isFetching: store.novel.isFetching,
    error: store.novel.error,
    fontFamily: store.novel.fontFamily,
  };
};


export default connect(mapStateToProps)(NovelList);
