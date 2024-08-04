import { setCity, setSorting, addFavoriteItem, removeFavoriteItem, cleanState, hotelsSlice, getFavorites, getOffers } from './hotelsSlice';
import { CITIES, SORTING, OFFERS } from '../utils/consts';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Hotels } from '../types/hotels';

const initialState = {
  city: CITIES[0],
  sorting: SORTING[0],
  favorites: [],
  offers: [],
};


describe('hotelsSlice', () => {
  let mock: MockAdapter | null = null;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterAll(() => {
    mock?.restore();
  });

  it('should return initial state', () => {
    expect(hotelsSlice.reducer(undefined, { type: undefined })).toEqual(initialState);
  });
  it('should handle setCity', () => {
    expect(hotelsSlice.reducer(initialState, setCity(CITIES[1]))).toEqual({ ...initialState, city: CITIES[1] });
  });
  it('should handle setSorting', () => {
    expect(hotelsSlice.reducer(initialState, setSorting(SORTING[1]))).toEqual({ ...initialState, sorting: SORTING[1] });
  });
  it('should handle addFavoriteItem', () => {
    expect(hotelsSlice.reducer(initialState, addFavoriteItem(OFFERS[0]))).toEqual({ ...initialState, favorites: [OFFERS[0]] });
  });
  it('should handle removeFavoriteItem', () => {
    expect(hotelsSlice.reducer(initialState, removeFavoriteItem(OFFERS[0].id))).toEqual({ ...initialState, favorites: [] });
  });
  it('should handle cleanState', () => {
    expect(hotelsSlice.reducer(initialState, cleanState())).toEqual(initialState);
  });
  it('should handle getFavorites', () => {
    expect(hotelsSlice.reducer(initialState, getFavorites.fulfilled(OFFERS, 'request'))).toEqual({ ...initialState, favorites: OFFERS });
  });
  it('should handle getOffers', () => {
    expect(hotelsSlice.reducer(initialState, getOffers.fulfilled(OFFERS, 'request'))).toEqual({ ...initialState, offers: OFFERS });
  });
  it('should handle extraReducers', async () => {
    mock?.onGet('/hotels').reply(200, OFFERS);
    mock?.onGet('/favorite').reply(200, OFFERS);
    const hotels = await axios.get<Hotels>('/hotels');
    const favorites = await axios.get<Hotels>('/favorite');
    expect(hotels.data).toEqual(OFFERS);
    expect(favorites.data).toEqual(OFFERS);
  });
});
