/* eslint-disable prettier/prettier */
import {SET_NOVEL_PAGE} from './actions';

const initialState = {
  text: null,
  no: 1,
  isFetching: false,
  error: null,
};

const Page = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOVEL_PAGE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default Page;
