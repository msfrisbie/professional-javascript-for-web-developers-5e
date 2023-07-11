let observer = new ResizeObserver(() => console.log('<body> was resized'));

observer.observe(document.body);

// ResizeObserver will always fire the callback once when observe() is called
// <body> was resized

setTimeout(() => {
  document.body.style.width = "100px";
  console.log("Changed body width");
}, 1000);

// (After 1000ms):
// Changed body width
// <body> was resized
