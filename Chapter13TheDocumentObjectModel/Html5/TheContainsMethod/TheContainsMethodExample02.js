let result = document.documentElement.compareDocumentPosition(document.body);
console.log(!!(result & 0x10));
