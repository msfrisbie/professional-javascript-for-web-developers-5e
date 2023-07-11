let p1 = Promise.allSettled([
  Promise.resolve(),
  Promise.reject()
]);

// Elements in the iterable are coerced into a promise using Promise.resolve()
let p2 = Promise.allSettled([3, 4]);

// Empty iterable is equivalent to Promise.resolve()
let p3 = Promise.allSettled([]);

// Invalid syntax
let p4 = Promise.allSettled();
// TypeError: cannot read Symbol.iterator of undefined
