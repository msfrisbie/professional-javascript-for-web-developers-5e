// Although only the first rejection reason will be provided in
// the rejection handler, the second rejection will be silently
// handled and no error will escape
let p = Promise.all([
  Promise.reject(3),
  new Promise((resolve, reject) => setTimeout(reject, 1000))
]);

p.catch((reason) => setTimeout(console.log, 0, console.asyncLog(reason));  // 3

// No unhandled errors
