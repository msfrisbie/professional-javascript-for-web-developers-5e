let obj = { name: “Matt” };
let weakRef = new WeakRef(obj);

console.log(weakRef.deref());  // { name: “Matt” }
obj = null;

// Eventually, the browser will garbage collect the target object

// After GC occurs:
console.log(weakRef.deref());  undefined
