import uniops         from '../index.js'
import unistore       from 'unistore'
import devtools       from 'unistore/devtools'
import babelpolyfill  from 'babel-polyfill'
const uniqry          = require('./uniqry')(document);


(async () => {

  const genBigArray = (length, max) => [...new Array(length)]
        .map(() => Math.round(Math.random() * max));

  const genBigObj = await new Promise(resolve => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10000', true);
      xhr.onload = (e) => resolve(JSON.parse(xhr.response));
      xhr.onerror = () => resolve(undefined);
      xhr.send();
   });

   const genBigCanvas = await new Promise(resolve => {
     const canvas  = uniqry.create('canvas');
     const context = canvas.getContext('2d');
     const img     = uniqry.one('#uniops-logo');
     canvas.width  = img.width;
     canvas.height = img.height;
     context.drawImage(img, 0, 0 );
     const canvasData = context.getImageData(0, 0, img.width, img.height);
     console.log(canvasData);
     resolve(canvasData);
  });

  const initialState = {
    bigCnv: genBigCanvas,
    bigArray: genBigArray(10000, 100),
    bigObj: genBigObj.Data,
    bigStr: JSON.stringify(genBigObj.Data)
  }

  const store = devtools(unistore(initialState));

})().catch(err => {
    console.error(err);
});
