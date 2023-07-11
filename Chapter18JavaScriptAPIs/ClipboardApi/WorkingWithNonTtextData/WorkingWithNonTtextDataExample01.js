// Create empty PNG blob
const blob = await new Promise(
  (resolve) => document.createElement("canvas").toBlob(resolve, "image/png"));

// Generate the ClipboardItem to be stored in the clipboard
const clipboardItem = new ClipboardItem({'image/png': blob});

// Perform the clipboard write
navigator.clipboard.write([myClipboardItem]);
