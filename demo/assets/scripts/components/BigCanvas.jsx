import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true, true);
const trsdoc = require('trsdoc')(document);




/* * * * * * * * * * * * * * * * * * * * *
* Operator Builders
* * * * * * * * * * * * * * * * * * * * */
const operators = {
  operatorA : function(){
    // let worker_init_msg  = "";
    // let worker           = uniops.buildOperator (
    //   worker_init_msg,
    //   uniops
    //   .assignOperator
    //   .$PROFILE
    //   .$CONTEXT
    // );
    // return worker;
  },
  operatorB : function(){
    // let worker_init_msg  = "";
    // let worker           = uniops.buildOperator (
    //   worker_init_msg,
    //   uniops
    //   .assignOperator
    //   .$PROFILE
    //   .$CONTEXT
    // );
    // return worker;
  },
  operatorC : function(){
    // let worker_init_msg  = "";
    // let worker           = uniops.buildOperator (
    //   worker_init_msg,
    //   uniops
    //   .assignOperator
    //   .$PROFILE
    //   .$CONTEXT
    // );
    // return worker;
  }
}



/* * * * * * * * * * * * * * * * * * * * *
* Operator Instances
* * * * * * * * * * * * * * * * * * * * */
const canvasOpA = operators.operatorA();
const canvasOpB = operators.operatorB();
const canvasOpC = operators.operatorC();



/* * * * * * * * * * * * * * * * * * * * *
* Operator Variables (None)
* * * * * * * * * * * * * * * * * * * * */



/* * * * * * * * * * * * * * * * * * * * *
* Operator Actions
* * * * * * * * * * * * * * * * * * * * */
export const actions = (store) => {

  const loadCanvas = ({ bigCanvas }) => {

    const cnv = trsdoc.qs('#big-canvas-window');
    const ctx = cnv.getContext('2d');
    const img = trsdoc.qs('#uniops-logo');

    ctx.imageSmoothingEnabled = false
    ctx.drawImage(img, 0, 0);
    store.setState({ bigCanvas: ctx.getImageData(0, 0, img.width, img.height) });

  }

  const updateCanvasInvert = ({ bigCanvas }) => {

    var cnv     = trsdoc.qs('#big-canvas-window');
    var ctx     = cnv.getContext("2d");
    var imgData = bigCanvas;

    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i+1] = 255 - imgData.data[i+1];
        imgData.data[i+2] = 255 - imgData.data[i+2];
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0, 0, 0, cnv.getAttribute('width'), cnv.getAttribute('height'));
  }

  const updateCanvasStripBlue = ({ bigCanvas }) => {
    // const workerPkg = [someVar];
    // uniops.bindOperator.replace(operatorB, store, 'bigCanvas');
    // canvasOpB.postMessage(workerPkg);
  }

  const updateCanvasC = ({ bigCanvas }) => {
    // const workerPkg = [someVar];
    // uniops.bindOperator.replace(operatorC, store, 'bigCanvas');
    // canvasOpC.postMessage(workerPkg);
  }

  return {
    loadCanvas,
    updateCanvasInvert,
    updateCanvasStripBlue,
    updateCanvasC
  }
}



/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigCanvas = connect(['bigCanvas'], actions)(
  ({
    bigCanvas,
    loadCanvas,
    updateCanvasInvert,
    updateCanvasStripBlue,
    updateCanvasC
  }) => (
      <ul class="wrapper">
        <li>
          <span>Offload Canvas/Pixel manipulation to a background thread | </span>
          <button onClick={e => updateCanvasInvert(e)} type="button" name="button">Invert the Image</button>
          <button onClick={e => updateCanvasStripBlue(e)} type="button" name="button">Strip the Blue Channel</button>
          <button onClick={e => updateCanvasB(e)} type="button" name="button">Run updateCanvasB</button>
          <button onClick={e => updateCanvasC(e)} type="button" name="button">Run updateCanvasC</button>
          <ul>
            <li>Doesn't block the UI.</li>
          </ul>
        </li>
        <li>
          <p><button onClick={e => loadCanvas(e)} type="button" name="button">Create Canvas</button> & Run examples to see sample data... </p>
          <canvas id="big-canvas-window" width="442" height="600" class={ Object.keys(bigCanvas).length > 0 ? 'open' : '' } />
        </li>
      </ul>
    )
  );

export default () => (
  <Provider store={store}>
    <BigCanvas />
  </Provider>
);
