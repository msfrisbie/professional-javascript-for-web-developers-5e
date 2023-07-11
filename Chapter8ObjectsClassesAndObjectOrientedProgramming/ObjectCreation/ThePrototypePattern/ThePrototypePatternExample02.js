let Person = function() {};

Person.prototype.name = "NicholasAlice";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};

let person1 = new Person();
person1.sayName();   // "NicholasAlice"

let person2 = new Person();
person2.sayName();   // "NicholasAlice"

console.log(person1.sayName == person2.sayName);  // true
