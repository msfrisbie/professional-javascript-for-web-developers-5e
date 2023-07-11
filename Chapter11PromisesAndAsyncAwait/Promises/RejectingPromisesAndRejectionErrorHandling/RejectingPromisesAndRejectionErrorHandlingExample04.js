Promise.reject(Error('foo'));
console.log('bar');
// bar

// Uncaught (in promise) Error: foo
