let p1 = Promise.any([
  Promise.resolve(),
  Promise.reject()
]);

// Elements in the iterable are coerced into a promise using Promise.resolve()
let p2 = Promise.any([3, 4]);

// Empty iterable is equivalent to Promise.reject()
let p3 = Promise.any([]);
// Uncaught (in promise) AggregateError: All promises were rejected

// Invalid syntax
let p4 = Promise.any();
// TypeError: cannot read Symbol.iterator of undefined
