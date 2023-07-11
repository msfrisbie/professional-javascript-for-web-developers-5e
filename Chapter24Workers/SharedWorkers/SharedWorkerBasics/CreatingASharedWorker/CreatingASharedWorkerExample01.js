// empty JS worker file
MAIN.JS
console.log(location.href);  // "https://example.com/"
const sharedWorker = new SharedWorker(
    location.href + 'emptySharedWorker.js');
console.log(sharedWorker);   // SharedWorker {}
