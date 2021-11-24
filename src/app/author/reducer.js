/* eslint-disable prettier/prettier */
import {SET_AUTHOR, APPEND_AUTHOR_NOVELS} from './actions';

const initialState = {
  author: null,
  novels: [],
  isFetching: false,
  error: null,
  hasMore: true,
};

const Author = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHOR:
      return Object.assign({}, state, action.payload);
    case APPEND_AUTHOR_NOVELS:
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

export default Author;
