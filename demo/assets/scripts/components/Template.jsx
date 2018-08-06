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


  return {
    updateAttrAPofileA
  }
}



/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const Example = connect(['AttrA'], actions)(
  ({
    AttrA,
    updateAttrAPofileA,
  }) => (
      <div class="wrapper">
        <button onClick={e => updateAttrAPofileA(e)} type="button" name="button">Run updateAttrAPofileA</button>
      </div>
    )
  );

export default () => (
  <Provider store={store}>
    <Example />
  </Provider>
);
