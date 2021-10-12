import { combineReducers } from '@reduxjs/toolkit';
import { reducer as auth } from './slices/auth';

export const rootReducer = combineReducers({
  auth,
});
