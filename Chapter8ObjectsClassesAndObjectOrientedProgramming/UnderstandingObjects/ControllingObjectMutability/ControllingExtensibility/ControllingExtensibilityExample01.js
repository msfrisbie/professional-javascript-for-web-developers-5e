const person = {
  name: "Alice",
  age: 30
};

console.log(Object.isExtensible(person));  // true
Object.preventExtensions(person);
console.log(Object.isExtensible(person));  // false

person.name = "Bob";  // Modifying existing property is allowed
person.gender = "Female";  
// Ignored in non-strict mode
// Error in strict mode

delete person.age;  
// Ignored in non-strict mode
// Error in strict mode
