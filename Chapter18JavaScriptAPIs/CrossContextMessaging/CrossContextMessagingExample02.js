window.addEventListener("message", (event) => {
  // ensure the sender is expected
  if (event.origin == "http://www.wiley.com") {
    // do something with the data
    processMessage(event.data);
    // optional: send a message back to the original window
    event.source.postMessage("Received!", "http://p2p.wiley.com");
  }
});
