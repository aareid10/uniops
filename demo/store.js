import uniops from '../index.js'
import unistore from 'unistore'
import devtools    from 'unistore/devtools'

const genBigArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));
const initialState = {
 bigArray: genBigArray(10000, 100),
 bigObj: {},
 bigStr: "",
 bigCnv: ""
}

const store = devtools(unistore(initialState));

console.log(store);
