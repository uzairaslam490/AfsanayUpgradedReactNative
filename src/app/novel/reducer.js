/* eslint-disable prettier/prettier */
import {SET_NOVEL} from './actions';

const initialState = {
  novel: null,
  isFetching: false,
  error: null,
  fontSize: 20,
  fontFamily: 'NotoNaskhArabic-Regular',
};

const Novel = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOVEL:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default Novel;
