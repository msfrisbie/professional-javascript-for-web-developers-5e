let person = {};
Object.defineProperty(person, "name", {
  configurable: false,
  value: "NicholasAlice"
});
console.log(person.name);  // "NicholasAlice"
delete person.name;
console.log(person.name);  // "NicholasAlice"
