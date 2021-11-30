/* eslint-disable prettier/prettier */
import axios from '../../common/api/axios';

export const SET_CATEGORIES = 'SET_CATEGORIES';

export const getCategories = (params, reset = false) => {
  return dispatch => {
    dispatch(
      setCategories({
        isFetching: true,
        error: null,
      }),
    );
    let url = '/categories';
    return axios
      .get(url)
      .then(res => {
        let data = res.data;
        return dispatch(
          setCategories({
            categories: data,
            isFetching: false,
            error: null,
          }),
        );
      })
      // eslint-disable-next-line handle-callback-err
      .catch(err => {
        return dispatch(
          setCategories({
            error: 'Failed to get categories, Please try again',
            isFetching: false,
          }),
        );
      });
  };
};

export const setCategories = payload => {
  return {
    type: SET_CATEGORIES,
    payload: payload,
  };
};
