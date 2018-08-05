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
    const vw  = window.innerWidth / 100;
    ctx.drawImage(img, (1.5*vw), 0, (18*vw), (11*vw));
    store.setState({ bigCanvas: ctx.getImageData(0, 0, img.width, img.height) })
  }

  const updateCanvasA = ({ bigCanvas }) => {
    const workerPkg = [someVar];
    uniops.bindOperator.replace(operatorA, store, 'bigCanvas');
    canvasOpA.postMessage(workerPkg);
  }

  const updateCanvasB = ({ bigCanvas }) => {
    const workerPkg = [someVar];
    uniops.bindOperator.replace(operatorB, store, 'bigCanvas');
    canvasOpB.postMessage(workerPkg);
  }

  const updateCanvasC = ({ bigCanvas }) => {
    const workerPkg = [someVar];
    uniops.bindOperator.replace(operatorC, store, 'bigCanvas');
    canvasOpC.postMessage(workerPkg);
  }

  return {
    loadCanvas,
    updateCanvasA,
    updateCanvasB,
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
    updateCanvasA,
    updateCanvasB,
    updateCanvasC
  }) => (
      <ul class="wrapper">
        <li>
          <span>Offload Canvas/Pixel manipulation to a background thread | </span>
          <button type="button" name="button">Strip Blue channel</button>
          <button onClick={e => updateCanvasA(e)} type="button" name="button">Run updateCanvasA</button>
          <button onClick={e => updateCanvasB(e)} type="button" name="button">Run updateCanvasB</button>
          <button onClick={e => updateCanvasC(e)} type="button" name="button">Run updateCanvasC</button>
          <ul>
            <li>Doesn't block the UI.</li>
          </ul>
        </li>
        <li>
          <p><button onClick={e => loadCanvas(e)} type="button" name="button">Create Canvas</button> & Run examples to see sample data... </p>
          <canvas id="big-canvas-window" class={ Object.keys(bigCanvas).length > 0 ? 'open' : '' } />
        </li>
      </ul>
    )
  );

export default () => (
  <Provider store={store}>
    <BigCanvas />
  </Provider>
);
