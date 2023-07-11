// myModule.js
window.foo = "myFoo";
window.bar = "myBar";
// end myModule.js


import "./myModule.js";

console.log(window.foo);  // myFoo
