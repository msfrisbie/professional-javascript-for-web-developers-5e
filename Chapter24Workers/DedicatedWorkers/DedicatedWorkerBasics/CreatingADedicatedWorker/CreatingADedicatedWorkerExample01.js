// empty JS worker file
MAIN.JS
console.log(location.href);  // "https://example.com/"
const worker = new Worker(location.href + 'emptyWorker.js');
console.log(worker);         // Worker {}
