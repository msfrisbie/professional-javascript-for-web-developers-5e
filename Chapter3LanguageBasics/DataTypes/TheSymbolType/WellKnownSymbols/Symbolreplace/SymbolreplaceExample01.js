console.log(RegExp.prototype[Symbol.replace]);
// Æ’ [Symbol.replace]() { [native code] }

console.log('foobarbaz'.replace(/bar/, 'qux'));
// 'fooquxbaz'
