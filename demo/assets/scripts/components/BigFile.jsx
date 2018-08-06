import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);



/* * * * * * * * * * * * * * * * * * * * *
* Operator Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {

  const action1 = ({ BigString }) => {
  //   const workerPkg = [someVar];
  //   uniops.bindOperator.replace(operatorA, store, 'AttrA');
  //   operatorA.postMessage(workerPkg);
  }
  return {
    action1
  }
}


/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigString = connect(['bigString'], actions)(
  ({ bigString }) => (
    <ul class="wrapper">
      <li>
        <span>Offload Text analysis to a background thread | </span>
        <button type="button" name="button">Find number of words</button>
        <ul>
          <li>...</li>
        </ul>
      </li>
      <li>
        <p>Run examples to see sample data...</p>
        <ol id="big-string-window" class=''></ol>
      </li>
    </ul>
    )
  );

export default () => (
  <Provider store={store}>
    <BigString />
  </Provider>
);
