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

  const uploadFile = ({ BigString }, event) => {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = trsdoc.ge_byid('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  }
  
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
        <span style="margin: 0 -2vw 0 2vw">Upload image: <input type='file' accept='image/*' onchange={e => uploadFile(e)} /></span>
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
