// moduleA.js
export const foo = "myFoo";
export const bar = "myBar";
// end moduleA.js



// moduleB.js
export * as myNamespace from './moduleA.js';
// end moduleB.js



import { myNamespace } from './moduleB.js';
console.log(myNamespace.foo);  // myFoo
