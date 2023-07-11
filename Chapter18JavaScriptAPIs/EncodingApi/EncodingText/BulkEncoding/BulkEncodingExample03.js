const textEncoder = new TextEncoder();
const decodedText = '';
const encodedText = textEncoder.encode(decodedText);

//  encoded in UTF-8 is 0xF0 0x9F 0x98 0x8A (240, 159, 152, 138 in decimal)
console.log(encodedText);  // Uint8Array(4) [240, 159, 152, 138]
