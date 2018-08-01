import { h, Component } from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from './store'
const uniops = require('../index')(true);

// (async () => {
//   const genBigObj = await new Promise(resolve => {
//       var xhr = new XMLHttpRequest();
//       xhr.open("GET", 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10000', true);
//       xhr.onload = (e) => resolve(JSON.parse(xhr.response));
//       xhr.onerror = () => resolve(undefined);
//       xhr.send();
//    });
// })();



/* * * * * * * * * * * * * * * * * * * * *
* Variables
* * * * * * * * * * * * * * * * * * * * */
const dataSrc = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10000';

/* * * * * * * * * * * * * * * * * * * * *
 * Operators
 * * * * * * * * * * * * * * * * * * * * */
 const operators = {
   objectOp: function() {
     let worker_init_msg  = "console.log('(%) updateQuoteWorker: Initialized');";
     let worker           = uniops.buildOperator(worker_init_msg, uniops.assignOperator.xhr);
     return worker;
   }
 }

/* * * * * * * * * * * * * * * * * * * * *
* Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {
  const objectOp = operators.objectOp()
  const updateObject = ({ bigObj }) => {
    uniops.bindOperator.replace(objectOp, store, 'bigObj');
    const cachebuster = '&_='  + new Date().getTime();
    const dataSource = dataSrc + cachebuster;
    objectOp.postMessage(dataSource);
  }
  return { updateObject }
}

export const BigObject = connect(['bigObj'], actions)(
    ({ bigObj, updateObject }) => (
      <div class="wrapper">TEST4</div>
  )
)

export default () => (
  <Provider store={store}>
    <BigObject />
  </Provider>
)
