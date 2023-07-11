console.log(person.#name);
// SyntaxError: Private field '#name' must be declared in an enclosing class

console.log(person['age']);    // 30
console.log(person['#name']);  // undefined
