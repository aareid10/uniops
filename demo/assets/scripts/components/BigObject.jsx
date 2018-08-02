import { h, Component } from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);




/* * * * * * * * * * * * * * * * * * * * *
* Variables
* * * * * * * * * * * * * * * * * * * * */
const dataSrc = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=2000';
const dataQry = { query: "{ allProducts { id, price, name } }" }


/* * * * * * * * * * * * * * * * * * * * *
* Operators
* * * * * * * * * * * * * * * * * * * * */
const operators = {
 objectOpREST: function() {
   let worker_init_msg  = "console.log('|UniOps| (%) objectOpREST Worker: Initialized');";
   let worker           = uniops.buildOperator(worker_init_msg, uniops.assignOperator.xhr);
   return worker;
 },
 objectOpGraphQL: function() {
   let worker_init_msg  = "console.log('|UniOps| (%) objectOpGraphQL Worker: Initialized');";
   let worker           = uniops.buildOperator(worker_init_msg, uniops.assignOperator.gql);
   return worker;
 }
}


/* * * * * * * * * * * * * * * * * * * * *
* Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {

  const objectOpREST    = operators.objectOpREST()
  const objectOpGraphQL = operators.objectOpGraphQL()

  const updateObjectREST = ({ bigObj }) => {
    uniops.bindOperator.replace(objectOpREST, store, 'bigObj');
    const cachebuster = '&_='  + new Date().getTime();
    const dataSource = dataSrc + cachebuster;
    objectOpREST.postMessage(dataSource);
  }

  const updateObjectGraphQL = ({ bigObj }) => {
    uniops.bindOperator.replace(objectOpGraphQL, store, 'bigObj');
    objectOpREST.postMessage(JSON.stringify(dataQry));
  }

  return {
    updateObjectREST,
    updateObjectGraphQL
  }
}


/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigObject = connect(['bigObj'], actions)(
  ({ bigObj, updateObjectREST, updateObjectGraphQL }) => (
    <li class="wrapper">
      <ul>
        <li id="rest">
          <span>Offload XHR Requests to a background thread | </span>
          <button onClick={e => updateObjectREST(e)} class="btn-4" type="button" name="button">Request large remote data</button>
          <ul>
            <li>Low Latency.</li>
            <li>Does not block the UI.</li>
            <li>Deals with extended calls/slow responses.</li>
          </ul>
          <ol id="rest-window" class={ Object.keys(bigObj).length > 0 ? 'open' : '' }>
            { Object.keys(bigObj).length > 0
            ? bigObj.Data.map((item, i) => {
              return (<li>{JSON.stringify(item)}</li>);
            }) : ''}
          </ol>
        </li>
        <li id="qraphql">
          <span>Offload GraphQL Queries & Mututaions to a background thread | </span>
          <button onClick={e => updateObjectGraphQL(e)} type="button" name="button">Query large remote data</button>
          <ul>
            <li>Low Latency.</li>
            <li>Does not block the UI.</li>
            <li>Deals with extended calls/slow responses.</li>
          </ul>
          <div id="graphql-window"></div>
        </li>
      </ul>
    </li>
  )
)

export default () => (
  <Provider store={store}>
    <BigObject />
  </Provider>
)
