console.log(RegExp.prototype[Symbol.split]);
// Æ’ [Symbol.split]() { [native code] }

console.log('foobarbaz'.split(/bar/));
// ['foo', 'baz']
