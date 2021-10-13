import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type sliceState = {
  isLoading: boolean;
}

const initialState: sliceState = {
  isLoading: false,
};

const slice = createSlice({
  name: 'load',
  initialState,
  reducers: {
    setLoading: (state: sliceState, action: PayloadAction<boolean>): void => {
      state.isLoading = action.payload;
    },
    reset: () => initialState,
  },
});

export const { actions, reducer } = slice;
