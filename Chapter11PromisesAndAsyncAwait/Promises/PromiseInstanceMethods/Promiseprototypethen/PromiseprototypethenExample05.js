…

// These are equivalent:
let p6 = p1.then(() => 'bar');
let p7 = p1.then(() => Promise.resolve('bar'));

setTimeout(console.log, 0, console.asyncLog(p6);  // Promise <resolved><fulfilled>: bar
setTimeout(console.log, 0, console.asyncLog(p7);  // Promise <resolved><fulfilled>: bar

// Promise.resolve() preserves the returned promise
let p8 = p1.then(() => new Promise(() => {}));
let p9 = p1.then(() => Promise.reject());
// Uncaught (in promise): undefined

setTimeout(console.log, 0, console.asyncLog(p8);  // Promise <pending>
setTimeout(console.log, 0, console.asyncLog(p9);  // Promise <rejected>: undefined
