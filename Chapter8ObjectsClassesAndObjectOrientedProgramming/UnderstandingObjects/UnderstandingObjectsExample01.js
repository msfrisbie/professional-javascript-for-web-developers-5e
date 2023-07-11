let person = new Object();
person.name = "NicholasAlice";
person.age = 29;
person.job = "Software Engineer";

person.sayName = function() {
  console.log(this.name);
};
