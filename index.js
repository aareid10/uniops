
module.exports = (debug) => {

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
            if(msg.data.match(/(%)/)){
              (debug)? console.log('|UniOps| (%) New MESAGE from Worker...') : void(0);
              (debug)? console.log(msg.data) : void(0);
            } else{
              (debug)? console.log('|UniOps| (%) New DATA from Worker...') : void(0);
              const response = JSON.parse(msg.data);
              (debug)? console.log(response) : void(0);
              store.setState({ [update]: response });
              return response;
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


      /* * * Array Operators * * */
      gql: function(parentMSG){
        console.log(parentMSG);
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', JSON.stringify(parentMSG.data), true);
        // xhr.onload = function(e) { postMessage(xhr.response) };
        // xhr.onerror = function() { postMessage(undefined) };
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.send();
      },


      /* * * Upload Operator  * * */
      upld: function(source){},


      /* * * Array Operators * * */
      arry: {
        map: function(array, context){},
        filter: function(array, context){},
        reduce: function(array, context){}
      },


      /* * * Canvas Operators * * */

      cnvs: {
        toBlob: function(){},
        toUrl: function(){},
        toFile: function(){},
      },


      /* * * Local Storgae Operators * * */
      lcst: {
        get: function(){},
        set: function(){}
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
