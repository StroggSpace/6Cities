import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginRequest, LoginResponse } from '../types/Login';
import { instance } from '../api/api';
import { AuthStatusResponse } from '../types/Auth';

export const getAuthStatus = createAsyncThunk('auth/status', async () => {
  const response = await instance.get<AuthStatusResponse>('/login');
  return response.data;
});

export const login = createAsyncThunk('auth/login', async (data: LoginRequest) => {
  const response = await instance.post<LoginResponse>('/login', data);
  return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await instance.delete('/logout');
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    authorizationStatus: false,
    user: null as Omit<AuthStatusResponse, 'token'> | null,
    token: '',
  },
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<boolean>) => {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAuthStatus.fulfilled, (state, action: PayloadAction<AuthStatusResponse>) => {
        state.authorizationStatus = true;
        state.user = {
          email: action.payload.email,
          avatarUrl: action.payload.avatarUrl,
          isPro: action.payload.isPro,
          name: action.payload.name,
          id: action.payload.id,
        };
        state.token = action.payload.token;
      }).addCase(getAuthStatus.rejected, (state) => {
        state.authorizationStatus = false;
        state.user = null;
        state.token = '';
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.authorizationStatus = true;
        state.user = {
          email: action.payload.email,
          avatarUrl: action.payload.avatarUrl,
          isPro: action.payload.isPro,
          name: action.payload.name,
          id: action.payload.id,
        };
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = false;
        state.user = null;
      });
  }
});

export const { setAuthorizationStatus } = userSlice.actions;
