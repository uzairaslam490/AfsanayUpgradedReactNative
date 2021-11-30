/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import {getCategories} from './actions';
import Drawer from './Drawer';

const mapStateToProps = (store) => {
  return {
    categories: store.drawer.categories,
    isFetching: store.drawer.isFetching,
    error: store.drawer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
