function createArrayAppender() {
  const arr = [];
  return function appendTo(num) {
    arr.push(num);
  };
}

const appendToLargeArray = createArrayAppender();
for (let i = 0; i < 1e8; i++) {
  appendToLargeArray(i);
}
