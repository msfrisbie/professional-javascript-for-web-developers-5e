let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));

// When this console.log asyncLog executes, the timeout callback has not yet executed:
setTimeout(console.log, 0, console.asyncLog(p);  // Promise <pending>
