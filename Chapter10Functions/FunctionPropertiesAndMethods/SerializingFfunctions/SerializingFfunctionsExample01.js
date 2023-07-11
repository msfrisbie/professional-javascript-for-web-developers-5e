function foo(value = "foo") { return value; }
console.log(foo.toString());
// function foo(value = "foo") { return value; }

const bar = (value = "bar") => value; 
console.log(bar.toString());
// (value = "bar") => value

console.log(alert);
// function alert() { [native code] }
