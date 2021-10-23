import {getRandomPositiveFloat,getRandomPositiveInteger} from './utils/randomNumbers.js';
import {OFFERS_COUNT, TITLES, TYPES, CHECKINS, CHECKOUTS, FEATURES, DESCRIPTIONS, PHOTOS, LONGITUDE_START, LONGITUDE_END, ROUNDING, LATITUDE_START, LATITUDE_END} from './consts.js';

const createCounter = (initial) => () => initial++;
const avatarCounter = createCounter(1);

const getAvatar = () => {
  const count = avatarCounter();
  return `img/avatars/user${count < 10 ? `0${count}` : count}.png`;
};

const createNotice = () => {
  const lat = getRandomPositiveFloat(LATITUDE_START, LATITUDE_END, ROUNDING);
  const lng = getRandomPositiveFloat(LONGITUDE_START, LONGITUDE_END, ROUNDING);

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

const points = new Array(OFFERS_COUNT).fill(null).map(() => createNotice());  //[{},{}]

export {points};
