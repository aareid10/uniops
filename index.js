
module.exports = (debug) => {


  /* PARAMETERS */
  (debug) ? void(0) : console.log = () => {};

  let binding = '';
  let assignment = '';


  /* EXPORTS */
  const uniops = {

    buildOperator: function(initMsg, worker_fn) {

      (debug)? void(0) : initMsg = '';
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

            switch (typeof msg.data) {

              case 'string':
                  if(msg.data.match(/(%)/)){
                    console.log(`|UniOps| (%) ${binding} ${assignment} New MESAGE from Worker...`);
                    console.log(msg.data);
                  }
                  else {
                    console.log(`|UniOps| (%) ${binding} ${assignment} New DATA from Worker...`);
                    const response = JSON.parse(msg.data);
                    console.log(response);
                    store.setState({ [update]: response });
                    return response;
                  }
                break;

              case 'object':
                  const response = msg.data;
                  assignment = response[0];
                  console.log(`|UniOps| (%) ${binding} ${assignment} New DATA from Worker...`);
                  console.log(response[1]);
                  store.setState({ [update]: response[1] });
                  return response;
                break;

              case 'number':
                break;

              case 'Blob':
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

      /* * * AJAX Operators * * */
      xhr: {
        get: function(parentMSG){
          var xhr = new XMLHttpRequest();
          xhr.open('GET', parentMSG.data, true);
          xhr.onload = function(e) { postMessage(xhr.response) };
          xhr.onerror = function() { postMessage(undefined) };
          xhr.send();
        }
      },

      /* * * GraphQL Operators * * */
      gql: {
        query: function(parentMSG){
          var xhr = new XMLHttpRequest();
          xhr.open('POST', parentMSG.data[0], true);
          xhr.onload = function(e) { postMessage(xhr.response) };
          xhr.onerror = function() { postMessage(undefined) };
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(JSON.stringify(parentMSG.data[1]));
        }
      },

      /* * * File Operators  * * */
      file: function(source){},

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
            console.log(parentMSG.data);
            console.log(arrayUpdated);
            postMessage(arrayUpdated);
          },

          intrsc: function(parentMSG){
            self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
            const arrayUpdated = _.intersection(
              parentMSG.data[0],
              parentMSG.data[1]
            );
            postMessage(arrayUpdated);
          },

          diff: function(parentMSG){
            self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
            const arrayUpdated = _.difference(
              parentMSG.data[0],
              parentMSG.data[1]
            );
            postMessage(arrayUpdated);
          },

          uniq: function(parentMSG){
            self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
            const arrayUpdated = _.uniq(parentMSG.data);
            postMessage(arrayUpdated);
          },

          aryobj: function(parentMSG){
            self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
            const arrayUpdated = _.object(
              parentMSG.data[0],
              parentMSG.data[1]
            );
            postMessage([arrayUpdated]);
          }

        },

      },

      /* * * Canvas Operators * * */
      canvas: {

        toBlob: function(){},

        toUrl: function(){},

        toFile: function(){}

      },

      /* * * Text Operators * * */
      text: {

        wordcount: function(){},

        keywordex: function(){},

        classification: function(){},

        concordance: function(){}

      }

    }

  }

  return uniops;

}
