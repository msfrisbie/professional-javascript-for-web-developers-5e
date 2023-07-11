console.log(Person.prototype.__proto__ === Object.prototype);    
// true

console.log(Person.prototype.__proto__.constructor === Object);  
// true

console.log(Person.prototype.__proto__.__proto__ === null);      
// true

console.log(Person.prototype.__proto__);
// {
//   constructor: f Object(),
//   toString: …
//   hasOwnProperty: …
//   isPrototypeOf: …
//   …
// }
