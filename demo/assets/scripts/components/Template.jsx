import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);



/* * * * * * * * * * * * * * * * * * * * *
* Operator Builders
* * * * * * * * * * * * * * * * * * * * */
const operators = {
  operatorA : function(){
    let worker_init_msg  = "";
    let worker           = uniops.buildOperator (
      worker_init_msg,
      uniops
      .assignOperator
      .$PROFILE
      .$CONTEXT
    );
    return worker;
  },
  operatorB : function(){
    let worker_init_msg  = "";
    let worker           = uniops.buildOperator (
      worker_init_msg,
      uniops
      .assignOperator
      .$PROFILE
      .$CONTEXT
    );
    return worker;
  },
  operatorC : function(){
    let worker_init_msg  = "";
    let worker           = uniops.buildOperator (
      worker_init_msg,
      uniops
      .assignOperator
      .$PROFILE
      .$CONTEXT
    );
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

  const updateAttrAPofileA = ({ AttrA }) => {
    const workerPkg = [someVar];
    uniops.bindOperator.replace(operatorA, store, 'AttrA');
    operatorA.postMessage(workerPkg);
  }

  const updateAttrBPofileB = ({ AttrB }) => {
    const workerPkg = [someVar];
    uniops.bindOperator.replace(operatorB, store, 'AttrB');
    operatorB.postMessage(workerPkg);
  }

  const updateAttrCPofileC = ({ AttrC }) => {
    const workerPkg = [someVar];
    uniops.bindOperator.replace(operatorC, store, 'AttrC');
    operatorC.postMessage(workerPkg);
  }

  return {
    updateAttrAPofileA,
    updateAttrBPofileB,
    updateAttrCPofileC
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
export const Example = connect(['bigArray'], actions)(
  ({
    AttrA,
    AttrB,
    AttrC,
    updateAttrAPofileA,
    updateAttrBPofileB,
    updateAttrCPofileC
  }) => (
      <div class="wrapper">
        <button onClick={e => updateAttrAPofileA(e)} type="button" name="button">Run updateAttrAPofileA</button>
        <button onClick={e => updateAttrBPofileB(e)} type="button" name="button">Run updateAttrBPofileB</button>
        <button onClick={e => updateAttrCPofileC(e)} type="button" name="button">Run updateAttrCPofileC</button>
      </div>
    )
  );

export default () => (
  <Provider store={store}>
    <Example />
  </Provider>
);
