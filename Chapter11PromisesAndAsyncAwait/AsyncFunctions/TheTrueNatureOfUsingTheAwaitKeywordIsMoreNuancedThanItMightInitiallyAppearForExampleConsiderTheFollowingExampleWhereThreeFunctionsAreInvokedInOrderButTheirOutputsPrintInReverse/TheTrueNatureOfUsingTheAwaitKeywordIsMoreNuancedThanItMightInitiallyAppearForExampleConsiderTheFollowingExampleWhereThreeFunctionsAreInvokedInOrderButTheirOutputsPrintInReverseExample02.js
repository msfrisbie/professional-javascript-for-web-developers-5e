async function getRandomNumber(i) {
  return new Promise(resolve => {
    console.log(i);
    setTimeout(resolve, 1000, Math.random());
  });
}

async function printRandomNumbers() {
  for await (const x of Array.from(Array(5).keys()).map(getRandomNumber)) {
    console.log(x);
  }
  console.log("loop has exited");
}

printRandomNumbers();

// Printed immediately:
// 0
// 1
// 2
// 3
// 4

// Printed after 1000ms:
// 0.8748458184008716
// ...
// loop has exited
