/* eslint-disable prettier/prettier */
import axios from '../common/api/axios';

export const SET_AUTHOR = 'SET_AUTHOR';
export const APPEND_AUTHOR_NOVELS = 'APPEND_AUTHOR_NOVELS';

export const getAuthor = id => {
  return dispatch => {
    dispatch(
      setAuthor({
        author: null,
        error: null,
      }),
    );
    let url = `/authors/${id}`;
    let params = {};
    return axios
      .get(url, {
        params: params,
      })
      .then(res => {
        let data = res.data;
        return dispatch(
          setAuthor({
            author: data,
          }),
        );
      })
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        return dispatch(
          setAuthor({
            error: 'Failed to get author, Please try again',
          }),
        );
      });
  };
};

export const getNovels = (params, reset = false) => {
  return dispatch => {
    if (reset) {
      dispatch(
        setAuthor({
          novels: [],
          error: null,
        }),
      );
    } else {
      dispatch(
        setAuthor({
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
          appendAuthorNovels({
            novels: data,
            isFetching: false,
            error: null,
            hasMore: data.length ? true : false,
          }),
        );
      })
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        return dispatch(
          setAuthor({
            error: 'Failed to get novels, Please try again',
            isFetching: false,
          }),
        );
      });
  };
};

export const resetAuthor = payload => {
  return setAuthor({
    author: null,
    novels: [],
    isFetching: false,
    error: null,
    hasMore: true,
  });
};

export const setAuthor = payload => {
  return {
    type: SET_AUTHOR,
    payload: payload,
  };
};

export const appendAuthorNovels = payload => {
  return {
    type: APPEND_AUTHOR_NOVELS,
    payload: payload,
  };
};
