import { h, render }  from 'preact';
import 'babel-polyfill'
import '../styles/app.scss'

/* Import Components */
import BigObjectEq  from './views/bigObjectEq';
import BigArrayEq   from './views/bigArrayEq';
import BigCanvasEq  from './views/bigCanvasEq';
import BigFileEq    from './views/bigFileEq';
import BigArray     from './components/BigArray';
import BigObject    from './components/BigObject';
import BigFile      from './components/BigFile';
import BigCanvas    from './components/BigCanvas';

/* Register Wrappers */
const bigObjectEq   = document.getElementById('bigObjectEq');
const bigArrayEq    = document.getElementById('bigArrayEq');
const bigCanvasEq   = document.getElementById('bigCanvasEq');
const bigFileEq     = document.getElementById('bigFileEq');

const bigObject     = document.getElementById('bigObject');
const bigArray      = document.getElementById('bigArray');
const bigCanvas     = document.getElementById('bigCanvas');
const bigFile       = document.getElementById('bigFile');

/* Render Components */
render(<BigObjectEq />, bigObjectEq, bigObjectEq.lastChild);
render(<BigArrayEq />, bigArrayEq, bigArrayEq.lastChild);
render(<BigCanvasEq />, bigCanvasEq, bigCanvasEq.lastChild);
render(<BigFileEq />, bigFileEq, bigFileEq.lastChild);
render(<BigObject />, bigObject, bigObject.lastChild);
render(<BigArray />, bigArray, bigArray.lastChild);
render(<BigCanvas />, bigCanvas, bigCanvas.lastChild);
render(<BigFile />, bigFile, bigFile.lastChild);
