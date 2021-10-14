import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { actions as alertErrorActions } from '../alert-error';
import { api } from '../../../services/api.service';

export type sliceState = {
  reg: any;
}

const initialState: sliceState = {
  reg: null,
};

const slice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setReg: (state: sliceState, action: PayloadAction<any>): void => {
      state.reg = action.payload;
    },
    reset: () => initialState,
  },
});

const getItem = createAsyncThunk(
  'detail/getReg',
  async (id: string, {
    dispatch,
  }) => {
    try {
      const response = await api.getItem({
        id,
      });

      dispatch(slice.actions.setReg(response));
    } catch (error: any) {
      if (error.message) {
        dispatch(alertErrorActions.setErrors(error.message.split(',')));
      }
    }
  },
);

export const actions = {
  ...slice.actions,
  getItem,
};

export const { reducer } = slice;
