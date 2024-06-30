import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { Action } from './action';
import { Hotels } from '../types/hotels';
import { StateType } from '../types/state';

const initState: StateType = {
  city: 'Paris',
  offers: [],
  sorting: 'POPULAR',
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
    });
});

