import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true);
const trsdoc = require('trsdoc')(document);



/* * * * * * * * * * * * * * * * * * * * *
* Operator Builders
* * * * * * * * * * * * * * * * * * * * */
const operators = {
  fileOpUpload : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) fileOpUpload Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .file
        .upload
      );
    return worker;
  },
  fileOpBlob : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) fileOpBlob Worker: Initialized');";
    let worker           = uniops.buildOperator(
      worker_init_msg,
      uniops
        .assignOperator
        .file
        .toblob
      );
    return worker;
  }
}



/* * * * * * * * * * * * * * * * * * * * *
* Operator Instances
* * * * * * * * * * * * * * * * * * * * */
const fileOpUpload  = operators.fileOpUpload();
const fileOpBlob    = operators.fileOpBlob();



/* * * * * * * * * * * * * * * * * * * * *
* Operator Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {

  const uploadFile = ({ BigFile }, event) => {
    const input     = event.target;
    const workerPkg = input.files[0];
    uniops.bindOperator.replace(fileOpUpload, store, 'BigFile');
    fileOpUpload.postMessage(workerPkg);

    store.subscribe((store) => {
      var output = trsdoc.ge_byid('output');
      trsdoc.qs('#bigFile .wrapper p').innerHTML = "Run examples to see sample data... | " + store.BigFile;
      output.src = store.BigFile;
    });
  }

  const toBlob = ({ BigFile }) => {
    const workerPkg = BigFile;
    uniops.bindOperator.replace(fileOpBlob, store, 'BigFile');
    fileOpBlob.postMessage(workerPkg);

    store.subscribe((store) => {
      trsdoc.qs('#bigFile .wrapper p').innerHTML = "Run examples to see sample data... | " + store.BigFile;
    });
  }

  const toIndexDB = ({ BigFile }) => {}

  return {
    uploadFile,
    toBlob
  }
}


/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigFile = connect(['bigString'], actions)(
  ({
    bigFile,
    uploadFile,
    toBlob
  }) => (
    <ul class="wrapper">
      <li>
        <span>Offload Text analysis to a background thread | </span>
        <button type="button" name="button">
          <input id="files" type='file' style="display: none" accept='image/*' onchange={e => uploadFile(e)} />
          <label for="files">Upload file (IMG)</label>
        </button>
        <button type="button" onClick={e => toBlob(e)} name="button">Transfer to Blob</button>
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
