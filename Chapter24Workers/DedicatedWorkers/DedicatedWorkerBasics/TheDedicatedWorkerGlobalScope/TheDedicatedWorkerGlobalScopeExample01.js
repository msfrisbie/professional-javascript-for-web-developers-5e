console.log('inside worker:', self);
MAIN.JS
const worker = new Worker('./globalScopeWorker.js');

console.log('created worker:', worker);

// created worker: Worker {}
// inside worker: DedicatedWorkerGlobalScope {}
