/* eslint-disable prettier/prettier */
/* eslint-disable handle-callback-err */
import AsyncStorage from '@react-native-async-storage/async-storage';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const APPEND_NOTIFICATIONS = 'APPEND_NOTIFICATIONS';
const NOTIFICATIONS_KEY = 'notifications';

export const getNotifications = (reset = false) => {
  return dispatch => {
    if  (reset) {
      dispatch(
        setNotifications({
          notifications: [],
          error: null,
          isFetching: true,
          isFetched: false,
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
    return getAsyncNotifications()
      .then(res =>
        dispatch(
          appendNotifications({
            notifications: res,
            isFetching: false,
            error: null,
            hasMore: res.length ? true : false,
            isFetched: true,
          }),
        )
      )
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


export const setNotification = async (value) => {
  try {
    let notifications = await AsyncStorage.getItem(NOTIFICATIONS_KEY) || [];
    console.log(notifications);
    notifications = JSON.parse(notifications);
    console.log(notifications);
    notifications.unshift(value);
    const length = notifications.unshift();
    console.log('Length : ', length);
    if (length === 25){
        notifications.pop();
    }
    console.log(notifications);
    await AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  } catch (e) {
    console.log('Error saving value', e);
  }
};
export const getAsyncNotifications = async () => {
  try {
      const notifications = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
      console.log('ASYNC : ', JSON.parse(notifications));
      return notifications != null ? JSON.parse(notifications) : null;
    } catch (e) {
      console.log('Error reading value');
    }
};

export const removeNotification = async(id) =>{
  try {
    await AsyncStorage.removeItem(NOTIFICATIONS_KEY);

  }
  catch {
    console.log("Error: Couldn't Remove Item");
  }
};
