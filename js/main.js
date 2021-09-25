const getRandomInteger = function (min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return null;
};
getRandomInteger(1, 20);

const getRandomDecimal = function (min, max, decimals = 2) {
  if (min >= 0 && max > min) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
  }
  return null;
};
getRandomDecimal(10, 20);
