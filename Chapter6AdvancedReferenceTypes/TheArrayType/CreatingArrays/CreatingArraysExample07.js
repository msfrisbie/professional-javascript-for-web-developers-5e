// Strings will be broken up into an array of single characters
alert(Array.from("Matt"));  // ["M", "a", "t", "t"]

// Sets and Maps can be converted into an new array instance using from()
const m = new Map().set(1, 2)
                   .set(3, 4);
const s = new Set().add(1)
                   .add(2)
                   .add(3)
                   .add(4);

alert(Array.from(m));  // [[1, 2], [3, 4]]
alert(Array.from(s));  // [1, 2, 3, 4]

// Array.from() performs a shallow copy of an existing array
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
alert(a1);         // [1, 2, 3, 4]
alert(a1 === a2);  // false


// Any iterable object can be used
const iter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;

  }
};
alert(Array.from(iter));  // [1, 2, 3, 4]

// The arguments object can now easily be casted into an array:
function getArgsArray() {
  return Array.from(arguments);
}
alert(getArgsArray(1, 2, 3, 4));  // [1, 2, 3, 4]

// from() will happily use a custom object with required properties
const arrayLikeObject = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4
};
alert(Array.from(arrayLikeObject));  // [1, 2, 3, 4]
Array.from() also accepts a second optional map function argument. This allows you to augment the new array's values without creating an intermediate array first, which is the case if the same were performed with Array.from().map(). A third optional argument specifies the value of this inside the map function. The overridden this value is not applied inside an arrow function:
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1, x => x**2);
const a3 = Array.from(a1, function(x) {return x**this.exponent}, {exponent: 2});
alert(a2);  // [1, 4, 9, 16]
alert(a3);  // [1, 4, 9, 16]
