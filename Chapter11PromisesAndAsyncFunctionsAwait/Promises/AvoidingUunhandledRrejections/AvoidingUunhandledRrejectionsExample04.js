window.addEventListener('unhandledrejection', () => console.log("UNHANDLED"));

Promise.allSettled([Promise.reject()]);

// No console output
