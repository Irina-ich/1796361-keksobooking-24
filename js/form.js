const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE_LENGTH = 0;
const MAX_PRICE_LENGTH = 1000000;

const TYPE_MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};


const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElement = mapFilters.querySelectorAll('.map__filter');
const fieldsetAdForm = adForm.querySelectorAll('fieldset');
const mapFeatures = mapFilters.querySelector('.map__features');

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const type = adForm.querySelector('#type');

const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength}симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${valueLength -MAX_TITLE_LENGTH} симв.`);
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

priceInput.addEventListener('input', () => {
  const valueLength = priceInput.value.length;

  if (valueLength < MIN_PRICE_LENGTH) {
    priceInput.setCustomValidity(`Ещё ${MIN_PRICE_LENGTH - valueLength}симв.`);
  } else if (valueLength > MAX_PRICE_LENGTH) {
    priceInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_PRICE_LENGTH} симв.`);
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
});

type.addEventListener('change', () => {
  priceInput.placeholder = TYPE_MIN_PRICE[type.value];
  priceInput.min = TYPE_MIN_PRICE[type.value];
});

roomNumber.addEventListener('change', () => {
  if (roomNumber.value === 100 && capacity.value !== 0) {
    roomNumber.setCustomValidity('Не для гостей');
  } else if (roomNumber.value < capacity.value) {
    roomNumber.setCustomValidity('Гостей больше, чем комнат');
  } else if (roomNumber.value === 100 && capacity.value === 0) {
    roomNumber.setCustomValidity('');
  } else if (roomNumber.value === capacity.value) {
    roomNumber.setCustomValidity('');
  } else if (roomNumber.value > capacity.value) {
    roomNumber.setCustomValidity('');
  }
});


timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});


const getInactivePage = () => {
  adForm.classList.add('ad-form--disabled');
  fieldsetAdForm.forEach((Item) => {
    Item.setAttribute('disabled', true);
  });

  mapFilters.classList.add('ad-form--disabled');
  mapFiltersElement.forEach((Item) => {
    Item.setAttribute('disabled', true);
  });

  mapFeatures.classList.add('ad-form--disabled');
  mapFeatures.setAttribute('disabled', true);
};

const getActivePage = () => {
  adForm.classList.remove('ad-form--disabled');
  fieldsetAdForm.forEach((Item) => {
    Item.removeAttribute('disabled');
  });

  mapFilters.classList.remove('ad-form--disabled');
  mapFiltersElement.forEach((Item) => {
    Item.removeAttribute('disabled');
  });

  mapFeatures.classList.remove('ad-form--disabled');
  mapFeatures.removeAttribute('disabled');
};

getInactivePage();
getActivePage();

