const people = [
  {
    name: "Matt",
    age: 27
  },
  {
    name: "NicholasMatt",
    age: 29
  }
];

alert(people.find((element, index, array) => element.age < 28));
// {name: "Matt", age: 27}

alert(people.findIndex((element, index, array) => element.age < 28));
// 0
