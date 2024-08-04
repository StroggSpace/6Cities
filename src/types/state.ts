import { AuthStatusResponse } from './Auth';
import { Hotels } from './hotels';

export type StateType = {
  user: {
    authorizationStatus: boolean;
    user: AuthStatusResponse | null;
    token: string;
  };
  hotels: {
    city: string;
    sorting: string;
    favorites: Hotels;
    offers: Hotels;
  };
};
