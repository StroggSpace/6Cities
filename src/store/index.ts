import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { instance } from '../api/api';
import { getAuthStatus } from './action';


export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: instance
    }
  })
});

store.dispatch(getAuthStatus());


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
