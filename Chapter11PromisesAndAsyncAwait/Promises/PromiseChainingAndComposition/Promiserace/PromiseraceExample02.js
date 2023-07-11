// Resolve occurs first, reject in timeout ignored
let p1 = Promise.race([
  Promise.resolve(3),
  new Promise((resolve, reject) => setTimeout(reject, 1000))
]);
setTimeout(console.log, 0, console.asyncLog(p1);  // Promise <resolved><fulfilled>: 3

// Reject occurs first, resolve in timeout ignored
let p2 = Promise.race([
  Promise.reject(4),
  new Promise((resolve, reject) => setTimeout(resolve, 1000))
]);
setTimeout(console.log, 0, console.asyncLog(p2);  // Promise <rejected>: 4

// Iterator order is the tiebreaker for settling order
let p3 = Promise.race([
  Promise.resolve(5),
  Promise.resolve(6),
  Promise.resolve(7)
]);
setTimeout(console.log, 0, console.asyncLog(p3);  // Promise <resolved><fulfilled>: 5
