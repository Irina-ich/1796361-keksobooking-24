import { getRandomPositiveFloat } from './utils/get-random-positive-float.js';
import { getRandomPositiveInteger } from './utils/get-random-positive-integer.js';

// const OFFERS_COUNT = 10;чтобы пропустил eslint
const TITLES = [
  'Квартира',
  'Дом',
  'Пентхаус',
  'Комната',
  'Аппартаменты',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = [
  'Уютное гнездышко',
  'Великолепный дом',
  'Современное жилье',
  'Бюджетный вариант',
  'С красивым видом из окна',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const counter = (initial) => () => initial++;
const avatarCounter = counter(1);

const getAvatar = () => {
  const count = avatarCounter();
  return `img/avatars/user${count < 10 ? `0${count}` : count}.png`;
};

const createNotice = () => {
  const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: TITLES[getRandomPositiveInteger(0, TITLES.length - 1)],
      address: `${lat}, ${lng}`,
      price: getRandomPositiveInteger(1, 1000000),
      type: TYPES[getRandomPositiveInteger(0, TYPES.length - 1)],
      rooms: getRandomPositiveInteger(1, 10),
      guests: getRandomPositiveInteger(1, 50),
      checkin: CHECKINS[getRandomPositiveInteger(0, CHECKINS.length - 1)],
      checkout: CHECKOUTS[getRandomPositiveInteger(0, CHECKOUTS.length - 1)],
      features: FEATURES.slice(getRandomPositiveInteger(0, FEATURES.length - 1)),
      description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
      photos: PHOTOS.slice(getRandomPositiveInteger(0, PHOTOS.length - 1)),
    },
    location: {
      lat: Number(lat),
      lng: Number(lng),
    },
  };
};

// const similarNotice = Array.from({length: OFFERS_COUNT}, createNotice);чтобы пропустил eslint
createNotice();
