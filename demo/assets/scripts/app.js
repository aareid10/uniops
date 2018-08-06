import { h, render }  from 'preact';
import 'babel-polyfill'
import '../styles/app.scss'

/* Import Components */
import BigObjectEq  from './views/bigObjectEq';
import BigArrayEq   from './views/bigArrayEq';
import BigCanvasEq  from './views/bigCanvasEq';
import BigFileEq    from './views/bigStringEq';
import BigArray     from './components/BigArray';
import BigObject    from './components/BigObject';
import BigFile      from './components/BigFile';
import BigCanvas    from './components/BigCanvas';

/* Register Wrappers */
const trsdoc        = require('trsdoc')(document);
const bigObjectEq   = trsdoc.ge_byid('bigObjectEq');
const bigArrayEq    = trsdoc.ge_byid('bigArrayEq');
const bigCanvasEq   = trsdoc.ge_byid('bigCanvasEq');
const bigFileEq     = trsdoc.ge_byid('bigFileEq');

const bigObject     = trsdoc.ge_byid('bigObject');
const bigArray      = trsdoc.ge_byid('bigArray');
const bigCanvas     = trsdoc.ge_byid('bigCanvas');
const bigFile       = trsdoc.ge_byid('bigFile');

/* Render Components */
render(<BigObjectEq />, bigObjectEq, bigObjectEq.lastChild);
render(<BigArrayEq />, bigArrayEq, bigArrayEq.lastChild);
render(<BigCanvasEq />, bigCanvasEq, bigCanvasEq.lastChild);
render(<BigFileEq />, bigFileEq, bigFileEq.lastChild);
render(<BigObject />, bigObject, bigObject.lastChild);
render(<BigArray />, bigArray, bigArray.lastChild);
render(<BigCanvas />, bigCanvas, bigCanvas.lastChild);
render(<BigFile />, bigFile, bigFile.lastChild);
