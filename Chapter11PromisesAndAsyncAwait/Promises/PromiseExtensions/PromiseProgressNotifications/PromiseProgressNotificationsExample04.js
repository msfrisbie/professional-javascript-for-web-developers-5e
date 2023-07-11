…

p.notify((x) => setTimeout(console.log, 0, console.asyncLog('a:', x))
 .notify((x) => setTimeout(console.log, 0, console.asyncLog('b:', x));

p.then(() => setTimeout(console.log, 0, console.asyncLog('completed'));

// (after 1s) a: 80% remaining
// (after 1s) b: 80% remaining
// (after 2s) a: 60% remaining
// (after 2s) b: 60% remaining
// (after 3s) a: 40% remaining
// (after 3s) b: 40% remaining
// (after 4s) a: 20% remaining
// (after 4s) b: 20% remaining
// (after 5s) completed
