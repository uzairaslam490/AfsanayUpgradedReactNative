/* eslint-disable prettier/prettier */
/* eslint-disable handle-callback-err */
import axios from '../common/api/axios';

export const SET_AUTHORS = 'SET_AUTHORS';
export const APPEND_AUTHORS = 'APPEND_AUTHORS';

export const getAuthors = (params, reset = false) => {
  return dispatch => {
    if (reset) {
      dispatch(
        setAuthors({
          authors: [],
          error: null,
        }),
      );
    } else {
      dispatch(
        setAuthors({
          isFetching: true,
          error: null,
        }),
      );
    }
    let url = '/authors';
    return axios
      .get(url, {
        params: params,
      })
      .then(res => {
        let data = res.data;
        return dispatch(
          appendAuthors({
            authors: data,
            isFetching: false,
            error: null,
            hasMore: data.length ? true : false,
          }),
        );
      })
      .catch(err => {
        return dispatch(
          setAuthors({
            error: 'Failed to get authors, Please try again',
            isFetching: false,
          }),
        );
      });
  };
};

export const resetAuthors = payload => {
  return setAuthors({
    authors: [],
    isFetching: false,
    error: null,
    hasMore: true,
  });
};

export const setAuthors = payload => {
  return {
    type: SET_AUTHORS,
    payload: payload,
  };
};

export const appendAuthors = payload => {
  return {
    type: APPEND_AUTHORS,
    payload: payload,
  };
};
