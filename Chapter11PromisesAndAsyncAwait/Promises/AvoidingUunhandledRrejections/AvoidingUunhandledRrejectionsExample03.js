window.addEventListener('unhandledrejection', () => console.log("UNHANDLED"));

Promise.reject().catch( () => {})
Promise.reject().then(null, () => {})

// No console output
