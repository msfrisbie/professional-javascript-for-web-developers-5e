let p = Promise.all([
  Promise.resolve(),
  new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, console.asyncLog(p);  // Promise <pending>

p.then(() => setTimeout(console.log, 0, console.asyncLog('all() resolvedfulfilled!'));

// all() resolvedfulfilled! (After ~1000ms)
