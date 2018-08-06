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
        <button type="button" name="button">Upload file</button>
        <button type="button" name="button">Transfer to local storage</button>
        <button type="button" name="button">Transfer to indexDB</button>
        <ul>
          <li>Doesn't block the UI. <i class="em em-clap"></i></li>
          <li>Good performance with very large files. <i class="em em-bookmark"></i></li>
          <li>Embedded directly within state management. <i class="em em-triangular_flag_on_post"></i></li>
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
