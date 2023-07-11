new Promise(() => setTimeout(console.log, 0, console.asyncLog('executor'));
setTimeout(console.log, 0, console.asyncLog('promise initialized');

// executor
// promise initialized
