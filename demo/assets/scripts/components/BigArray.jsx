import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);


/* * * * * * * * * * * * * * * * * * * * *
* Operator Decorators
* * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * *
* Operator Instances
* * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * *
* Operator Variables
* * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * *
* Operator Actions
* * * * * * * * * * * * * * * * * * * * */


/* * * * * * * * * * * * * * * * * * * * *
* Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {
  const activate = ({ bigArray }) => {  store.setState({ bigArray: [] }) }
  return { activate }
}


/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigArray = connect(['bigArray'], actions)(
  ({ bigArray, activate }) => (
      <li class="wrapper">
        <span>Offload large array Map, Filter, & Reduce operations to a background thread | </span>
        <button onClick={e => activate(e)} type="button" name="button">Map large array</button>
        <button onClick={e => activate(e)} type="button" name="button">Filter large array</button>
        <button onClick={e => activate(e)} type="button" name="button">Reduce large array</button>
        <ul>
          <li>...</li>
        </ul>
      </li>
    )
  );

  export default () => (
    <Provider store={store}>
      <BigArray />
    </Provider>
  );
