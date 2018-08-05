import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true, true);


/* Methods */
const genBigArray = (length, max) =>
      [...new Array(length)].map(() =>
      Math.round(Math.random() * max));



/* * * * * * * * * * * * * * * * * * * * *
* Operator Builders
* * * * * * * * * * * * * * * * * * * * */
const operators = {
  arrayOpMap : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpMap Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .array
        .map
      );
    return worker;
  },
  arrayOpFilter : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpFilter Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .array
        .filter
      );
    return worker;
  },
  arrayOpReduce : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpReduce Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .array
        .reduce
      );
    return worker;
  },
  arrayOpUnion : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpUnion Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .array
        .underscore
        .union
    );
    return worker;
  },
  arrayOpUnique : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpUnique Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .array
        .underscore
        .uniq
      );
    return worker;
  },
  arrayOpIntersection : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpIntersection Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .array
        .underscore
        .intrsc
      );
    return worker;
  },
  arrayOpDifference : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpDifference Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .array
        .underscore
        .diff
      );
    return worker;
  },
  arrayOpObject : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpObject Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .array
        .underscore
        .aryobj
      );
    return worker;
  }

}



/* * * * * * * * * * * * * * * * * * * * *
* Operator Instances
* * * * * * * * * * * * * * * * * * * * */
const arrayOpMap          = operators.arrayOpMap();
const arrayOpFilter       = operators.arrayOpFilter();
const arrayOpReduce       = operators.arrayOpReduce();
const arrayOpUnion        = operators.arrayOpUnion();
const arrayOpUnique       = operators.arrayOpUnique();
const arrayOpIntersection = operators.arrayOpIntersection();
const arrayOpDifference   = operators.arrayOpDifference();
const arrayOpObject       = operators.arrayOpObject();



/* * * * * * * * * * * * * * * * * * * * *
* Operator Variables
* * * * * * * * * * * * * * * * * * * * */
const mapOperation    = (a) => a * 25;
const filterOperation = (a) => a > 50;
const reduceOperation = (a,c) => a+c;
const dispRegex       = /\B(?=(\d{3})+(?!\d))/g
const arrayOrder      = 10000;
const arrayMaxValA    = 100;
const arrayMaxValB    = 200;



/* * * * * * * * * * * * * * * * * * * * *
* Operator Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {

  const loadArray = ({ bigArray }) => {
    store.setState({ bigArray: genBigArray(arrayOrder, arrayMaxValA) });
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
  const updateArrayUnion = ({ bigArray }) => {
    const workerPkg = [bigArray, genBigArray(arrayOrder, arrayMaxValB)];
    uniops.bindOperator.replace(arrayOpUnion, store, 'bigArray');
    arrayOpUnion.postMessage(workerPkg);
  }
  const updateArrayUnique = ({ bigArray }) => {
    uniops.bindOperator.replace(arrayOpUnique, store, 'bigArray');
    arrayOpUnique.postMessage(bigArray);
  }
  const updateArrayIntersection = ({ bigArray }) => {
    const workerPkg = [bigArray, genBigArray(arrayOrder, arrayMaxValA)];
    uniops.bindOperator.replace(arrayOpIntersection, store, 'bigArray');
    arrayOpIntersection.postMessage(workerPkg);
  }
  const updateArrayDifference = ({ bigArray }) => {
    const workerPkg = [bigArray, genBigArray(arrayOrder, arrayMaxValA)];
    uniops.bindOperator.replace(arrayOpDifference, store, 'bigArray');
    arrayOpDifference.postMessage(workerPkg);
  }
  const updateArrayObject = ({ bigArray }) => {
    const workerPkg = [bigArray, genBigArray(arrayOrder, arrayMaxValA)];
    uniops.bindOperator.replace(arrayOpObject, store, 'bigArray');
    arrayOpObject.postMessage(workerPkg);
  }

  return {
    loadArray,
    updateArrayMap,
    updateArrayFilter,
    updateArrayReduce,
    updateArrayUnion,
    updateArrayUnique,
    updateArrayIntersection,
    updateArrayDifference,
    updateArrayObject
  }
}



/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigArray = connect(['bigArray'], actions)(
  ({

    bigArray,
    loadArray,
    updateArrayMap,
    updateArrayFilter,
    updateArrayReduce,
    updateArrayUnion,
    updateArrayUnique,
    updateArrayIntersection,
    updateArrayDifference,
    updateArrayObject

  }) => (
      <ul class="wrapper">
        <li>
          <span>Offload large array Map, Filter, & Reduce operations to a background thread | </span>
          <span class="btn-cluster">
            <button onClick={e => updateArrayMap(e)}    type="button" name="button">Map large array</button>
            <button onClick={e => updateArrayFilter(e)} type="button" name="button">Filter large array</button>
            <button onClick={e => updateArrayReduce(e)} type="button" name="button">Reduce large array</button>

            <button onClick={e => updateArrayUnion(e)} type="button" name="button">Underscore Union</button>
            <button onClick={e => updateArrayUnique(e)} type="button" name="button">Underscore Unique</button>
            <button onClick={e => updateArrayIntersection(e)} type="button" name="button">Underscore Intersection</button>
            <button onClick={e => updateArrayDifference(e)} type="button" name="button">Underscore Difference</button>
            <button onClick={e => updateArrayObject(e)} type="button" name="button">Underscore Object</button>
          </span>
          <ul>
            <li>Doesn't block the UI.</li>
          </ul>
        </li>
        <li>
          <p><button onClick={e => loadArray(e)} type="button" name="button">Create large array</button> & Run examples to see sample data... </p>
          <ol id="big-array-window" class={ bigArray.length > 0 ? 'open' : '' }>
            <li class="window-header">Array Size : : { bigArray.length.toString().replace(dispRegex, ",") } items. Total Value : :
            {
              bigArray.length > 0
              ? ' ' + bigArray.reduce((a,c) => a+c).toString().replace(dispRegex, ",")
              : ' 0'
            } </li>
            { bigArray.length > 0
            ? bigArray.map((item, i) => {
                return (<li><span>Item # {i} : : </span>Value : : {item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>);
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
