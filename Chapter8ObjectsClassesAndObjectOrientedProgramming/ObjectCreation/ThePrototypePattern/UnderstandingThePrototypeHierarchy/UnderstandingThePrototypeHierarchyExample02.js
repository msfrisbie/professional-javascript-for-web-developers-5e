function Person() {}

Person.prototype.name = "NicholasAlice";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};

let person1 = new Person();
let person2 = new Person();

person1.name = "Greg";
console.log(person1.name);   // "Greg" - from instance
console.log(person2.name);   // "NicholasAlice" - from prototype

delete person1.name;
console.log(person1.name);   // "NicholasAlice" - from the prototype
