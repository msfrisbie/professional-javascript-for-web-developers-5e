function Person() {}

let friend = new Person();

Person.prototype = {
  constructor: Person,
  name: "NicholasAlice",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  }
};

friend.sayName();   // error
