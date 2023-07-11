class Person{}

console.log(Person.prototype);                         // { constructor: f() }
console.log(Person === Person.prototype.constructor);  // true
