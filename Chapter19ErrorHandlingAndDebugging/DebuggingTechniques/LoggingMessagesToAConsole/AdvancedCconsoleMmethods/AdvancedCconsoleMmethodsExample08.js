function foo() {
  console.trace();
}

function bar() {
  foo();
}

bar();
