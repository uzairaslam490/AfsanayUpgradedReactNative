/* eslint-disable prettier/prettier */
import { connect } from 'react-redux';
import Pages from './Pages';
import {
  getNovelPage,
} from '../page/actions';

const mapStateToProps = (store) => {
  return {
    no: store.page.no,
    isFetching: store.page.isFetching,
    novel: store.novel.novel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNovelPage: (id, page, reset = false) => dispatch(getNovelPage(id, page, reset)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
