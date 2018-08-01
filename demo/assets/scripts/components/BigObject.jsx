import { h, Component } from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);




/* * * * * * * * * * * * * * * * * * * * *
* Variables
* * * * * * * * * * * * * * * * * * * * */
const dataSrc = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=2000';


/* * * * * * * * * * * * * * * * * * * * *
* Operators
* * * * * * * * * * * * * * * * * * * * */
const operators = {
 objectOp: function() {
   let worker_init_msg  = "console.log('|UniOps| (%) updateQuoteWorker: Initialized');";
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


/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigObject = connect(['bigObj'], actions)(
  ({ bigObj, updateObject }) => (
    <div class="wrapper">
      <span>Offload XHR Requests to a background thread | </span>
      <button onClick={e => updateObject(e)} class="btn-4" type="button" name="button">Request large remote data</button>
      <ul>
        <li>Low Latency.</li>
        <li>Does not block the UI.</li>
        <li>Deals with extended calls/slow responses.</li>
      </ul>
      <ol id="bigObject-window" class={ Object.keys(bigObj).length > 0 ? 'open' : '' }>
        { Object.keys(bigObj).length > 0
        ? bigObj.Data.map((item, i) => {
          return (<li>{JSON.stringify(item)}</li>);
        }) : ''}
      </ol>
    </div>
  )
)

export default () => (
  <Provider store={store}>
    <BigObject />
  </Provider>
)
