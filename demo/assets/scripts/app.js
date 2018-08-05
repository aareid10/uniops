import { h, render }  from 'preact';
import 'babel-polyfill'
import '../styles/app.scss'

import BigArray         from './components/BigArray';
import BigObject        from './components/BigObject';
import BigObjectSymbols from './view/bigObjectSymbols';
import BigString        from './components/BigString';
import BigCanvas        from './components/BigCanvas';

const trsdoc            = require('trsdoc')(document);
const bigObjectSymbols  = trsdoc.ge_byid('bigObjectSymbols');
const bigObject         = trsdoc.ge_byid('bigObject');
const bigArray          = trsdoc.ge_byid('bigArray');
const bigCanvas         = trsdoc.ge_byid('bigCanvas');
const bigString         = trsdoc.ge_byid('bigString');

render(<BigObject />, bigObject, bigObject.lastChild);
render(<BigObjectSymbols />, bigObjectSymbols, bigObjectSymbols.lastChild);
render(<BigArray />, bigArray, bigArray.lastChild);
render(<BigCanvas />, bigCanvas, bigCanvas.lastChild);
render(<BigString />, bigString, bigString.lastChild);
