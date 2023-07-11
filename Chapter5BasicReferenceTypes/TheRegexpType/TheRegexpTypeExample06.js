const re1 = /cat/g;
console.log(re1);  // "/cat/g"

const re2 = new RegExp(re1);
console.log(re2);  // "/cat/g"

const re3 = new RegExp(re1, "i");
console.log(re3);  // "/cat/i"

