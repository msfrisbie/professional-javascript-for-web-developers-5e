// clipboard.read() returns an array of ClipboardItem objects
for (let clipboardItem of await navigator.clipboard.read()) {

  // Iterate the MIME types within this item
  for (let type of clipboardItem.types) {

    // We're looking for a PNG
    if (type === 'image/png') {

      // The clipboard data is accessed via MIME key
      let blob = await clipboardItem.getType(type);
      
      // Now we can use the blob
    }
  }
}
