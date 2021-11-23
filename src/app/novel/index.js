/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNovel, setNovel } from './actions';
import { setNovelPage } from './page/actions';
import Novel from './Novel';

const mapStateToProps = (store) => {
  return {
    novel: store.novel.novel,
    isFetching: store.novel.isFetching,
    error: store.novel.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNovel: (id, reset) => dispatch(getNovel(id, reset)),
    setNovel: (params) => dispatch(setNovel(params)),
    setNovelPage: (params) => dispatch(setNovelPage(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Novel);

// export default class NovelContainer extends Component {
//   render(){
//     return <ConnectedNovel {...this.props} />;
//   }
// }
