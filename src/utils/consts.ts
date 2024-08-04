import { City } from '../types/Cities';

export const CITIES:
  ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] =
  ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const BOOLEAN = new Map<boolean, number>([[true, 1], [false, 0]]);

export const SORTING = ['POPULAR', 'TOP_RATED', 'PRICE_LOW_TO_HIGH', 'PRICE_HIGH_TO_LOW'];

export const CITY_LOCATIONS = new Map<typeof CITIES[number], City>([
  [CITIES[0], { name: CITIES[0], location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 } }],
  [CITIES[1], { name: CITIES[1], location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 } }],
  [CITIES[2], { name: CITIES[2], location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 } }],
  [CITIES[3], { name: CITIES[3], location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 } }],
  [CITIES[4], { name: CITIES[4], location: { latitude: 53.551086, longitude: 9.993682, zoom: 13 } }],
  [CITIES[5], { name: CITIES[5], location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 } },],
]);

export const OFFERS = [{
  bedrooms: 2,
  city: CITY_LOCATIONS.get(CITIES[1]) as City,
  description: 'Отличный отель с красивыми видами',
  goods: ['WIFI', 'Бассейн'],
  host: {
    avatarUrl: 'https://example.com/avatar.jpg',
    id: 123,
    isPro: true,
    name: 'John Doe',
  },
  id: 456,
  images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
  isFavorite: false,
  isPremium: true,
  location: CITY_LOCATIONS.get(CITIES[1])!.location,
  maxAdults: 4,
  previewImage: 'https://example.com/preview.jpg',
  price: 1000,
  rating: 4.5,
  title: 'Отель в Москве',
  type: 'hotel',
}];

export const USER = {
  email: 'email',
  token: 'token',
  avatarUrl: 'avatarUrl',
  name: 'name',
  id: 0,
  isPro: false,
};

