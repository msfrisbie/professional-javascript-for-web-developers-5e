if (car != null) {
  // do something with car
}
The value undefined is a derivative of null, so ECMA-262 defines them to be superficially equal as follows:
console.log(null == undefined);   // true
Using the equality operator (==) between null and undefined always returns true, though keep in mind that this operator converts its operands for comparison purposes (covered in detail later in this chapter).
