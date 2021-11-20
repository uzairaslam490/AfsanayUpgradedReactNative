/* eslint-disable prettier/prettier */
/* eslint-disable handle-callback-err */
import axios from '../../common/api/axios';

export const SET_HOME_NOVELS = 'SET_HOME_NOVELS';
export const APPEND_HOME_NOVELS = 'APPEND_HOME_NOVELS';

export const getNovels = (params, reset = false) => {
  return dispatch => {
    if  (reset) {
      dispatch(
        setHomeNovels({
          novels: [],
          error: null,
          isFetching: true,
        }),
      );
    }  else {
      dispatch(
        setHomeNovels({
          isFetching: true,
          error: null,
        }),
      );
    }
    let url = '/novels';
    return axios
      .get(url, {
        params: params,
      })
      .then(res => {
        let data = res.data;
        return dispatch(
          appendHomeNovels({
            novels: data,
            isFetching: false,
            error: null,
            hasMore: data.length ? true : false,
          }),
        );
      })
      .catch(err => {
        return dispatch(
          setHomeNovels({
            error: 'Failed to get novels, Please try again',
            isFetching: false,
          }),
        );
      });
  };
};

export const setHomeNovels = payload => {
  return {
    type: SET_HOME_NOVELS,
    payload: payload,
  };
};

export const appendHomeNovels = payload => {
  return {
    type: APPEND_HOME_NOVELS,
    payload: payload,
  };
};
