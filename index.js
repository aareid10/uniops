

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
          (debug)? console.log('|UniOps| (%) updateQuoteWorker: Event hook registered.') : void(0);
          op.onmessage = function(msg) {
            if(msg.data.match(/(%)/)){
              (debug)? console.log('|UniOps| (%) New MSG from worker...') : void(0);
              (debug)? console.log(msg.data) : void(0);
            } else{
              (debug)? console.log('|UniOps| (%) New DATA from worker...') : void(0);
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
      xhr: function(source){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', source.data, true);
        xhr.onload = function(e) { postMessage(xhr.response) };
        xhr.onerror = function() { postMessage(undefined) };
        xhr.send();
      },


      /* * * Array Operators * * */
      gql: function(source){},


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
