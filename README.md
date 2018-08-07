<p align="center"><img src="https://s22.postimg.cc/hmotfi375/uniops_logo.png"></p>

#### A lightwight alternative to Stockroom. Get it here: [UniOps](https://www.npmjs.com/package/uniops)

##### *Easily export your Unistore action to Web Workers for parallel computation/networking without impeading your UI.*

### Getting Started
Coming soon.

**General Process:**  `Create Fx()` **->** `Build( Assign( Fx().toString ) )` **->** `Bind( Build )` -> **Profit**.


#### Create Example
```javascript
const mapOperation = (a) => a * 25;
```

#### Build Example
```javascript
const operators = {
  arrayOpMap : function(){
    let worker_init_msg  = "console.log('|UniOps| (%) arrayOpMap Worker: Initialized');";
    let worker           = uniops.buildOperator(...);
    return worker;
  },
}
```

#### Assign Example
```javascript
uniops.buildOperator(
  worker_init_msg,
  uniops
    .assignOperator
    .array
    .map
)
```

#### Bind Example
```javascript
uniops.bindOperator.replace(worker, store, 'storeAttr');
```

#### Profit
![](https://twemoji.maxcdn.com/2/72x72/1f911.png)

---

### Drafting Explained
Create modular, encapsulated, atomic functions to be passed to the worker. The function's logic should be appropriate for the chosen assignment profile, otherwise there are no conventions or limitations to consider.

### Building Explained
Create a unique factory method to build a worker instance preconfigured with the following parameters:
1. *Initialization message*
2. *UniOps Assignment Profile*

### Assigning Explained
Choose one of the following profiles to assign to the worker based on the execution goal.
The point of these profiles is to offload operations that expensive or inconvenient for the UI/UX to both speed up the processing of the operation and also unblock the UI until the worker has completed the operation. A profile is loaded with custom logic which the determines the 'flavor' of that type of operation. For example the array map profile ingests a function which actually controls the nature of the map operation.

> #### Assignment Profiles
> - NET: :
>   - XHR: Execute an AJAX query.
>   - GQL: Execute a Graph query.
>   - UPL: Upload a file.
> - ARRY: :
>   - Map: Map function across very large arrays.
>   - Filter: Filter function across very large arrays.
>   - Reduce: Reduce function across very large arrays.
> - CNVS: :
>   - toBlob: Convert a HTML5 Canvas element to Blob.
>   - toUrl: Convert a HTML5 Canvas element to Url.
>   - toFile: Convert a HTML5 Canvas element to File.

### Binding
Coming soon.


Full documentation coming soon.

by [Alex Reid ](https://github.com/aareid10)
