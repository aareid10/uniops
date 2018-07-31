import { h, render }  from 'preact';
import 'babel-polyfill'

import BigArray       from './BigArray';
import BigObject      from './BigObject';
import BigString      from './BigString';
import BigCanvas      from './BigCanvas';

const uniqry          = require('./uniqry')(document);
const bigObject       = uniqry.id('bigObject');
const bigArray        = uniqry.id('bigArray');
const bigCanvas       = uniqry.id('bigCanvas');
const bigString       = uniqry.id('bigString');

render(<BigObject />, bigObject, bigObject.lastChild);
render(<BigArray />, bigArray, bigArray.lastChild);
render(<BigCanvas />, bigCanvas, bigCanvas.lastChild);
render(<BigString />, bigString, bigString.lastChild);
