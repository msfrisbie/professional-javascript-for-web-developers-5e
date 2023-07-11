let p = Promise.allSettled([
  Promise.resolve(3),
  Promise.reject(4),
  Promise.resolve(5)
]);

p.then((results) => console.asyncLog(results));
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'rejected', reason: 4 },
//   { status: 'fulfilled', value: 5 }
// ]
