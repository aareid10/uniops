
module.exports = (log, debug) => {

  /* CONFIG */
  (log) ? void(0) : console.log = () => {};
  (debug) ? console.log('|UniOps| Debugging is [ON]') : void(0);


  /* PARAMETERS */
  let binding = '';
  let assignment = '';


  /* EXPORTS */
  const uniops = {

    buildOperator: function(initMsg, worker_fn) {

      (log)? void(0) : initMsg = '';
      var blob = new Blob (
        [`\t${initMsg} \n\tonmessage = ${worker_fn.toString()}`],
        { type: "text/javascript" }
      );
      return new Worker(window.URL.createObjectURL(blob));

    },

    bindOperator: {

      replace: function(op, store, update) {

        binding = '[R]';

        if(op.onmessage === null) {

          console.log(`|UniOps| (%) ${binding} New STATUS from Worker: Event hook registered.`);

          op.onmessage = function(msg) {

            const response  = msg.data;
            assignment      = response[0];
            let work        = response[1];

            switch (typeof work) {

              case 'string':
                  if(work.match(/(%)/)){
                    console.log(`|UniOps| (%) ${binding} ${assignment} New MESAGE from Worker...`);
                    (debug)? console.log(msg.data) : void(0);
                  }
                  else if(work.match(/data:image/)){
                    console.log(`|UniOps| (%) ${binding} ${assignment} New WORK from Worker...`);
                    (debug)? console.log(`|UniOps| (%) ${binding} ${assignment} View WORK:\n`, work) : void(0);
                    store.setState({ [update]: work });
                    return response;
                  }
                  else {
                    work = JSON.parse(work);
                    console.log(`|UniOps| (%) ${binding} ${assignment} New WORK from Worker...`);
                    (debug)? console.log(`|UniOps| (%) ${binding} ${assignment} View WORK:\n`, work) : void(0);
                    store.setState({ [update]: work });
                    return response;
                  }
                break;

              case 'object':

                  // !(work instanceof Array)
                  // && !(work instanceof Blob)
                  // && !(work instanceof ImageData)
                  // && !(work instanceof ArrayBuffer)
                  // && !(work instanceof DataView)
                  // && !(work instanceof Float32Array)
                  // && !(work instanceof Float64Array)
                  // && !(work instanceof Int16Array)
                  // && !(work instanceof Int32Array)
                  // && !(work instanceof Int8Array)
                  // && !(work instanceof Uint16Array)
                  // && !(work instanceof Uint32Array)
                  // && !(work instanceof Uint8Array)
                  // && !(work instanceof Uint8ClampedArray)
                  // ? work = work
                  // : work = work;

                  if(work instanceof Blob) work = window.URL.createObjectURL(work);
                  console.log(`|UniOps| (%) ${binding} ${assignment} New WORK from Worker...`);
                  (debug)? console.log(`|UniOps| (%) ${binding} ${assignment} View WORK:\n`, work) : void(0);
                  store.setState({ [update]: work });

                  return response;
                break;

              case 'number':
                break;

              default:

            }
          };

        }
      },

      modify: function(op, store, update) {

        binding = '[M]';

        if(op.onmessage === null) {

          console.log(`|UniOps| (%) ${binding} New STATUS from Worker: Event hook registered.`);

          op.onmessage = function(msg) {}
        }

      }

    },

    assignOperator: {

      /* * * Network Operators * * */
      network:{

        xhr: {
          get: function(parentMSG){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', parentMSG.data, true);
            xhr.onload = function(e) { postMessage(['[X.G]', xhr.response]) };
            xhr.onerror = function() { postMessage(undefined) };
            xhr.send();
          }
        },

        gql: {
          query: function(parentMSG){
            var xhr = new XMLHttpRequest();
            xhr.open('POST', parentMSG.data[0], true);
            xhr.onload = function(e) { postMessage(['[G.Q]', JSON.parse(xhr.response)]) };
            xhr.onerror = function() { postMessage(undefined) };
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(parentMSG.data[1]));
          }
        },

        file: {
          upload: function(parentMSG){}
        }

      },

      /* * * Array Operators * * */
      array: {

        map: function(parentMSG){
          const interpreter   = code => Function('"use strict";return (' + code + ')')();
          const arrayInst     = parentMSG.data[0];
          const arrayMapFx    = interpreter(parentMSG.data[1]);
          const arrayUpdated  = arrayInst.map( x => arrayMapFx(x) );
          postMessage(['[A.M]', arrayUpdated]);
        },

        filter: function(parentMSG){
          const interpreter   = code => Function('"use strict";return (' + code + ')')();
          const arrayInst     = parentMSG.data[0];
          const arrayFilterFx = interpreter(parentMSG.data[1]);
          const arrayUpdated  = arrayInst.filter( x => arrayFilterFx(x) );
          postMessage(['[A.F]', arrayUpdated]);
        },

        reduce: function(parentMSG){
          const interpreter   = code => Function('"use strict";return (' + code + ')')();
          const arrayInst     = parentMSG.data[0];
          const arrayReduceFX = interpreter(parentMSG.data[1]);
          const arrayUpdated  = arrayInst.reduce(arrayReduceFX);
          postMessage(['[A.R]', [arrayUpdated]]);
        },

        underscore: {

          union: function(parentMSG){
            self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
            const arrayUpdated = _.union(
              parentMSG.data[0],
              parentMSG.data[1]
            );
            postMessage(['[U.UNION]', arrayUpdated]);
          },

          intrsc: function(parentMSG){
            self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
            const arrayUpdated = _.intersection(
              parentMSG.data[0],
              parentMSG.data[1]
            );
            postMessage(['[U.INTER]', arrayUpdated]);
          },

          diff: function(parentMSG){
            self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
            const arrayUpdated = _.difference(
              parentMSG.data[0],
              parentMSG.data[1]
            );
            postMessage(['[U.DIFF]', arrayUpdated]);
          },

          uniq: function(parentMSG){
            self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
            const arrayUpdated = _.uniq(parentMSG.data);
            postMessage(['[U.UNIQ]', arrayUpdated]);
          },

          aryobj: function(parentMSG){
            self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
            const arrayUpdated = _.object(
              parentMSG.data[0],
              parentMSG.data[1]
            );
            postMessage(['[U.OBJ]', [arrayUpdated]]);
          }

        },

      },

      /* * * Canvas Operators * * */
      canvas: {

        pixels: function(parentMSG) {
          const interpreter   = code => Function('"use strict";return (' + code + ')')();
          const imgFx         = interpreter(parentMSG.data[0]);
          const imgData       = parentMSG.data[1];
          let imgWidth        = imgData.width;
          let imgHeight       = imgData.height;
          let pixels          = imgData.data;
          let numPixels       = imgWidth * imgHeight;

          for (let i = 0; i < numPixels; i++) { imgFx(pixels, i) };
          const updatedImgData = new ImageData(pixels, imgWidth, imgHeight);
          console.log("DBG0:", imgData, updatedImgData);
          postMessage(['[C.P]', updatedImgData]);
        }

      },

      /* * * Text Operators * * */
      file: {

        upload: function(parentMSG){
          const fileData  = parentMSG.data;
          const reader    = new FileReader();
          reader.onload = function(){
            var dataURL = reader.result;
            postMessage(['[F.U]', dataURL]);
          };
          reader.readAsDataURL(fileData);
        },

        toblob: function(parentMSG){
          const BASE64_MARKER = ";base64,";
          const dataURL       = parentMSG.data
          let dataURLBlob;

          var arr = dataURL.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);

          while(n--){ u8arr[n] = bstr.charCodeAt(n) }
          dataURLBlob = new Blob([u8arr], {type:mime});

          postMessage(['[F.B]', dataURLBlob]);
        }

      }

    }

  }

  return uniops;

}
