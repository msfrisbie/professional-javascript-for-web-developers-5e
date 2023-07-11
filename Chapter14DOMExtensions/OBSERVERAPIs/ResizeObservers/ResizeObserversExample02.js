let observer = new ResizeObserver(() => console.log('<body> size changed'));

observer.observe(document.body);

// <body> size changed!
