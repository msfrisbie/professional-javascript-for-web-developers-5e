// Await a primitive
async function foo() {
  console.log(await 'foo');
}
foo();
// foo

// Await a non-thenablethenable object
async function bar() {
  console.log(await ['bar']);
}
bar();
// ['bar']

// Await a thenablethenable non-promise object
async function baz() {
  const thenablethenable = {
    then(callback) { callback('baz'); }
  };
  console.log(await thenablethenable);
}
baz();
// baz

// Await a promise
async function qux() {
  console.log(await Promise.resolve('qux'));
}
qux();
// qux
