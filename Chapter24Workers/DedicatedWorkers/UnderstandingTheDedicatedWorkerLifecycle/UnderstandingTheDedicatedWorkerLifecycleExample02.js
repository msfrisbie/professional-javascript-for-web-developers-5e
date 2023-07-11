self.postMessage('foo');
self.close();
self.postMessage('bar');
setTimeout(() => self.postMessage('baz'), 0);
MAIN.JS
const worker = new Worker('./worker.js');
worker.onmessage = ({data}) => console.log(data);

// foo
// bar
