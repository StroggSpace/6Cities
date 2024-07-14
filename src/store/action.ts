import { createAsyncThunk } from '@reduxjs/toolkit';
import { Hotels } from '../types/hotels';
import { instance } from '../api/api';
import { AuthStatusResponse } from '../types/Auth';
import { LoginRequest, LoginResponse } from '../types/Login';

export const Action = {
  SET_CITY: 'SET_CITY',
  SET_OFFERS: 'SET_OFFERS',
  SET_SORTING: 'SET_SORTING',
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
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

export const setAuthorizationStatus = (status: boolean) => ({
  type: Action.SET_AUTHORIZATION_STATUS,
  payload: status,
});

export const getAuthStatus = createAsyncThunk('auth/status', async () => {
  const response = await instance.get<AuthStatusResponse>('/login');
  return response.data;
});

export const login = createAsyncThunk('auth/login', async (data: LoginRequest) => {
  const response = await instance.post<LoginResponse>('/login', data);
  return response.data;
});
