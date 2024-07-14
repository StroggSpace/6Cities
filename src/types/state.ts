import { store } from '../store';
import { AuthStatusResponse } from './Auth';
import { Hotels } from './hotels';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type StateType = {
  city: string;
  offers: Hotels;
  sorting: string;
  authorizationStatus: boolean;
  user: AuthStatusResponse | null;
};
