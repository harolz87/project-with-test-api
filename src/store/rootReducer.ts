import { combineReducers } from '@reduxjs/toolkit';
import { reducer as auth } from './slices/auth';
import { reducer as alertError } from './slices/alert-error';
import { reducer as load } from './slices/load';
import { reducer as home } from './slices/home';
import { reducer as favs } from './slices/favs';
import { reducer as detail } from './slices/detail';

export const rootReducer = combineReducers({
  auth,
  alertError,
  load,
  home,
  favs,
  detail,
});
