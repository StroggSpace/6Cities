import { Hotels } from '../types/hotels';

export const Action = {
  SET_CITY: 'SET_CITY',
  SET_OFFERS: 'SET_OFFERS',
  SET_SORTING: 'SET_SORTING',
};

export const setCity = (city: string) => ({
  type: Action.SET_CITY,
  payload: city,
});

export const setOffers = (offers: Hotels) => ({
  type: Action.SET_OFFERS,
  payload: offers,
});

export const setSorting = (sorting: string) => ({
  type: Action.SET_SORTING,
  payload: sorting,
});

