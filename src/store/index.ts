import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { instance } from '../api/api';
import { hotelsSlice } from './hotelsSlice';
import { userSlice, getAuthStatus } from './userSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  storage,
};

const hotelsPersistConfig = {
  key: 'hotels',
  storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userSlice.reducer);
const persistedHotelsReducer = persistReducer(hotelsPersistConfig, hotelsSlice.reducer);

const rootReducer = combineReducers({
  user: persistedUserReducer,
  hotels: persistedHotelsReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: instance
    },
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
});

export const persistor = persistStore(store);

store.dispatch(getAuthStatus());


export type AppDispatch = typeof store.dispatch;
