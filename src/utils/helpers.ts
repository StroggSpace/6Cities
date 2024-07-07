import { Hotels } from '../types/hotels';

type AllHotels = Hotels | undefined;

export const getFavoritesHotels = (allHotels: AllHotels) => {
  if (allHotels && allHotels.length) {
    return allHotels.filter((hotel) => hotel.isFavorite === true);
  }
};
