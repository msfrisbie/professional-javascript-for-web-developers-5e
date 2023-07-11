function Person() {}

Person.prototype.name = "NicholasAlice";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};

let person = new Person();
console.log(hasPrototypeProperty(person, "name"));  // true

person.name = "Greg";
console.log(hasPrototypeProperty(person, "name"));  // false     
