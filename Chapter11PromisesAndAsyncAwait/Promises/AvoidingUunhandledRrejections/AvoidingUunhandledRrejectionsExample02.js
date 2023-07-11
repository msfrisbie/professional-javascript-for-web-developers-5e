
window.addEventListener('unhandledrejection', () => console.log("UNHANDLED"));

Promise.reject('foo')
// UNHANDLED
// Uncaught (in promise) foo
