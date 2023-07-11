let Person = class PersonName {
  identify() {
    console.log(Person.name, PersonName.name);
  }
}

let p = new Person();

p.identify();              // PersonName, PersonName

console.log(Person.name);  // PersonName
console.log(PersonName);   // ReferenceError: PersonName is not defined
