import { h, render }  from 'preact';
import 'babel-polyfill'
import '../styles/app.scss'

import BigObjectEq  from './view/bigObjectEq';
import BigArrayEq   from './view/bigArrayEq';
import BigCanvasEq  from './view/bigCanvasEq';
import BigStringEq  from './view/bigStringEq';
import BigArray     from './components/BigArray';
import BigObject    from './components/BigObject';
import BigString    from './components/BigString';
import BigCanvas    from './components/BigCanvas';

const trsdoc        = require('trsdoc')(document);
const bigObjectEq   = trsdoc.ge_byid('bigObjectEq');
const bigArrayEq    = trsdoc.ge_byid('bigArrayEq');
const bigCanvasEq   = trsdoc.ge_byid('bigCanvasEq');
const bigStringEq    = trsdoc.ge_byid('bigStringEq');
const bigObject     = trsdoc.ge_byid('bigObject');
const bigArray      = trsdoc.ge_byid('bigArray');
const bigCanvas     = trsdoc.ge_byid('bigCanvas');
const bigString     = trsdoc.ge_byid('bigString');

render(<BigObjectEq />, bigObjectEq, bigObjectEq.lastChild);
// render(<BigArrayEq />, bigArrayEq, bigArrayEq.lastChild);
// render(<BigCanvasEq />, bigCanvasEq, bigCanvasEq.lastChild);
// render(<BigStringEq />, bigStringEq, bigStringEq.lastChild);

render(<BigObject />, bigObject, bigObject.lastChild);
render(<BigArray />, bigArray, bigArray.lastChild);
render(<BigCanvas />, bigCanvas, bigCanvas.lastChild);
render(<BigString />, bigString, bigString.lastChild);
