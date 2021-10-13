import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { actions as loadActions } from '../load';
import { actions as alertErrorActions } from '../alert-error';
import { authApi, CurrentUser, SignupArgs } from '../../../services/auth.service';

export type sliceState = {
  isAuthenticated: boolean;
  user: CurrentUser;
}

const initialState: sliceState = {
  isAuthenticated: false,
  user: {
    id: '',
    name: '',
  },
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    singup: (state: sliceState, action: PayloadAction<CurrentUser>): void => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    singoff: () => initialState,
  },
});

const singup = createAsyncThunk(
  'auth/serviceSingup',
  async (args: SignupArgs, {
    dispatch,
  }) => {
    try {
      dispatch(loadActions.setLoading(true));
      const currentUser = await authApi.singup(args);
      dispatch(slice.actions.singup(currentUser));
    } catch (error: any) {
      if (error.message) {
        dispatch(alertErrorActions.setErrors(error.message.split(',')));
      }
    } finally {
      dispatch(loadActions.setLoading(false));
    }
  },
);

export const actions = {
  ...slice.actions,
  singup,
};

export const { reducer } = slice;
