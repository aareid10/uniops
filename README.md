<p align="center"><img src="https://s22.postimg.cc/hmotfi375/uniops_logo.png"></p>

### Note: This package is no longer being maintainted, migration to the lastest version of [Stockroom](https://www.npmjs.com/package/stockroom) is recommended.

#### A lightweight alternative to [Stockroom](https://github.com/developit/stockroom). Get it here: [UniOps](https://www.npmjs.com/package/uniops). See it in action here: [Demo](https://aareid10.github.io/uniops/).

##### *Easily export your Unistore action to Web Workers for parallel computation/networking without impeding your UI.*

### Getting Started

**General Process:**  `Create Fx()` **⇥** `Build( Assign( Fx().toString ) )` **⇥** `Bind( 'Build' )` **⇥** **Profit**.

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
Create modular, encapsulated, atomic functions to be passed to the worker. The function's logic should be appropriate for the chosen assignment profile. Otherwise there are no conventions or limitations to consider.

### Building Explained
Create a unique factory method to build a worker instance preconfigured with the following parameters:
1. *Initialization message*
2. *UniOps Assignment Profile*

### Assigning Explained
Choose one of the following profiles to assign to the worker based on the execution goal.
The point of these profiles is to offload operations that expensive or inconvenient for the UI/UX to both speed up the processing of the operation and also unblock the UI until the worker has completed the operation.
A profile is loaded with custom logic which the determines the 'flavor' of that type of operation. For example, the array map profile ingests a function, which actually controls the nature of the map operation.

#### Assignment Profiles Explained
> - **NETWORK**: :
>   - **XHR**: 
>     - **GET**: Execute an AJAX query.
>   - **GQL**:
>     - **QUERY**: Execute an Graph query.
> - **ARRAY**: :
>   - **Map**: Map function across very large arrays.
>   - **Filter**: Filter function across very large arrays.
>   - **Reduce**: Reduce function across very large arrays.
>   - **Union** [(Underscore)](https://underscorejs.org/#union): Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
>   - **Intersection** [(Underscore)](https://underscorejs.org/#intersection): Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.
>   - **Difference** [(Underscore)](https://underscorejs.org/#difference): Similar to without, but returns the values from array that are not present in the other arrays.
>   - **Unique** [(Underscore)](https://underscorejs.org/#unique): Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurrence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function.
>   - **Object** [(Underscore)](https://underscorejs.org/#object): Converts arrays into objects. Pass either a single list of [key, value] pairs, or a list of keys, and a list of values. Passing by pairs is the reverse of pairs. If duplicate keys exist, the last value wins.
> - **CANVAS**: :
>   - **Pixels**: Convert a HTML5 Canvas element to Blob.
> - **FILE**: :
>   - **Upload**: Upload a file.
>   - **Blob**: Convert uploaded file to blob.

### Binding Explained
Connect a built 'operator' (web worker w/ assigned profile) to a specified store attribute. Whenever the operator completes it's operation it will automatically update the store.
There are two 'binding modes':
1. **Replace**: Overwrites the store attribute.
2. **Modify**: Partially updates the store attribute. (Coming Soon)

---

by [Alex Reid ](https://github.com/aareid10)
