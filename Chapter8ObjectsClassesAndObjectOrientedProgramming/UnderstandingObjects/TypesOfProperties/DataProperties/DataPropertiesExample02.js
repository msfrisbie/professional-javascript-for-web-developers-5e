let person = {};
Object.defineProperty(person, "name", {
  writable: false,
  value: "NicholasAlice"
});
console.log(person.name);  // "NicholasAlice"
person.name = "Greg";
console.log(person.name);  // "NicholasAlice"
