import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);


/* * * * * * * * * * * * * * * * * * * * *
* Operator Decorators
* * * * * * * * * * * * * * * * * * * * */
const operators = {
  operatorA : function(){
    let worker_init_msg  = "";
    let worker           = uniops.buildOperator(worker_init_msg, uniops.assignOperator.$PROFILE.$CONTEXT);
    return worker;
  },
  operatorB : function(){
    let worker_init_msg  = "";
    let worker           = uniops.buildOperator(worker_init_msg, uniops.assignOperator.$PROFILE.$CONTEXT);
    return worker;
  },
  operatorC : function(){
    let worker_init_msg  = "";
    let worker           = uniops.buildOperator(worker_init_msg, uniops.assignOperator.$PROFILE.$CONTEXT);
    return worker;
  }
}


/* * * * * * * * * * * * * * * * * * * * *
* Operator Instances
* * * * * * * * * * * * * * * * * * * * */
const operatorA = operators.operatorA();
const operatorB = operators.operatorB();
const operatorC = operators.operatorC();


/* * * * * * * * * * * * * * * * * * * * *
* Operator Variables (None)
* * * * * * * * * * * * * * * * * * * * */


/* * * * * * * * * * * * * * * * * * * * *
* Operator Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {
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
* Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {
  const genBigArray = (length, max) => [...new Array(length)]
        .map(() => Math.round(Math.random() * max));
  const activate = ({ bigArray }) => {
    store.setState({ bigArray: genBigArray(10000, 100) })
  }
  return { activate }
}


/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigArray = connect(['bigArray'], actions)(
  ({ bigArray, activate }) => (
      <ul class="wrapper">
        <li>
          <span>Offload large array Map, Filter, & Reduce operations to a background thread | </span>
          <button onClick={e => activate(e)} type="button" name="button">Map large array</button>
          <button onClick={e => activate(e)} type="button" name="button">Filter large array</button>
          <button onClick={e => activate(e)} type="button" name="button">Reduce large array</button>
          <ul>
            <li>Does not block the UI.</li>
          </ul>
        </li>
        <li>
          <p>Run examples to see sample data...</p>
          <ol id="big-array-window" class={ bigArray.length > 0 ? 'open' : '' }>
            { bigArray.length > 0
            ? bigArray.map((item, i) => {
                return (<li><span>Item # {i} : : </span>Value : : {JSON.stringify(item)}</li>);
              })
            : ''}
          </ol>
        </li>
      </ul>
    )
  );

  export default () => (
    <Provider store={store}>
      <BigArray />
    </Provider>
  );
