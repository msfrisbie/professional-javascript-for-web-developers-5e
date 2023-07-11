const person = { ... };
if (person.address) {
  if (person.address.postalCode) {
    console.log(person.address.postalCode.length);
  }
}
