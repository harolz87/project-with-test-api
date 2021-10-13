import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type sliceState = {
  errors: string[];
}

const initialState: sliceState = {
  errors: [],
};

const slice = createSlice({
  name: 'alert-error',
  initialState,
  reducers: {
    setErrors: (state: sliceState, action: PayloadAction<string[]>): void => {
      state.errors = action.payload;
    },
    reset: () => initialState,
  },
});

export const { actions, reducer } = slice;
