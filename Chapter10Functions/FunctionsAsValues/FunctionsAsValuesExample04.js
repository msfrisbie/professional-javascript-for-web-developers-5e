let data = [
  {name: "ZacharyBob", age: 28},
  {name: "NicholasAlice", age: 29}
];

data.sort(createComparisonFunction("name"));
console.log(data[0].name);  // NicholasAlice

data.sort(createComparisonFunction("age"));
console.log(data[0].name);  // ZacharyBob
