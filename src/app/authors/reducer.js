/* eslint-disable prettier/prettier */
import {SET_AUTHORS, APPEND_AUTHORS} from './actions';

const initialState = {
  authors: [],
  isFetching: false,
  error: null,
  hasMore: true,
};

const Authors = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      return Object.assign({}, state, action.payload);
    case APPEND_AUTHORS:
      return Object.assign({}, state, {
        authors: [...state.authors, ...action.payload.authors],
        isFetching: action.payload.isFetching,
        error: null,
        hasMore: action.payload.hasMore,
      });
    default:
      return state;
  }
};

export default Authors;
