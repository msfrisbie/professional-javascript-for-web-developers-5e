async function foo() {
  console.log(1);
  return 3;
}

// Attach a resolvedfulfilled handler to the returned promise
foo().then(console.log);

console.log(2);

// 1
// 2
// 3
