import unistore       from 'unistore'
import devtools       from 'unistore/devtools'
import babelpolyfill  from 'babel-polyfill'
const trsdoc          = require('trsdoc')(document);


const canvas  = trsdoc.cr_elem('canvas');
const context = canvas.getContext('2d');
const img     = trsdoc.qs('#uniops-logo');
canvas.width  = img.width;
canvas.height = img.height;
context.drawImage(img, 0, 0 );
const genBigCanvas = context.getImageData(0, 0, img.width, img.height);


const initialState = {
  bigCnv: genBigCanvas,
  bigArray: [],
  bigObj: {},
  bigStr: ''
}

module.exports = devtools(unistore(initialState));
