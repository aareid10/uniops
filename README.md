<p align="center">
<img src="https://s22.postimg.cc/hmotfi375/uniops_logo.png">
</p>

#### A lightwight alternative to Stockroom. Get it here: [UniOps](https://www.npmjs.com/package/uniops)

##### *Easily export your Unistore action to Web Workers for parallel computation/networking without impeading your UI.*

### Getting Started
Coming soon.

- General Process: Create Fx() -> Build( Assign( Fx() ) ) -> Bind( Build ) -> Profit.


#### Draft
```javascript
const mapOperation = (a) => a * 25;
```

#### Build
```javascript
const operators = {
  arrayOpMap : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpMap Worker: Initialized');";
    let worker           = uniops.buildOperator(...);
    return worker;
  },
}
```

#### Assign
```javascript
uniops.buildOperator(
  worker_init_msg,
  uniops
    .assignOperator
    .array
    .map
)
```

#### Bind
```javascript
uniops.bindOperator.replace(worker, store, 'storeAttr');
```

#### Profit
![](https://twemoji.maxcdn.com/2/72x72/1f911.png)

---

### Drafting
Coming soon.

### Building
Coming soon.

### Assigning
Coming soon.

### Binding
Coming soon.


#### Assignment Profiles
- NET::
  - XHR: Execute an AJAX query.
  - GQL: Execute a Graph query.
  - UPL: Upload a file.
- ARRY::
  - Map: Map function across very large arrays.
  - Filter: Filter function across very large arrays.
  - Reduce: Reduce function across very large arrays.
- CNVS::
  - toBlob: Convert a HTML5 Canvas element to Blob.
  - toUrl: Convert a HTML5 Canvas element to Url.
  - toFile: Convert a HTML5 Canvas element to File.
- TEXT::
  - Wordcount: Execute word count analysis on static or dynamic text.
  - Keywordex: Execute keyword extraction analysis on static or dynamic text.
  - Classification: Execute classification analysis on static or dynamic text.
  - Concordance: Execute parts of speech concordance analysis on static or dynamic text.

Full documentation comming soon.

by [Alex Reid ](https://github.com/aareid10)
