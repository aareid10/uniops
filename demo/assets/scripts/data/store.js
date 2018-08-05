import unistore       from 'unistore'
import devtools       from 'unistore/devtools'

const initialState = {
  bigCanvas: {},
  bigArray: [],
  bigObject: {},
  bigString: ''
}

module.exports = devtools(unistore(initialState));
