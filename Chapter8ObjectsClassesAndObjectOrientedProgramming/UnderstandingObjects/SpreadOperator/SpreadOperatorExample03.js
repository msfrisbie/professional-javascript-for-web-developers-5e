const foo = { a: 1 };
const bar = { b: 2, c: { d: 3 } };

const foobar = {…foo, …bar};

console.log(foobar.c === bar.c);  // true
