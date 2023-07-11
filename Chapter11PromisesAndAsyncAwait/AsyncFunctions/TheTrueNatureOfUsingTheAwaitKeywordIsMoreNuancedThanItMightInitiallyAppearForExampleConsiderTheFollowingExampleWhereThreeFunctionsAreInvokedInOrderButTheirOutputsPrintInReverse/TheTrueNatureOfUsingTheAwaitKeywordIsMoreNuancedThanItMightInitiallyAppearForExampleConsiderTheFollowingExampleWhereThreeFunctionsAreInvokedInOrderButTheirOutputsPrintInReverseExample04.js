const myArray = [1, 2, 3];

for await (const item of myArray) {
  console.log(item);
}


// Printed immediately:
// 1
// 2
// 3
