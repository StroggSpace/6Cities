import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel, Hotels } from '../types/hotels';
import { instance } from '../api/api';

export const getFavorites = createAsyncThunk('hotels/favorites', async () => {
  const response = await instance.get<Hotels>('/favorite');
  return response.data;
});

export const getOffers = createAsyncThunk('hotels/offers', async () => {
  const response = await instance.get<Hotels>('/hotels');
  return response.data;
});


export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: {
    city: 'Paris',
    favorites: [] as Hotels,
    sorting: 'POPULAR',
    offers: [] as Hotels,
  },
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    },
    addFavoriteItem: (state, action: PayloadAction<Hotel>) => {
      state.favorites.push(action.payload);
    },
    removeFavoriteItem: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload);
    },
    cleanState: (state) => {
      state.favorites = [];
      state.city = 'Paris';
      state.sorting = 'POPULAR';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.fulfilled, (state, action: PayloadAction<Hotels>) => {
        state.favorites = action.payload;
      })
      .addCase(getOffers.fulfilled, (state, action: PayloadAction<Hotels>) => {
        state.offers = action.payload;

      });
  },
});

export const { setCity, setSorting, addFavoriteItem, removeFavoriteItem, cleanState } = hotelsSlice.actions;
