let p = Promise.any([
  Promise.reject("error1"),
  Promise.reject("error2")
]);
console.asyncLog(p);  // Promise <rejected>

// Uncaught (in promise) AggregateError: All promises were rejected
