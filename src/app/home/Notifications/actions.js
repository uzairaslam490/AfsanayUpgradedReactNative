/* eslint-disable prettier/prettier */
/* eslint-disable handle-callback-err */
import AsyncStorage from '@react-native-async-storage/async-storage';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const APPEND_NOTIFICATIONS = 'APPEND_NOTIFICATIONS';

const getNotification = async () => {
    try {
        const notification = await AsyncStorage.getItem('Notification');
        return notification != null ? JSON.parse(notification) : null;
      } catch (e) {
        console.log('Error reading value');
      }
  };
export const getNotifications = (reset = false) => {
  return dispatch => {
    if  (reset) {
      dispatch(
        setNotifications({
          notifications: [],
          error: null,
          isFetching: true,
        }),
      );
    }  else {
      dispatch(
        setNotifications({
          isFetching: true,
          error: null,
        }),
      );
    }
    return getNotification()
      .then(res => {
        dispatch(
          appendNotifications({
            notifications: res,
            isFetching: false,
            error: null,
            hasMore: /*data.length ? true :*/ false,
          }),
        );
      })
      .catch(err => {
        return dispatch(
            setNotifications({
            error: 'Failed to get novels, Please try again',
            isFetching: false,
          }),
        );
      });
  };
};

export const setNotifications = payload => {
  return {
    type: SET_NOTIFICATIONS,
    payload: payload,
  };
};

export const appendNotifications = payload => {
  return {
    type: APPEND_NOTIFICATIONS,
    payload: payload,
  };
};
