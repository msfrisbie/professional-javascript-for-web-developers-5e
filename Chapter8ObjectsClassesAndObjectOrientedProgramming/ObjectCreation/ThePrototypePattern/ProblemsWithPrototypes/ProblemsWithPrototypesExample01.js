function Person() {}

Person.prototype = {
  constructor: Person,
  name: "NicholasAlice",
  age: 29,
  job: "Software Engineer",
  friends: ["Shelby", "Court"],
  sayName() {
    console.log(this.name);
  }
};

let person1 = new Person();
let person2 = new Person();

person1.friends.push("Van");

console.log(person1.friends);  // "Shelby,Court,Van"
console.log(person2.friends);  // "Shelby,Court,Van"
console.log(person1.friends === person2.friends);  // true
