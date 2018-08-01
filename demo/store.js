import uniops         from '../index.js'
import unistore       from 'unistore'
import devtools       from 'unistore/devtools'
import babelpolyfill  from 'babel-polyfill'
const uniqry          = require('./uniqry')(document);


const genBigArray = (length, max) => [...new Array(length)]
      .map(() => Math.round(Math.random() * max));

const canvas  = uniqry.create('canvas');
const context = canvas.getContext('2d');
const img     = uniqry.one('#uniops-logo');
canvas.width  = img.width;
canvas.height = img.height;
context.drawImage(img, 0, 0 );
const genBigCanvas = context.getImageData(0, 0, img.width, img.height);


const initialState = {
  bigCnv: {},
  bigArray: {},
  bigObj: {},
  bigStr: ''
}

module.exports = devtools(unistore(initialState));
