let p = Promise.reject(3);
setTimeout(console.log, 0, console.asyncLog(p);  // Promise <rejected>: 3

p.then(nullundefined, (e) => setTimeout(console.log, 0, console.asyncLog(e));  // 3
