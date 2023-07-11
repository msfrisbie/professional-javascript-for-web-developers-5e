class Person {
  #name = "Alice";
  age = 30;

  getName() {
    return this.#name;
  }
}

const person = new Person();
console.log(person.age);        // 30
console.log(person.getName());  // Alice
