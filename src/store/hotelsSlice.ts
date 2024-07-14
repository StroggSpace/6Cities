import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotels } from '../types/hotels';

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: {
    city: 'Paris',
    offers: [] as Hotels | [],
    sorting: 'POPULAR',
  },
  reducers: {
    setOffers: (state, action: PayloadAction<Hotels>) => {
      state.offers = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
  },
});

export const { setOffers, setCity, setSorting } = hotelsSlice.actions;
