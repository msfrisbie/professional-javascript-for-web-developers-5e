// use as a constructor
let person = new Person("NicholasAlice", 29, "Software Engineer");
person.sayName();   // "NicholasAlice"

// call as a function
Person("Greg", 27, "Doctor");  // adds to window
window.sayName();   // "Greg"

// call in the scope of another object
let o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();  // "Kristen"
