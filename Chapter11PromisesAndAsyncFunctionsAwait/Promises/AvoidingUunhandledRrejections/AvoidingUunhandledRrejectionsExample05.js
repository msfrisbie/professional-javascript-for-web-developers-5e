window.addEventListener('rejectionhandled', () => console.log("HANDLED LATE"));

const p = Promise.reject();

setTimeout(() => p.catch(() => {}), 1000);

// (after 1000ms): HANDLED LATE
