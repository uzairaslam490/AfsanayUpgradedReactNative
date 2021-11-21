/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import Settings from './Settings';
import {
  setNovel,
} from '../actions';

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
    setNovel: (params) => dispatch(setNovel(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
