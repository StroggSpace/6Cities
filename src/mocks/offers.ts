import { Cities } from '../types/Cities';
import { Hotels } from '../types/hotels';

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const citiesData: Cities = [
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 50.850778,
      longitude: 4.357445,
      zoom: 10,
    },
    name: 'Brussels',
  },
  {
    location: {

      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 51.238361,
      longitude: 6.759974,
      zoom: 10,
    },
    name: 'Dusseldorf',
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
    name: 'Hamburg',
  },
];

export const hotels: Hotels = [
  {
    bedrooms: 3,
    city: citiesData[0],
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/apartment-01.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: citiesData[3],
    description: 'Charming apartment in the heart of Paris.',
    goods: ['WiFi', 'Air conditioning'],
    host: {
      avatarUrl: 'img/apartment-02.jpg',
      id: 5,
      isPro: true,
      name: 'Sophie',
    },
    id: 2,
    images: ['img/apartment-02.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 48.856613,
      longitude: 2.352222,
      zoom: 12,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    price: 200,
    rating: 4.9,
    title: 'Charming apartment in Paris',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: citiesData[2],
    description: 'Modern loft in the heart of New York City.',
    goods: ['Gym', 'Doorman', 'Pool'],
    host: {
      avatarUrl: 'img/apartment-03.jpg',
      id: 7,
      isPro: true,
      name: 'Michael',
    },
    id: 3,
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 11,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 300,
    rating: 4.7,
    title: 'Modern loft in NYC',
    type: 'loft',
  },
  {
    bedrooms: 4,
    city: citiesData[1],
    description: 'Spacious house with a view in central London.',
    goods: ['Garden', 'Parking'],
    host: {
      avatarUrl: 'img/apartment-03.jpg',
      id: 9,
      isPro: false,
      name: 'David',
    },
    id: 4,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 50.850778,
      longitude: 4.357445,
      zoom: 10,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 3,
    city: citiesData[4],
    description: 'Charming apartment in the center of the city.',
    goods: ['Heating', 'Cable TV', 'Washer'],
    host: {
      avatarUrl: 'img/apartment-02.jpg',
      id: 5,
      isPro: true,
      name: 'Anna',
    },
    id: 5,
    images: ['img/apartment-02.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 51.238361,
      longitude: 6.759974,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 200,
    rating: 4.8,
    title: 'Charming apartment in center of the city',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: citiesData[5],
    description: 'Charming apartment in the heart of Paris.',
    goods: ['WiFi', 'Air conditioning'],
    host: {
      avatarUrl: 'img/apartment-02.jpg',
      id: 5,
      isPro: true,
      name: 'Andrew',
    },
    id: 6,
    images: ['img/apartment-02.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    price: 200,
    rating: 4.9,
    title: 'Charming apartment in Paris',
    type: 'apartment',
  },
];
