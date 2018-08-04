const lodash      = require('lodash');
const underscore  = require('underscore');

module.exports = (debug) => {


  /* PARAMETERS */
  (debug) ? void(0) : console.log = () => {};


  /* EXPORTS */
  const uniops = {

    buildOperator: function(initMsg, worker_fn){
      (debug)? void(0) : initMsg = '';
      var blob = new Blob (
        [`\t${initMsg} \n\tonmessage = ${worker_fn.toString()}`],
        { type: "text/javascript" }
      );
      return new Worker(window.URL.createObjectURL(blob));
    },

    bindOperator: {
      replace: function(op, store, update) {
        if(op.onmessage === null){
          (debug)? console.log('|UniOps| (%) New STATUS from Worker: Event hook registered.') : void(0);
          op.onmessage = function(msg) {
            console.log("DBG-4", typeof msg.data);
            switch (typeof msg.data) {
              case 'string':
                  if(msg.data.match(/(%)/)){
                    (debug)? console.log('|UniOps| (%) New MESAGE from Worker...') : void(0);
                    (debug)? console.log(msg.data) : void(0);
                  }
                  else {
                    (debug)? console.log('|UniOps| (%) New DATA from Worker...') : void(0);
                    const response = JSON.parse(msg.data);
                    (debug)? console.log(response) : void(0);
                    store.setState({ [update]: response });
                    return response;
                  }
                break;
              case 'object':
                  (debug)? console.log('|UniOps| (%) New DATA from Worker...') : void(0);
                  const response = msg.data;
                  (debug)? console.log(response) : void(0);
                  store.setState({ [update]: response });
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
      update: function(op, store, update) {
        if(op.onmessage === null){
        }
      },
      modify: function(op, store, update) {
        if(op.onmessage === null){
        }
      }
    },

    assignOperator: {

      /* * * AJAX Operators * * */
      xhr: function(parentMSG){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', parentMSG.data, true);
        xhr.onload = function(e) { postMessage(xhr.response) };
        xhr.onerror = function() { postMessage(undefined) };
        xhr.send();
      },

      /* * * Query Operators * * */
      gql: function(parentMSG){
        var xhr = new XMLHttpRequest();
        xhr.open('POST', parentMSG.data[0], true);
        xhr.onload = function(e) { postMessage(xhr.response) };
        xhr.onerror = function() { postMessage(undefined) };
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(parentMSG.data[1]));
      },

      /* * * File Operators  * * */
      upl: function(source){},

      /* * * Array Operators * * */
      ary: {

        map: function(parentMSG){
          const interpreter   = code => Function('"use strict";return (' + code + ')')();
          const arrayInst     = parentMSG.data[0];
          const arrayMapFx    = interpreter(parentMSG.data[1]);
          const arrayUpdated  = arrayInst.map( x => arrayMapFx(x) );
          postMessage(arrayUpdated);
        },

        filter: function(parentMSG){
          const interpreter   = code => Function('"use strict";return (' + code + ')')();
          const arrayInst     = parentMSG.data[0];
          const arrayFilterFx = interpreter(parentMSG.data[1]);
          const arrayUpdated  = arrayInst.filter( x => arrayFilterFx(x) );
          postMessage(arrayUpdated);
        },

        reduce: function(parentMSG){
          const interpreter   = code => Function('"use strict";return (' + code + ')')();
          const arrayInst     = parentMSG.data[0];
          const arrayReduceFX = interpreter(parentMSG.data[1]);
          const arrayUpdated  = arrayInst.reduce(arrayReduceFX);
          postMessage([arrayUpdated]);
        },

        union: function(parentMSG){
          const arrayUpdated = underscore.union(parentMSG.data);
          postMessage([arrayUpdated]);
        },

        intrsc: function(parentMSG){
          const arrayUpdated = underscore.intersection(parentMSG.data);
          postMessage([arrayUpdated]);
        },

        diff: function(parentMSG){
          const arrayUpdated = underscore.difference(
            parentMSG.data[0],
            parentMSG.data[1]
          );
          postMessage([arrayUpdated]);
        },

        uniq: function(parentMSG){
          self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js');
          const arrayUpdated = _.uniq(parentMSG.data);
          postMessage(arrayUpdated);
        },

        aryobj: function(parentMSG){
          const arrayUpdated = underscore.object(
            parentMSG.data[0],
            parentMSG.data[1]
          );
          postMessage([arrayUpdated]);
        },

        pull: function(){},
        pullAll: function(){},
        srtdUniq: function(){},
        srtdUniqBy: function(){},
        groupBy: function(){},

      },


      /* * * Canvas Operators * * */
      cnv: {
        toBlob: function(){},
        toUrl: function(){},
        toFile: function(){},
      },



      /* * * Text Operators * * */
      txt: {
        wordcount: function(){},
        keywordex: function(){},
        classification: function(){},
        concordance: function(){}
      }

    }

  }

  return uniops;

}
