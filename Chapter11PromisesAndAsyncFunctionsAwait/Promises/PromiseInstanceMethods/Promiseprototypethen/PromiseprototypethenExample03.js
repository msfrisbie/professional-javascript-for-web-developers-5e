let p1 = new Promise(() => {});
let p2 = p1.then();
setTimeout(console.log, 0, console.asyncLog(p1);         // Promise <pending>
setTimeout(console.log, 0, console.asyncLog(p2);         // Promise <pending>
setTimeout(console.log, 0, console.asyncLog(p1 === p2);  // false
