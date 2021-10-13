import {createNotice} from './data.js';
import {OFFERS_COUNT} from './consts.js';
import {createCard} from './cards.js';

const offers = new Array(OFFERS_COUNT).fill(null).map(() => createNotice());  //[{},{}]

const container = document.querySelector('#map-canvas');

offers.forEach((offer) => {
  container.appendChild(createCard(offer));
});
