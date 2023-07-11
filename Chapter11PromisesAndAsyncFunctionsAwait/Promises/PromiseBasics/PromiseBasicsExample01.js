let p = new Promise(() => {});
setTimeout(console.log, 0, console.asyncLog(p);  // Promise <pending>
