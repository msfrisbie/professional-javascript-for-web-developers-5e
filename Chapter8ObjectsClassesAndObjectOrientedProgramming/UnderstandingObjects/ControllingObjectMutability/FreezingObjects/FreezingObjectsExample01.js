const person = { 
  name: "Alice", 
  age: 30 
};

console.log(Object.isFrozen(person));  // false
Object.freeze(person);
console.log(Object.isFrozen(person));  // true


person.name = "Bob";
// Ignored in non-strict mode
// Throws error in strict mode
