class Person {
  constructor(override) {
    this.foo = 'foo';
    if (override) {
      return {
        bar: 'bar'
      };
    }
  }
}

let p1 = new Person(),
    p2 = new Person(true);

console.log(p1);                    // Person{ foo: 'foo' }
console.log(p1 instanceof Person);  // true

console.log(p2);                    // { bar: 'bar' }
console.log(p2 instanceof Person);  // false
