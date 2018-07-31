import uniops         from '../index.js'
import unistore       from 'unistore'
import devtools       from 'unistore/devtools'
import request        from 'request'
import babelpolyfill  from 'babel-polyfill'


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

  const initialState = {
   bigArray: genBigArray(10000, 100),
   bigObj: genBigObj.Data,
   bigStr: JSON.stringify(genBigObj.Data),
   bigCnv: ""
  }
  const store = devtools(unistore(initialState));

})().catch(err => {
    console.error(err);
});
