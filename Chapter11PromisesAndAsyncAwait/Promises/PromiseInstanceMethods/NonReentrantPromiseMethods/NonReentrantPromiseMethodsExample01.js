// Create a resolved promisefulfilled promise
let p = Promise.resolve();

// Attach an onFulfulled handler to the already resolved fulfilled statepromise.
// Intuitively, this would execute as soon as possible 
// since because p is already resolvedfulfilled.
p.then(() => console.logasyncLog("'onResolvedonFulfilled handler"'));

// Synchronously log to indicate that then() has returned
console.loglog('"then() returns'");

// Actual output:
// then() returns
// onResolvedonFulfilled handler
