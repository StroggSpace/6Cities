import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { instance } from '../api/api';


export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: instance
    }
  })
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
