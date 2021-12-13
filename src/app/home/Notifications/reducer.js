/* eslint-disable prettier/prettier */
import {SET_NOTIFICATIONS, APPEND_NOTIFICATIONS} from './actions';

const initialState = {
  notifications: [],
  isFetching: false,
  error: null,
  hasMore: true,
};

const Notifications = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return Object.assign({}, state, action.payload);
    case APPEND_NOTIFICATIONS:
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

export default Notifications;
