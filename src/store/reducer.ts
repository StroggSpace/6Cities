import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { Action, getAuthStatus, login } from './action';
import { Hotels } from '../types/hotels';
import { StateType } from '../types/state';
import { AuthStatusResponse } from '../types/Auth';
import { LoginResponse } from '../types/Login';

const initState: StateType = {
  city: 'Paris',
  offers: [],
  sorting: 'POPULAR',
  authorizationStatus: false,
  user: null,
};

export const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(Action.SET_CITY, (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    })
    .addCase(Action.SET_OFFERS, (state, action: PayloadAction<Hotels>) => {
      state.offers = action.payload;
    })
    .addCase(Action.SET_SORTING, (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    })
    .addCase(Action.SET_AUTHORIZATION_STATUS, (state, action: PayloadAction<boolean>) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getAuthStatus.fulfilled, (state, action: PayloadAction<AuthStatusResponse>) => {
      state.authorizationStatus = true;
      state.user = action.payload;
    })
    .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      state.authorizationStatus = true;
      state.user = action.payload;
      localStorage.setItem('token', action.payload.token);
    });
});

