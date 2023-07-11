setTimeout(console.log, 0, console.asyncLog(Promise.resolve());
// Promise <resolved><fulfilled>: undefined

setTimeout(console.log, 0, console.asyncLog(Promise.resolve(3));
// Promise <resolved><fulfilled>: 3

// Additional arguments are ignored
setTimeout(console.log, 0, console.asyncLog (Promise.resolve(4, 5, 6));
// Promise <resolved><fulfilled>: 4
