let p1 = Promise.resolve('foo');

// These all act as a passthrough
let p2 = p1.finally();
let p3 = p1.finally(() => undefined);
let p4 = p1.finally(() => {});
let p5 = p1.finally(() => Promise.resolve());
let p6 = p1.finally(() => 'bar');
let p7 = p1.finally(() => Promise.resolve('bar'));
let p8 = p1.finally(() => Error('qux'));

setTimeout(console.log, 0, console.asyncLog(p2);  // Promise <resolved><fulfilled>: foo
setTimeout(console.log, 0, console.asyncLog(p3);  // Promise <resolved><fulfilled>: foo
setTimeout(console.log, 0, console.asyncLog(p4);  // Promise <resolved><fulfilled>: foo
setTimeout(console.log, 0, console.asyncLog(p5);  // Promise <resolved><fulfilled>: foo
setTimeout(console.log, 0, console.asyncLog(p6);  // Promise <resolved><fulfilled>: foo
setTimeout(console.log, 0, console.asyncLog(p7);  // Promise <resolved><fulfilled>: foo
setTimeout(console.log, 0, console.asyncLog(p8);  // Promise <resolved><fulfilled>: foo
