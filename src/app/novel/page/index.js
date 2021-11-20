/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import {
  getNovelPage,
  setNovelPage,
} from './actions';
import Page from './Page';

const mapStateToProps = (store) => {
  return {
    no: store.page.no,
    text: store.page.text,
    isFetching: store.page.isFetching,
    error: store.page.error,
    novel: store.novel.novel,
    fontSize: store.novel.fontSize,
    fontFamily: store.novel.fontFamily,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNovelPage: (id, page, reset) => dispatch(getNovelPage(id, page, reset)),
    setNovelPage: (params) => dispatch(setNovelPage(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
