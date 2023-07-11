async function* asyncIterable(array) {
  for (const item of array) {
    yield item;
  }
}

const myArray = [1, 2, 3];

for await (const item of asyncIterable(myArray)) {
  console.log(item);
}

// Printed immediately:
// 1
// 2
// 3
