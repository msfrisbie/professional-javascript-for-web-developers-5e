console.log('1');
setTimeout(console.log, 0, '4');
Promise.resolve('3').then(console.log);
console.log('2');

// 1
// 2
// 3
// 4

