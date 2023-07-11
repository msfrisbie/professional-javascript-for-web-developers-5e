let p = Promise.any([
  new Promise((resolve, reject) => setTimeout(resolve, 1000, 'first')),
  new Promise((resolve, reject) => setTimeout(resolve, 2000, 'second'))
]);
console.asyncLog(p);  // Promise <pending>

p.then((value) => console.asyncLog('any() resolved:', value));

// any() resolved: first (After ~1000ms)
