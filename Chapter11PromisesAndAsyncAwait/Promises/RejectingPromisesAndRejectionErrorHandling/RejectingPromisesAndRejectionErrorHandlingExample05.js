// Correct
Promise.reject(Error('foo')).catch((e) => {});

// Incorrect
try {
  Promise.reject(Error('foo'));
} catch(e) {}
