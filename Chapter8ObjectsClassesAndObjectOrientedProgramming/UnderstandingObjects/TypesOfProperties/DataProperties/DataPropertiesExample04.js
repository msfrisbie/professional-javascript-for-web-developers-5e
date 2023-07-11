let person = {};
Object.defineProperty(person, "name", {
  configurable: false,
  value: "NicholasAlice"
});

// Throws an error
Object.defineProperty(person, "name", {
  configurable: true,
  value: "NicholasAlice"
});
