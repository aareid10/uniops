import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);


/* * * * * * * * * * * * * * * * * * * * *
* Operator Decorators
* * * * * * * * * * * * * * * * * * * * */
const operators = {
  arrayOpMap : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpMap Worker: Initialized');";
    let worker           = uniops.buildOperator(worker_init_msg, uniops.assignOperator.ary.map);
    return worker;
  },
  arrayOpFilter : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpFilter Worker: Initialized');";
    let worker           = uniops.buildOperator(worker_init_msg, uniops.assignOperator.ary.filter);
    return worker;
  },
  arrayOpReduce : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpReduce Worker: Initialized');";
    let worker           = uniops.buildOperator(worker_init_msg, uniops.assignOperator.ary.reduce);
    return worker;
  }
}


/* * * * * * * * * * * * * * * * * * * * *
* Operator Instances
* * * * * * * * * * * * * * * * * * * * */
const arrayOpMap = operators.arrayOpMap();
const arrayOpFilter = operators.arrayOpFilter();
const arrayOpReduce = operators.arrayOpReduce();


/* * * * * * * * * * * * * * * * * * * * *
* Operator Variables
* * * * * * * * * * * * * * * * * * * * */
const mapOperation = (a) => a * 25;
const filterOperation = (a) => a > 50;
const reduceOperation = (ac, cv) => ac + cv;


/* * * * * * * * * * * * * * * * * * * * *
* Operator Actions
* * * * * * * * * * * * * * * * * * * * */

export const actions = (store) => {

  const genBigArray = (length, max) => [...new Array(length)]
        .map(() => Math.round(Math.random() * max))

  const loadArray = ({ bigArray }) => {
    store.setState({ bigArray: genBigArray(10000, 100) });
  }

  const updateArrayMap = ({ bigArray }) => {
    const workerPkg = [bigArray, mapOperation.toString()];
    uniops.bindOperator.replace(arrayOpMap, store, 'bigArray');
    arrayOpMap.postMessage(workerPkg);
  }

  const updateArrayFilter = ({ bigArray }) => {
    const workerPkg = [bigArray, filterOperation.toString()];
    uniops.bindOperator.replace(arrayOpFilter, store, 'bigArray');
    arrayOpFilter.postMessage(workerPkg);
  }

  const updateArrayReduce = ({ bigArray }) => {
    const workerPkg = [bigArray, reduceOperation.toString()];
    uniops.bindOperator.replace(arrayOpReduce, store, 'bigArray');
    arrayOpReduce.postMessage(workerPkg);
  }

  return {
    loadArray,
    updateArrayMap,
    updateArrayFilter,
    updateArrayReduce
  }
}



/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigArray = connect(['bigArray'], actions)(
  ({ bigArray, loadArray, updateArrayMap, updateArrayFilter, updateArrayReduce }) => (
      <ul class="wrapper">
        <li>
          <span>Offload large array Map, Filter, & Reduce operations to a background thread | </span>
          <button onClick={e => updateArrayMap(e)} type="button" name="button">Map large array</button>
          <button onClick={e => updateArrayFilter(e)} type="button" name="button">Filter large array</button>
          <button onClick={e => updateArrayReduce(e)} type="button" name="button">Reduce large array</button>
          <ul>
            <li>Does not block the UI.</li>
          </ul>
        </li>
        <li>
          <p><button onClick={e => loadArray(e)} type="button" name="button">Create large array</button> & Run examples to see sample data... </p>
          <ol id="big-array-window" class={ bigArray.length > 0 ? 'open' : '' }>
            <li class="window-header">Array Size : : { bigArray.length } items. Total Value : :
            {
              bigArray.length > 0
              ? bigArray.reduce((a,c) => a+c).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : ' 0'
            } </li>
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
