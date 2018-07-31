import { h, Component }       from 'preact';
import createStore            from 'unistore';
import devtools               from 'unistore/devtools';
import { Provider, connect }  from 'unistore/preact';
import Store                  from './store';

var store = require('./store');

let actions = Store => ({
  activate: ({ bigArray }) => {  store.setState({ bigArray: [] }) }
});

export const BigArray = connect(['bigArray'], actions)(
  ({ bigArray, activate }) => (
      <div id="bigArray">
        <span>Offload large array Map, Filter, & Reduce operations to a background thread | </span>
        <button onClick={e => activate(e)} type="button" name="button">Map large array</button>
        <button onClick={e => activate(e)} type="button" name="button">Filter large array</button>
        <button onClick={e => activate(e)} type="button" name="button">Reduce large array</button>
        <ul>
          <li>...</li>
        </ul>
      </div>
    )
  );

  export default () => (
    <Provider store={Store}>
      <BigArray />
    </Provider>
  );
