const person = {
  name: "Alice",
  age: 30
};

console.log(Object.isSealed(person));  // false
Object.seal(person);
console.log(Object.isSealed(person));  // true

person.name = "Bob";  // Modifying existing property is allowed
person.height = "6 feet";  
// Ignored in non-strict mode
// Error in strict mode

delete person.age;  
// Ignored in non-strict mode
// Error in strict mode
