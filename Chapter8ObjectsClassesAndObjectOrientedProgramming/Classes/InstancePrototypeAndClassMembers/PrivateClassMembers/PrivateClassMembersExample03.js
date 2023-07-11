class Person {
  #age;

  constructor() {
    this.#age = 30;
    
    // Private members cannot be deleted
    delete this.#age; // SyntaxError
    
    // You must declare all private members in the class body
    this.#name = "Alice"; // SyntaxError
  }
}

new Person();
