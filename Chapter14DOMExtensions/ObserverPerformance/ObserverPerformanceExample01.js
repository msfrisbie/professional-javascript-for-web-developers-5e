let timeoutId = null;
let observer = new ResizeObserver(() => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => console.log("<body> size changed"), 1000);
});

observer.observe(document.body);
Another simple but important optimization strategy is to remove observers when they are no longer needed. Eagerly call unobserve() and disconnect() when elements no longer require an observer.
