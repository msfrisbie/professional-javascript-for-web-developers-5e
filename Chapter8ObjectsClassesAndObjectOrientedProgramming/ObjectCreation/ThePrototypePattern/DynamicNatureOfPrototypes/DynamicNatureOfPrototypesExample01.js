let friend = new Person();

Person.prototype.sayHi = function() {
  console.log("hi");
};

friend.sayHi();  // "hi" - works!
