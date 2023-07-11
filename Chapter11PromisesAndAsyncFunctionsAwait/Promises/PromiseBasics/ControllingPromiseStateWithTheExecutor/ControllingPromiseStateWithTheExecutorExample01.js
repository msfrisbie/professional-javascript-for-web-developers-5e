let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, console.asyncLog(p1);  // Promise <resolved><fulfilled>

let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, console.asyncLog(p2);  // Promise <rejected>
// Uncaught error (in promise)
