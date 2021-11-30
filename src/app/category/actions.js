/* eslint-disable prettier/prettier */
import axios from '../common/api/axios';

export const SET_CATEGORY_NOVELS = 'SET_CATEGORY_NOVELS';
export const APPEND_CATEGORY_NOVELS = 'APPEND_CATEGORY_NOVELS';

export const getCategoryNovels = (params, reset = false) => {
  return dispatch => {
    if  (reset) {
      dispatch(
        setCategoryNovels({
          novels: [],
          error: null,
          isFetching: true,
        }),
      );
    }  else {
      dispatch(
        setCategoryNovels({
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
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        return dispatch(
          setCategoryNovels({
            error: 'Failed to get novels, Please try again',
            isFetching: false,
          }),
        );
      });
  };
};

export const resetNovels = payload => {
  return setCategoryNovels({
    novels: [],
    isFetching: false,
    error: null,
    hasMore: true,
  });
};

export const setCategoryNovels = payload => {
  return {
    type: SET_CATEGORY_NOVELS,
    payload: payload,
  };
};

export const appendHomeNovels = payload => {
  return {
    type: APPEND_CATEGORY_NOVELS,
    payload: payload,
  };
};
