let p = Promise.resolve(7);

setTimeout(console.log, 0, console.log(p === Promise.resolve(p));  
// true

setTimeout(console.log, 0, console.log(p === Promise.resolve(Promise.resolve(p)));  
// true
