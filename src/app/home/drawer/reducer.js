/* eslint-disable prettier/prettier */
import { SET_CATEGORIES } from './actions';

const initialState = {
    categories: [],
    isFetching: false,
    error: null,
    isOpen: false.valueOf,
};

const Categories = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default Categories;
