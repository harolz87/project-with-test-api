import { createSlice } from '@reduxjs/toolkit';

export type sliceState = {
  isAuthenticated: boolean;
}

const initialState: sliceState = {
  isAuthenticated: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const { actions, reducer } = slice;
