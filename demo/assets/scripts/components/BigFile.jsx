import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);
const trsdoc = require('trsdoc')(document);


//   const workerPkg = [someVar];
//   uniops.bindOperator.replace(operatorA, store, 'AttrA');
//   operatorA.postMessage(workerPkg);

/* * * * * * * * * * * * * * * * * * * * *
* Operator Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {

  const uploadFile = ({ BigFile }, event) => {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = trsdoc.ge_byid('output');
      output.src = dataURL;
      console.log("DBG", dataURL);
      store.setState({ BigFile: dataURL });
    };
    reader.readAsDataURL(input.files[0]);
  }

  const toLocalStorage = ({ BigFile }) => {}

  const toIndexDB = ({ BigFile }) => {}

  return {
    uploadFile
  }
}


/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigFile = connect(['bigString'], actions)(
  ({
    bigFile,
    uploadFile
  }) => (
    <ul class="wrapper">
      <li>
        <span>Offload Text analysis to a background thread | </span>
        <button type="button" name="button">
          <input id="files" type='file' style="display: none" accept='image/*' onchange={e => uploadFile(e)} />
          <label for="files">Upload file (IMG)</label>
        </button>
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
        <img id='output'/>
        <ol id="big-string-window" class=''></ol>
      </li>
    </ul>
    )
  );

export default () => (
  <Provider store={store}>
    <BigFile />
  </Provider>
);
