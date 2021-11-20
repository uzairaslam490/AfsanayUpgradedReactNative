/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import List from './List';
import { getNovels, setHomeNovels } from './actions';
import Home from './HomeContent';

const mapStateToProps = (store) => {
  return {
    novels: store.home.novels,
    isFetching: store.home.isFetching,
    error: store.home.error,
    hasMore: store.home.hasMore,
    splash: store.home.splash,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getNovels: (params, reset) => dispatch(getNovels(params, reset)),
//     setNovels: (params) => dispatch(setHomeNovels(params)),
//   };
// };

const mapDispatchToProps = {
  getNovels: getNovels,
  setNovels: setHomeNovels,
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);

