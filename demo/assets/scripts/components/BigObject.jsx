import { h, Component } from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);




/* * * * * * * * * * * * * * * * * * * * *
* Variables
* * * * * * * * * * * * * * * * * * * * */
const dataRESTSrc = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=2000';
const dataGraphSrc = 'https://fakerql.com/graphql';
const dataGraphQry = { query: "{ allProducts { id, price, name } }" }


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
    const dataSource = dataRESTSrc + cachebuster;
    objectOpREST.postMessage(dataSource);
  }

  const updateObjectGraphQL = ({ bigObj }) => {
    const graphPkg = [dataGraphSrc,dataGraphQry];
    uniops.bindOperator.replace(objectOpGraphQL, store, 'bigObj');
    objectOpGraphQL.postMessage(graphPkg);
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
        </li>
        <li id="qraphql">
          <span>Offload GraphQL Queries & Mututaions to a background thread | </span>
          <button onClick={e => updateObjectGraphQL(e)} type="button" name="button">Query large remote data</button>
          <ul>
            <li>Low Latency.</li>
            <li>Does not block the UI.</li>
            <li>Deals with extended calls/slow responses.</li>
          </ul>
        </li>
        <li>
          <p>Run examples to see sample data...</p>
          <ol id="big-object-window" class={ Object.keys(bigObj).length > 0 ? 'open' : '' }>
            { Object.keys(bigObj).length > 0
            ? bigObj.Data != undefined
              ? bigObj.Data.map((item, i) => {
                  return (<li>{JSON.stringify(item)}</li>);
                })
              : bigObj.data.allProducts.map((item, i) => {
                  return (<li>{JSON.stringify(item)}</li>);
                })
            : ''}
          </ol>
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
