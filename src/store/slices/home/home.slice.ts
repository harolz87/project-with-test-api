import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { actions as alertErrorActions } from '../alert-error';
import { api } from '../../../services/api.service';

export type sliceState = {
  regs: any[];
  offset: number;
  limit: number;
  block: boolean;
  filter: string;
}

const initialState: sliceState = {
  regs: [],
  offset: 0,
  limit: 20,
  block: false,
  filter: '',
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setRegs: (state: sliceState, action: PayloadAction<any[]>): void => {
      const newRegs = action.payload.map((item, index) => ({
        ...item,
        id: state.regs.length + index + 1,
      }));
      state.regs = [...state.regs, ...newRegs];
      state.offset += state.limit;
      state.block = action.payload.length < state.limit;
    },
    setFilter: (state: sliceState, action: PayloadAction<string>): void => {
      state.filter = action.payload;
    },
    reset: () => initialState,
  },
});

const nextRegs = createAsyncThunk(
  'home/nextRegs',
  async (_, {
    dispatch,
    getState,
  }) => {
    try {
      const { home } = getState() as { home: sliceState };
      if (home.block) {
        return;
      }
      const response = await api.list({
        limit: home.limit,
        offset: home.offset,
      });

      dispatch(slice.actions.setRegs(response.results));
    } catch (error: any) {
      if (error.message) {
        dispatch(alertErrorActions.setErrors(error.message.split(',')));
      }
    }
  },
);

export const actions = {
  ...slice.actions,
  nextRegs,
};

export const { reducer } = slice;
