import { h, render }  from 'preact';
import 'babel-polyfill'
import '../styles/app.scss'

import BigArray       from './components/BigArray';
import BigObject      from './components/BigObject';
import BigString      from './components/BigString';
import BigCanvas      from './components/BigCanvas';

const uniqry          = require('./uniqry')(document);
const bigObject       = uniqry.ge_id('bigObject');
const bigArray        = uniqry.ge_id('bigArray');
const bigCanvas       = uniqry.ge_id('bigCanvas');
const bigString       = uniqry.ge_id('bigString');

render(<BigObject />, bigObject, bigObject.lastChild);
render(<BigArray />, bigArray, bigArray.lastChild);
render(<BigCanvas />, bigCanvas, bigCanvas.lastChild);
render(<BigString />, bigString, bigString.lastChild);
