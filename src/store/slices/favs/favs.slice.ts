import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: number;
  name: string;
}

export type sliceState = {
  regs: Item[];
}

const initialState: sliceState = {
  regs: [],
};

const slice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state: sliceState, action: PayloadAction<Item>): void => {
      state.regs = [...state.regs, action.payload];
    },
    removeFav: (state: sliceState, action: PayloadAction<number>): void => {
      state.regs = state.regs.filter((reg) => reg.id !== action.payload);
    },
  },
});

export const { actions, reducer } = slice;
