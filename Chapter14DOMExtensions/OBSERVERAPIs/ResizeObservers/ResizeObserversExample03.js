let observer = new ResizeObserver(() => console.log('<body> was resized'));

observer.observe(document.body);

// ResizeObserver will always fire the callback once when observe() is called
// <body> was resized

setTimeout(() => {
  document.body.style.width = "100px";
}, 1000);

// (After 1000ms):
// <body> was resized
