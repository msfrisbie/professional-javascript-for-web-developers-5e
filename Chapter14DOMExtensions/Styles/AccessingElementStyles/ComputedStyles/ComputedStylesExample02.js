let myDiv = document.getElementById("myDiv");
let computedStyle = document.defaultView.getComputedStyle(myDiv, null);

console.log(computedStyle.backgroundColor);  // "red"
console.log(computedStyle.width);            // "100px"
console.log(computedStyle.height);           // "200px"
console.log(computedStyle.border);           // "1px solid black" in some browsers
