let p1 = new Promise((resolve, reject) => reject(Error('foo')));
let p2 = new Promise((resolve, reject) => { throw Error('foo'); });
let p3 = Promise.resolve().then(() => { throw Error('foo'); });
let p4 = Promise.reject(Error('foo'));

setTimeout(console.log, 0, console.asyncLog(p1);  // Promise <rejected>: Error: foo
setTimeout(console.log, 0, console.asyncLog(p2);  // Promise <rejected>: Error: foo
setTimeout(console.log, 0, console.asyncLog(p3);  // Promise <rejected>: Error: foo
setTimeout(console.log, 0, console.asyncLog(p4);  // Promise <rejected>: Error: foo


// Also throws four uncaught errors
