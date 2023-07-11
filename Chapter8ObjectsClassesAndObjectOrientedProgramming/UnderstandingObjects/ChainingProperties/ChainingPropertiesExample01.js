const person = {
  name: "Alice",
  address: {
    city: "Chicago",
    street: "1060 W Addison St"
  }
};

console.log(person.address.city);        // Chicago
console.log(person.address.postalCode);  // undefined

console.log(person.address.postalCode.length); 
// TypeError: Cannot read property 'length' of undefined
