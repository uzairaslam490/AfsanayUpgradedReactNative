/* eslint-disable prettier/prettier */
/* eslint-disable handle-callback-err */
import axios from '../common/api/axios';

export const SET_NOVEL = 'SET_NOVEL';

export const getNovel = (id, reset = false) => {
  return dispatch => {
    if  (reset) {
      dispatch(
        setNovel({
          novel: null,
          isFetching: false,
          error: null,
        }),
      );
    }  else {
      dispatch(
        setNovel({
          isFetching: true,
          error: null,
        }),
      );
    }
    let url = `/novels/${id}`;
    return axios
      .get(url)
      .then(res => {
        let data = res.data;
        return dispatch(
          setNovel({
            novel: data,
            isFetching: false,
            error: null,
          }),
        );
      })
      .catch(err => {
        return dispatch(
          setNovel({
            error: 'Failed to get novel, Please try again',
            isFetching: false,
          }),
        );
      });
  };
};

export const setNovel = payload => {
  return {
    type: SET_NOVEL,
    payload: payload,
  };
};
