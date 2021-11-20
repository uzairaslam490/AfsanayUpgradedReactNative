/* eslint-disable prettier/prettier */
import {SET_HOME_NOVELS, APPEND_HOME_NOVELS} from './actions';

const initialState = {
  novels: [],
  isFetching: false,
  error: null,
  hasMore: true,
  splash: true,
};

const HomeNovels = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_NOVELS:
      return Object.assign({}, state, action.payload);
    case APPEND_HOME_NOVELS:
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

export default HomeNovels;
