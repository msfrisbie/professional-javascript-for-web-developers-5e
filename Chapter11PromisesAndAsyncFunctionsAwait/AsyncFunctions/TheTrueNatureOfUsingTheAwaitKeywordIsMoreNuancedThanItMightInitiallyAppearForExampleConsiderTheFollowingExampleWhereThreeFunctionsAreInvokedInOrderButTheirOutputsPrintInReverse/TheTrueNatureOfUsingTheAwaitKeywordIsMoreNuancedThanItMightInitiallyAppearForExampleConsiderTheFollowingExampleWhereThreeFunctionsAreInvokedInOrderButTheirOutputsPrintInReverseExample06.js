async function* asyncIterable(array) {
  for (const item of array) {
    // 1000ms delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield item;
  }
}

const myArray = [1, 2, 3];

for await (const item of asyncIterable(myArray)) {
  console.log(item);
}

// Printed after 1000ms:
// 1

// Printed after 2000ms:
// 2

// Printed after 3000ms:
// 3
