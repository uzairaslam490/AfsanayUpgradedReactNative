/* eslint-disable prettier/prettier */
import {SET_CATEGORY_NOVELS, APPEND_CATEGORY_NOVELS} from './actions';

const initialState = {
  novels: [],
  isFetching: false,
  error: null,
  hasMore: true,
};

const CategoryNovels = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_NOVELS:
      return Object.assign({}, state, action.payload);
    case APPEND_CATEGORY_NOVELS:
      return Object.assign({}, state, {
        novels: [...state.novels, ...action.payload.novels],
        isFetching: action.payload.isFetching,
        error: null,
        hasMore: action.payload.hasMore,
      });
    default:
      return state;
  }
};

export default CategoryNovels;
