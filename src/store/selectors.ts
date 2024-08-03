import { StateType } from '../types/state';

export const getCity = (state: StateType) => state.hotels.city;

export const getSorting = (state: StateType) => state.hotels.sorting;

export const getStateAuthStatus = (state: StateType) => state.user.authorizationStatus;

export const getUser = (state: StateType) => state.user;

export const getFavoritesHotels = (state: StateType) => state.hotels.favorites;

export const getOffersHotels = (state: StateType) => state.hotels.offers;
