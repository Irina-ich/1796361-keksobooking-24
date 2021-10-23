import {getInactivePage, getActivePage} from './form.js';
import {points} from './data.js';
import {TypeHouse, createFeatures, createImages} from './cards.js';


const adressMap = document.querySelector('#address');

getInactivePage();

const map = L.map('map-canvas')
  .on('load', () => {
    getActivePage();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  adressMap.value = `${evt.target.getLatLng().lat.toFixed(5)},${evt.target.getLatLng().lng.toFixed(5)}`;
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

points.forEach(({location: {lat, lng}}) => {
  const marker = L.marker({
    lat,
    lng,
  },
  {
    icon,
  },
  );
  marker.addTo(map);
});

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = point.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = point.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${point.offer.price} р/ночь`;
  popupElement.querySelector('.popup__type').textContent = TypeHouse[point.offer.type] ;
  popupElement.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent =`Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;
  popupElement.querySelector('.popup__features').src = createFeatures(popupElement, point.offer.features) ;
  popupElement.querySelector('.popup__description').textContent = point.offer.description;
  popupElement.querySelector('.popup__photos').src = createImages(popupElement, point.offer.photos);
  popupElement.querySelector('.popup__avatar').src = point.author.avatar;

  return popupElement;
};

/*points.forEach((point) => {
  const {lat, lng} = point;

  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat,
    lng,
  },
  {
    icon,
  },
  );
  marker.addTo(map);
  marker.bindPopup(createCustomPopup(point));
});*/


export {createCustomPopup};
