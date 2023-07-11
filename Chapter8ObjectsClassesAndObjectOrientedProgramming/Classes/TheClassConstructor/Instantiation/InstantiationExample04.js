function Person() {}

class Animal {}

// Constructs instance using window as 'this'
let p = Person();

let a = Animal();
// TypeError: class constructor Animal cannot be invoked without 'new'
