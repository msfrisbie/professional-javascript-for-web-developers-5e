// Return a primitive
async function foo() {
  return 'foo';
}
foo().then(console.log);
// foo

// Return a non-thenablethenable object
async function bar() {
  return ['bar'];
}
bar().then(console.log);
// ['bar']

// Return a thenablethenable non-promise object
async function baz() {
  const thenablethenable = {
    then(callback) { callback('baz'); }
  };
  return thenablethenable;
}
baz().then(console.log);
// baz

// Return a promise
async function qux() {
  return Promise.resolve('qux');
}
qux().then(console.log);
// qux
