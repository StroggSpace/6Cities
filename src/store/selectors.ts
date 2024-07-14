import { StateType } from '../types/state';

export const getCity = (state: StateType) => state.city;

export const getOffers = (state: StateType) => state.offers;

export const getSorting = (state: StateType) => state.sorting;

export const getStateAuthStatus = (state: StateType) => state.authorizationStatus;

export const getUser = (state: StateType) => state.user;
