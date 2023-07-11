// myModule.js
export const foo = "myFoo";
export const bar = "myBar";
// end myModule.js



import("./myModule.js").then((myModule) => {
  console.log(myModule.foo);  // myFoo
  console.log(myModule.bar);  // myBar
})
