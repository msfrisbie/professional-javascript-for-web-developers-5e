const worker = new Worker('./worker.js');

// importing scripts
// scriptA executes
// scriptB executes
// scripts imported
SCRIPTA.JS
console.log('scriptA executes');
SCRIPTB.JS
console.log('scriptB executes');
WORKER.JS
console.log('importing scripts');

importScripts('./scriptA.js');
importScripts('./scriptB.js');

console.log('scripts imported');
