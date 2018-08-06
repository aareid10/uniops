import { h, Component }       from 'preact';
import { Provider, connect }  from 'unistore/preact'
import store                  from '../data/store'
const uniops = require('../../../../index')(true, true);
const trsdoc = require('trsdoc')(document);




/* * * * * * * * * * * * * * * * * * * * *
* Operator Builders
* * * * * * * * * * * * * * * * * * * * */
const operators = {
  canvasOpInvert : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) canvasOpInvert Worker: Initialized');";
    let worker           = uniops.buildOperator (
      worker_init_msg,
      uniops
      .assignOperator
      .canvas
      .pixels
    );
    return worker;
  },
  canvasOpNoRed : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) canvasOpNoRed Worker: Initialized');";
    let worker           = uniops.buildOperator (
      worker_init_msg,
      uniops
      .assignOperator
      .canvas
      .pixels
    );
    return worker;
  },
  canvasOpNoBlue : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) canvasOpNoBlue Worker: Initialized');";
    let worker           = uniops.buildOperator (
      worker_init_msg,
      uniops
      .assignOperator
      .canvas
      .pixels
    );
    return worker;
  },
  canvasOpNoGreen : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) canvasOpNoGreen Worker: Initialized');";
    let worker           = uniops.buildOperator (
      worker_init_msg,
      uniops
      .assignOperator
      .canvas
      .pixels
    );
    return worker;
  }
}



/* * * * * * * * * * * * * * * * * * * * *
* Operator Instances
* * * * * * * * * * * * * * * * * * * * */
const canvasOpInvert  = operators.canvasOpInvert();
const canvasOpNoRed   = operators.canvasOpNoRed();
const canvasOpNoBlue  = operators.canvasOpNoBlue();
const canvasOpNoGreen = operators.canvasOpNoGreen();



/* * * * * * * * * * * * * * * * * * * * *
* Operator Variables (None)
* * * * * * * * * * * * * * * * * * * * */
const invertPixels = (pxls, idx) => {
  pxls[idx*4]   = 255-pxls[idx*4];    /* Red Channel */
  pxls[idx*4+1] = 255-pxls[idx*4+1];  /* Green Channel */
  pxls[idx*4+2] = 255-pxls[idx*4+2];  /* Blue Channel */
}
const removeRedPixels = (pxls, idx) => {
  pxls[idx*4] = 0; /* Red Channel */
}
const removeBluePixels = (pxls, idx) => {
  pxls[idx*4+1] = 0;  /* Blue Channel */
}
const removeGreenPixels = (pxls, idx) => {
  pxls[idx*4+2] = 0;  /* Green Channel */
}



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

  const downloadCanvas = ({ bigCanvas }) => {
    const cnv     = trsdoc.qs('#big-canvas-window');
    const dataURL = cnv.toDataURL('image/png');
    store.setState({ bigCanvas: dataURL });
  }

  const updateCanvasInvert = ({ bigCanvas }) => {

    const cnv = trsdoc.qs('#big-canvas-window');
    const ctx = cnv.getContext("2d");

    createImageBitmap(bigCanvas).then(function(imgBitmap) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(imgBitmap, 0, 0);
      const imgData   = ctx.getImageData(0, 0, cnv.width, cnv.height);
      const pixels    = imgData.data;
      const numPixels = imgData.width * imgData.height;
      const workerPkg = [invertPixels.toString(), imgData];

      uniops.bindOperator.replace(canvasOpInvert, store, 'bigCanvas');
      canvasOpInvert.postMessage(workerPkg);

      store.subscribe((store) => {
        ctx.putImageData(store.bigCanvas, 0, 0, 0, 0, 800, 600);
      });
    });

  }

  const updateCanvasStripRed = ({ bigCanvas }) => {

    const cnv = trsdoc.qs('#big-canvas-window');
    const ctx = cnv.getContext("2d");

    createImageBitmap(bigCanvas).then(function(imgBitmap) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(imgBitmap, 0, 0);
      const imgData   = ctx.getImageData(0, 0, cnv.width, cnv.height);
      const pixels    = imgData.data;
      const numPixels = imgData.width * imgData.height;
      const workerPkg = [removeRedPixels.toString(), imgData];

      uniops.bindOperator.replace(canvasOpNoRed, store, 'bigCanvas');
      canvasOpNoRed.postMessage(workerPkg);

      store.subscribe((store) => {
        ctx.putImageData(store.bigCanvas, 0, 0, 0, 0, 800, 600);
      });
    });

  }

  const updateCanvasStripBlue = ({ bigCanvas }) => {

    const cnv = trsdoc.qs('#big-canvas-window');
    const ctx = cnv.getContext("2d");

    createImageBitmap(bigCanvas).then(function(imgBitmap) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(imgBitmap, 0, 0);
      const imgData   = ctx.getImageData(0, 0, cnv.width, cnv.height);
      const pixels    = imgData.data;
      const numPixels = imgData.width * imgData.height;
      const workerPkg = [removeBluePixels.toString(), imgData];

      uniops.bindOperator.replace(canvasOpNoBlue, store, 'bigCanvas');
      canvasOpNoBlue.postMessage(workerPkg);

      store.subscribe((store) => {
        ctx.putImageData(store.bigCanvas, 0, 0, 0, 0, 800, 600);
      });
    });

  }

  const updateCanvasStripGreen = ({ bigCanvas }) => {

    const cnv = trsdoc.qs('#big-canvas-window');
    const ctx = cnv.getContext("2d");

    createImageBitmap(bigCanvas).then(function(imgBitmap) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(imgBitmap, 0, 0);
      const imgData   = ctx.getImageData(0, 0, cnv.width, cnv.height);
      const pixels    = imgData.data;
      const numPixels = imgData.width * imgData.height;
      const workerPkg = [removeGreenPixels.toString(), imgData];

      uniops.bindOperator.replace(canvasOpNoGreen, store, 'bigCanvas');
      canvasOpNoGreen.postMessage(workerPkg);

      store.subscribe((store) => {
        ctx.putImageData(store.bigCanvas, 0, 0, 0, 0, 800, 600);
      });
    });

  }

  return {
    loadCanvas,
    downloadCanvas,
    updateCanvasInvert,
    updateCanvasStripRed,
    updateCanvasStripBlue,
    updateCanvasStripGreen,
  }
}



/* * * * * * * * * * * * * * * * * * * * *
* Components
* * * * * * * * * * * * * * * * * * * * */
export const BigCanvas = connect(['bigCanvas'], actions)(
  ({
    bigCanvas,
    loadCanvas,
    downloadCanvas,
    updateCanvasInvert,
    updateCanvasStripRed,
    updateCanvasStripBlue,
    updateCanvasStripGreen,
  }) => (
      <ul class="wrapper">
        <li>
          <span>Offload Canvas/Pixel manipulation to a background thread | </span>
          <span class="btn-cluster">
            <button onClick={e => updateCanvasInvert(e)} type="button" name="button">Invert the Image</button>
            <button onClick={e => updateCanvasStripRed(e)} type="button" name="button">Strip Red Channel</button>
            <button onClick={e => updateCanvasStripGreen(e)} type="button" name="button">Strip Green Channel</button>
            <button onClick={e => updateCanvasStripBlue(e)} type="button" name="button">Strip Blue Channel</button>
          </span>
          <ul>
            <li>Doesn't block the UI. <i class="em em-clap"></i></li>
            <li>Agnostically accepts modular/discrete pixel array update logic. <i class="em em-admission_tickets"></i></li>
            <li>Good performance with very large pixel magnitudes. <i class="em em-bookmark"></i></li>
            <li>Embedded directly within state management. <i class="em em-triangular_flag_on_post"></i></li>
          </ul>
        </li>
        <li>
        <p>
          <button onClick={e => loadCanvas(e)} type="button" name="button">Create Canvas</button>,
          Run examples to see sample data and,
          <a href={bigCanvas} class="button" id="btn-download" download="uniops.png">
            <button onClick={e => downloadCanvas(e)} type="button" name="button">Download the Image</button>
          </a>
        </p>
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
