// Create worker pool of size 4
const workers = [];
for (let i = 0; i < 4; ++i) {
  workers.push(new Worker('./worker.js'));
}

// Log the final value after the last worker completes
let responseCount = 0;
for (const worker of workers) {
  worker.onmessage = () => {
    if (++responseCount == workers.length) {
      console.log(`Final buffer value: ${view[0]}`);
    }
  };
}

// Initialize the SharedArrayBuffer
const sharedArrayBuffer = new SharedArrayBuffer(4);
const view = new Uint32Array(sharedArrayBuffer);
view[0] = 1;

// Send the SharedArrayBuffer to each worker
for (const worker of workers) {
  worker.postMessage(sharedArrayBuffer);
}

// (Expected result is 4000001)
// Final buffer value: 4000001
WORKER.JS
self.onmessage = ({data}) => {
  const view = new Uint32Array(data);

  // Perform 1000000 add operations
  for (let i = 0; i < 1E6; ++i) {
    Atomics.add(view, 0, 1);
  }

  self.postMessage(null);
};
