import { store } from '../store';
import { AuthStatusResponse } from './Auth';
import { Hotels } from './hotels';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type StateType = {
  user: {
    authorizationStatus: boolean;
    user: AuthStatusResponse | null;
    token: string;
  };
  hotels: {
    city: string;
    offers: Hotels;
    sorting: string;
  };
};
