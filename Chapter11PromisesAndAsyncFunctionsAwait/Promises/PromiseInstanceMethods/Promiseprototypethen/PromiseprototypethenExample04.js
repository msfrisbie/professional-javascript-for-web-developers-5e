let p1 = Promise.resolve('foo');

// Calling then() with no handler function acts as a passthrough
let p2 = p1.then();

setTimeout(console.log, 0, console.asyncLog(p2);  // Promise <resolved><fulfilled>: foo

// These are equivalent
let p3 = p1.then(() => undefined);
let p4 = p1.then(() => {});
let p5 = p1.then(() => Promise.resolve());

setTimeout(console.log, 0, console.asyncLog(p3);  // Promise <resolved><fulfilled>: undefined
setTimeout(console.log, 0, console.asyncLog(p4);  // Promise <resolved><fulfilled>: undefined
setTimeout(console.log, 0, console.asyncLog(p5);  // Promise <resolved><fulfilled>: undefined
