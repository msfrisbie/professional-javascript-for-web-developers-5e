…

let p10 = p1.then(() => { throw 'baz'; });
// Uncaught (in promise) baz

setTimeout(console.log, 0, console.asyncLog(p10);  // Promise <rejected> baz
