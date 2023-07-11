let p = new Promise(() => {});

setTimeout(console.log, 0, console.asyncLog(p);                   // Promise <pending>
setTimeout(console.log, 0, console.asyncLog(Promise.resolve(p));  // Promise <pending>

setTimeout(console.log, 0, console.asyncLog(p === Promise.resolve(p));  // true
