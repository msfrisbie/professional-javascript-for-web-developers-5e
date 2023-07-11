for (let i = 0; i < 5; i++) {
  console.count("My Loop");
}

console.countReset("My Loop");
console.count("My Loop");

// My Loop: 1
// My Loop: 2
// My Loop: 3
// My Loop: 4
// My Loop: 5
// My Loop: 1

