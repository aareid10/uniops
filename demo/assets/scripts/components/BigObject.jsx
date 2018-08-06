import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true, true);


/* * * * * * * * * * * * * * * * * * * * *
* Operator Builders
* * * * * * * * * * * * * * * * * * * * */
const operators = {
 objectOpREST: function() {
   let worker_init_msg  = "console.log('|UniOps| (%) objectOpREST Worker: Initialized');";
   let worker           = uniops.buildOperator(
     worker_init_msg,
     uniops
      .assignOperator
      .network
      .xhr
      .get
    );
   return worker;
 },
 objectOpGraphQL: function() {
   let worker_init_msg  = "console.log('|UniOps| (%) objectOpGraphQL Worker: Initialized');";
   let worker           = uniops.buildOperator(
     worker_init_msg,
     uniops
      .assignOperator
      .network
      .gql
      .query
    );
   return worker;
 }
}



/* * * * * * * * * * * * * * * * * * * * *
* Operator Instances
* * * * * * * * * * * * * * * * * * * * */
const objectOpREST    = operators.objectOpREST();
const objectOpGraphQL = operators.objectOpGraphQL();



/* * * * * * * * * * * * * * * * * * * * *
* Operator Variables
* * * * * * * * * * * * * * * * * * * * */
const dataRESTSrc   = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=2000';
const dataGraphSrc  = 'https://fakerql.com/graphql';
const dataGraphQry  = { query: "{ allProducts { id, price, name } }" }



/* * * * * * * * * * * * * * * * * * * * *
* Operator Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {
  const updateObjectREST = ({ bigObject }) => {
    uniops.bindOperator.replace(objectOpREST, store, 'bigObject');
    const cachebuster = '&_='  + new Date().getTime();
    const dataSource = dataRESTSrc + cachebuster;
    objectOpREST.postMessage(dataSource);
  }
  const updateObjectGraphQL = ({ bigObject }) => {
    const graphPkg = [dataGraphSrc,dataGraphQry];
    uniops.bindOperator.replace(objectOpGraphQL, store, 'bigObject');
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
export const BigObject = connect(['bigObject'], actions)(
  ({ bigObject, updateObjectREST, updateObjectGraphQL }) => (
      <ul class="wrapper">
        <li id="rest">
          <span>Offload XHR Requests to a background thread | </span>
          <button onClick={e => updateObjectREST(e)} class="btn-4" type="button" name="button">Request large remote data</button>
          <ul>
            <li>Low Latency. <i class="em em-dart"></i></li>
            <li>Doesn't block the UI. <i class="em em-clap"></i></li>
            <li>Reliably deals with extended calls/slow responses. <i class="em em-100"></i></li>
            <li>Embedded directly within state management. <i class="em em-triangular_flag_on_post"></i></li>
          </ul>
        </li>
        <li id="qraphql">
          <span>Offload GraphQL Queries & Mututaions to a background thread | </span>
          <button onClick={e => updateObjectGraphQL(e)} type="button" name="button">Query large remote data</button>
          <ul>
            <li>Low Latency. <i class="em em-dart"></i></li>
            <li>Doesn't block the UI. <i class="em em-clap"></i></li>
            <li>Faster runtime fulfillment. <i class="em em-boom"></i></li>
            <li>Reliably deals with extended calls/slow responses. <i class="em em-100"></i></li>
            <li>Embedded directly within state management. <i class="em em-triangular_flag_on_post"></i></li>
          </ul>
        </li>
        <li>
          <p>Run examples to see sample data...</p>
          <ol id="big-object-window" class={ Object.keys(bigObject).length > 0 ? 'open' : '' }>
            { Object.keys(bigObject).length > 0
            ? bigObject.Data != undefined
              ? bigObject.Data.map((item, i) => {
                  return (<li>{JSON.stringify(item)}</li>);
                })
              : bigObject.data.allProducts.map((item, i) => {
                  return (<li>{JSON.stringify(item)}</li>);
                })
            : ''}
          </ol>
        </li>
      </ul>
  )
)

export default () => (
  <Provider store={store}>
    <BigObject />
  </Provider>
)
