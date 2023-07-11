// The "smiling face with smiling eyes" emoji is U+1F60A
// 0x1F60A === 128522
let message = "ab😊â¤ºde";

console.log(message.length);         // 6

console.log(message.charAt(1));      // b
console.log(message.charAt(2));      // <?>
console.log(message.charAt(3));      // <?>
console.log(message.charAt(4));      // d

console.log(message.charCodeAt(1));  // 98
console.log(message.charCodeAt(2));  // 55357
console.log(message.charCodeAt(3));  // 56842
console.log(message.charCodeAt(4));  // 100

console.log(String.fromCharCode(0xD83D, 0xDE0A));  // 😊

console.log(String.fromCharCode(0x1F60A));  // â¤º

console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101));  // ab😊â¤ºde
