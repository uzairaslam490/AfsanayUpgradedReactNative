/* eslint-disable prettier/prettier */
/* eslint-disable handle-callback-err */
import axios from '../../common/api/axios';

export const SET_NOVEL_PAGE = 'SET_NOVEL_PAGE';

export const getNovelPage = (id, page, reset = false) => {
  return dispatch => {
    if  (reset) {
      dispatch(
        setNovelPage({
          text: null,
          isFetching: false,
          error: null,
          no: 1,
        }),
      );
    }  else {
      dispatch(
        setNovelPage({
          isFetching: true,
          error: null,
          no: page,
          text: null,
        }),
      );
    }
    let url = `/novels/${id}/page/${page}`;
    return axios
      .get(url)
      .then(res => {
        let data = res.data;
        return dispatch(
          setNovelPage({
            text: data.body,
            isFetching: false,
            error: null,
          }),
        );
      })
      .catch(err => {
        return dispatch(
          setNovelPage({
            error: 'Failed to get novel, Please try again',
            isFetching: false,
          }),
        );
      });
  };
};

export const setNovelPage = payload => {
  return {
    type: SET_NOVEL_PAGE,
    payload: payload,
  };
};

