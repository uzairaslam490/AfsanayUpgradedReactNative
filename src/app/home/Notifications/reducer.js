/* eslint-disable prettier/prettier */
import {SET_NOTIFICATIONS, APPEND_NOTIFICATIONS} from './actions';

const initialState = {
  notifications: [],
  isFetching: false,
  error: null,
  hasMore: true,
  isFetched: false,
};


const Notifications = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return Object.assign({}, state, action.payload);
    case APPEND_NOTIFICATIONS:
      console.log('in reducer', action);
      return Object.assign({}, state, {
        notifications: [...state.notifications, ...action.payload.notifications],
        isFetching: action.payload.isFetching,
        error: null,
        hasMore: action.payload.hasMore,
        isFetched: action.payload.isFetched,
      });
    default:
      return state;
  }
};

export default Notifications;
