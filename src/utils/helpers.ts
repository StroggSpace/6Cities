import { hotels } from '../mocks/offers';

type AllHotels = typeof hotels | undefined;

export const getFavoritesHotels = (allHotels: AllHotels) => {
  if (allHotels && allHotels.length) {
    return allHotels.filter((hotel) => hotel.isFavorite === true);
  }
};
