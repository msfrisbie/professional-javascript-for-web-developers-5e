console.log(person.address?.postalCode?.length);       // undefined

// Once the optional chaining short-circuits, it will not evaluate
// anything to the right of the operator
console.log(person.address?.postalCode?.foo.bar.baz);  // undefined
