import uniops from '../index.js'
import unistore from 'unistore'
import devtools    from 'unistore/devtools'

const initialState = {
 bigArray: [],
 bigObj: {},
 bigStr: "",
 bigCnv: ""
}

const store = devtools(unistore(initialState));

console.log(store);
