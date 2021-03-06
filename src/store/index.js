/* eslint-disable prettier/prettier */
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkReduxMiddleware from 'redux-thunk';

import home from '../app/home/reducer';
import novel from '../app/novel/reducer';
import page from '../app/novel/page/reducer';
import list from '../app/home/List/reducer';
import authors from '../app/authors/reducer';
import author from '../app/author/reducer';
import category from '../app/category/reducer';
import drawer from '../app/home/drawer/reducer';
import notifications from '../app/home/Notifications/reducer';

const reducers = combineReducers({
  home,
  novel,
  page,
  list,
  authors,
  author,
  drawer,
  category,
  notifications,
});

const Store = createStore(
  reducers,
  applyMiddleware(
    thunkReduxMiddleware,
    //reduxLoggerMiddleware
  ),
);

export default Store;
