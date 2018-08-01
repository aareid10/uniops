import { h, render }  from 'preact';
import 'babel-polyfill'

import BigArray       from './BigArray';
import BigObject      from './BigObject';
import BigString      from './BigString';
import BigCanvas      from './BigCanvas';

const uniqry          = require('./uniqry')(document);
const bigObject       = uniqry.ge_id('bigObject');
const bigArray        = uniqry.ge_id('bigArray');
const bigCanvas       = uniqry.ge_id('bigCanvas');
const bigString       = uniqry.ge_id('bigString');

render(<BigObject />, bigObject, bigObject.lastChild);
render(<BigArray />, bigArray, bigArray.lastChild);
render(<BigCanvas />, bigCanvas, bigCanvas.lastChild);
render(<BigString />, bigString, bigString.lastChild);
