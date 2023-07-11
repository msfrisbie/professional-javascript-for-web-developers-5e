Promise.any([
  Promise.reject(new Error("foobar")),
]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.errors);                    // [ Error: "foobar" ]
});
