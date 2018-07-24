![](https://www.dropbox.com/s/kwyzulhh9018xip/uniops%20logo.png?dl=1)

#### A lightwight alternative to Stockroom. Get it here: [UniOps](https://www.npmjs.com/package/uniops)

##### *Easily export your Unistore action to Web Workers for parallel computation/networking without impeading your UI.*

### Getting Started
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique, purus nec consectetur lobortis, nisl nisi malesuada leo, vel aliquet purus libero in enim.

- General Process (Build -> Bind -> Assign)
Sed consequat enim vel purus commodo, eu interdum orci dictum. Fusce bibendum velit id lacus rutrum luctus. Praesent eleifend pretium leo, vitae tincidunt nisi viverra sed.

- Build
```javascript
let worker = uniops.buildOperator(worker_init_msg, uniops.assignOperator.xhr);
```
- Bind
```javascript
uniops.bindOperator.replace(worker, store, 'storeAttr');
```
- Assign
```javascript
uniops.assignOperator.xhr
```

### Building
Donec rhoncus risus libero, vel lacinia magna dignissim eu. Ut lobortis, massa a pretium finibus, tortor arcu viverra elit, nec consequat risus ligula quis felis. Donec lobortis ligula id elit sagittis, consectetur dictum mi blandit.

### Binding
Donec rhoncus risus libero, vel lacinia magna dignissim eu. Ut lobortis, massa a pretium finibus, tortor arcu viverra elit, nec consequat risus ligula quis felis. Donec lobortis ligula id elit sagittis, consectetur dictum mi blandit.

### Assigning
Donec rhoncus risus libero, vel lacinia magna dignissim eu. Ut lobortis, massa a pretium finibus, tortor arcu viverra elit, nec consequat risus ligula quis felis. Donec lobortis ligula id elit sagittis, consectetur dictum mi blandit.

#### Assignment Profiles
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
- LCST::
  - Get: Get very large Local storage data.
  - Set: Set very large Local storage data.
- TEXT::
  - Wordcount: Execute word count analysis on static or dynamic text.
  - Keywordex: Execute keyword extraction analysis on static or dynamic text.
  - Classification: Execute classification analysis on static or dynamic text.
  - Concordance: Execute parts of speech concordance analysis on static or dynamic text.

Full documentation comming soon.

by [Alex Reid ](https://github.com/aareid10)
