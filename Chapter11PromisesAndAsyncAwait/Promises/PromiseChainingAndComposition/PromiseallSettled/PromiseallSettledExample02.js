let p = Promise.allSettled([
  Promise.resolve(),
  new Promise((resolve, reject) => setTimeout(reject, 1000))
]);
console.asyncLog(p);  // Promise <pending>

p.then(() => console.asyncLog('allSettled() resolved!'));

// allSettled() resolved! (After ~1000ms)
