// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat (numberMin, numberMax, digits = 1) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max
  const lower = Math.min(Math.abs(numberMin), Math.abs(numberMax));
  const upper = Math.max(Math.abs(numberMin), Math.abs(numberMax));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower) + lower;

  // И в конце с помощью метода toFixed любого числа в JavaScript
  // указать требуемое количество знаков после точки
  return result.toFixed(digits);
}
getRandomPositiveFloat();
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (numberMin,numberMax) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(numberMin), Math.abs(numberMax)));
  const upper = Math.floor(Math.max(Math.abs(numberMin), Math.abs(numberMax)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}
getRandomPositiveInteger();

const AUTHOR =[
  'avatar'
];
const OFFER=[
  'title',
  'address',
  'price',
  'type',
  'rooms',
  'guests',
  'checkin',
  'checkout',
  'features',
  'description',
  'photos'
];
const LOCATION=[
  'lat',
  'lng',
];
const SIMILAR_NOTICE_COUNT = 3;
const createNotice = () => {
  const randomAvatarImage = _.random(0, AUTHOR.length - 1);
  const randomPrice=_.random(0, 1000000);
  const randomType=_.sample(['palace', 'flat','house','bungalow','hotel']);
  const randomRooms=_.random(0, 10);
  const randomGuests=_.random(0, 50);
  const randomCheckin=_.sample(['12:00', '13:00', '14:00']);
  const randomCheckout=_.sample(['12:00', '13:00', '14:00']);
  const features =[wifi, dishwasher, parking, washer, elevator, conditioner]
    function getArray(features) {
      const maxLength = features.length;
      const lengthOfArray = getRandomNumber(1, maxLength);
      const array = [];

      while (array.length < lengthOfArray) {
        const indexOfEl = getRandomNumber(0, maxLength - 1);
        const el = features[indexOfEl];

        if (!array.includes(el)) {
          array.push(el);
        }
      }
      return array;

      function getRandomNumber(from, to) {
        return Math.floor(Math.random() * (to - from + 1)) + from;
      }
    };
  const photos=['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']
    function getArray(photos) {
      const maxLength = photos.length;
      const lengthOfArray = getRandomNumber(1, maxLength);
      const array = [];

      while (array.length < lengthOfArray) {
        const indexOfEl = getRandomNumber(0, maxLength - 1);
        const el = photos[indexOfEl];

        if (!array.includes(el)) {
          array.push(el);
        }
      }
      return array;

      function getRandomNumber(from, to) {
        return Math.floor(Math.random() * (to - from + 1)) + from;
      }
    };
  const randomLat=_.random(35.65000,35.70000);
  const randomLng=_.random(139.70000,139.80000);
    return {
      avatar:'img/avatars/user'+'0'+ AUTHOR[randomAvatarImage]+'png',
      offer:OFFER[
        {title:'Милая, уютная квартирка в центре Токио'},
        {address:'{{location.lat}}, {{location.lng}}'},
        {price:randomPrice},
        {type:'randomType'},
        {rooms:randomRooms},
        {guests:randomGuests},
        {checkin:'randomCheckin'},
        {checkout:'randomCheckout'},
        {features:getArray(features)},
        {description:'Просторное,светлое,уютное помещение'},
        {photos:getArray(photos)}
      ],
      location:LOCATION[
        {lat: randomLat},
        {lng:randomLng},
      ]
    };
};
const similarNotice = Array.from({length: SIMILAR_NOTICE_COUNT}, createNotice);
console.log(
  similarNotice);


