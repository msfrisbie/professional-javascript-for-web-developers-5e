const wm = new WeakMap();

const key = Symbol('Key for weak map entry');
const data  = { 
  // … 
};

myWeakMap.set(key, data);
