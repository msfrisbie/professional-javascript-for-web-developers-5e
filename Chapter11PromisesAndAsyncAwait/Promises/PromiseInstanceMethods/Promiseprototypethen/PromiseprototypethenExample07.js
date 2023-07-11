…

let p11 = p1.then(() => Error('qux'));

setTimeout(console.log, 0, console.asyncLog(p11);  // Promise <resolved><fulfilled>: Error: qux
