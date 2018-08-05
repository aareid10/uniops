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

    const cnv     = trsdoc.qs('#big-canvas-window');
    const ctx     = cnv.getContext("2d");
    createImageBitmap(bigCanvas).then(function(imgBitmap) {
        ctx.drawImage(imgBitmap, 0, 0);
        const imgData   = ctx.getImageData(0, 0, cnv.width, cnv.height);
        const pixels    = imgData.data;
        const numPixels = imgData.width * imgData.height;
        for (let i = 0; i < numPixels; i++) {
            pixels[i*4]   = 255-pixels[i*4];    // Red Channel
            pixels[i*4+1] = 255-pixels[i*4+1];  // Green Channel
            pixels[i*4+2] = 255-pixels[i*4+2];  // Blue Channel
        };
        ctx.putImageData(imgData, 0, 0, 0, 0, 800, 600);
        store.setState({ bigCanvas: imgData });
    });

  }

  const updateCanvasStripRed = ({ bigCanvas }) => {

    const cnv     = trsdoc.qs('#big-canvas-window');
    const ctx     = cnv.getContext("2d");
    createImageBitmap(bigCanvas).then(function(imgBitmap) {
        ctx.drawImage(imgBitmap, 0, 0);
        const imgData   = ctx.getImageData(0, 0, cnv.width, cnv.height);
        const pixels    = imgData.data;
        const numPixels = imgData.width * imgData.height;
        for (let i = 0; i < numPixels; i++) {
            pixels[i*4]   = 0;    // Red Channel
        };
        ctx.putImageData(imgData, 0, 0, 0, 0, 800, 600);
        store.setState({ bigCanvas: imgData });
    });

  }

  const updateCanvasStripBlue = ({ bigCanvas }) => {

    const cnv     = trsdoc.qs('#big-canvas-window');
    const ctx     = cnv.getContext("2d");
    createImageBitmap(bigCanvas).then(function(imgBitmap) {
        ctx.drawImage(imgBitmap, 0, 0);
        const imgData   = ctx.getImageData(0, 0, cnv.width, cnv.height);
        const pixels    = imgData.data;
        const numPixels = imgData.width * imgData.height;
        for (let i = 0; i < numPixels; i++) {
            pixels[i*4+1] = 0;  // Blue Channel
        };
        ctx.putImageData(imgData, 0, 0, 0, 0, 800, 600);
        store.setState({ bigCanvas: imgData });
    });

  }

  const updateCanvasStripGreen = ({ bigCanvas }) => {

    const cnv     = trsdoc.qs('#big-canvas-window');
    const ctx     = cnv.getContext("2d");
    createImageBitmap(bigCanvas).then(function(imgBitmap) {
        ctx.drawImage(imgBitmap, 0, 0);
        const imgData   = ctx.getImageData(0, 0, cnv.width, cnv.height);
        const pixels    = imgData.data;
        const numPixels = imgData.width * imgData.height;
        for (let i = 0; i < numPixels; i++) {
            pixels[i*4+2] = 0;  // Green Channel
        };
        ctx.putImageData(imgData, 0, 0, 0, 0, 800, 600);
        store.setState({ bigCanvas: imgData });
    });

  }

  const updateCanvasC = ({ bigCanvas }) => {
    // const workerPkg = [someVar];
    // uniops.bindOperator.replace(operatorC, store, 'bigCanvas');
    // canvasOpC.postMessage(workerPkg);
  }

  return {
    loadCanvas,
    updateCanvasInvert,
    updateCanvasStripRed,
    updateCanvasStripBlue,
    updateCanvasStripGreen,
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
    updateCanvasStripRed,
    updateCanvasStripBlue,
    updateCanvasStripGreen,
    updateCanvasC
  }) => (
      <ul class="wrapper">
        <li>
          <span>Offload Canvas/Pixel manipulation to a background thread | </span>
          <button onClick={e => updateCanvasInvert(e)} type="button" name="button">Invert the Image</button>
          <button onClick={e => updateCanvasStripRed(e)} type="button" name="button">Strip Red Channel</button>
          <button onClick={e => updateCanvasStripGreen(e)} type="button" name="button">Strip Green Channel</button>
          <button onClick={e => updateCanvasStripBlue(e)} type="button" name="button">Strip Blue Channel</button>
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
