import {createNotice} from './data.js';
import {OFFERS_COUNT} from './consts.js';

new Array(OFFERS_COUNT).fill(null).map(() => createNotice());
createNotice();
