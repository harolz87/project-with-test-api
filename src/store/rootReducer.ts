import { combineReducers } from '@reduxjs/toolkit';
import { reducer as auth } from './slices/auth';
import { reducer as alertError } from './slices/alert-error';

export const rootReducer = combineReducers({
  auth,
  alertError,
});
