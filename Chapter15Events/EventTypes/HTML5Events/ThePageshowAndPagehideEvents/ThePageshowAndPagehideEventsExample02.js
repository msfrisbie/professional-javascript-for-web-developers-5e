 (function() {
  let showCount = 0;

  window.addEventListener("load", () => {
    console.log("Load fired");
  });

  window.addEventListener("pageshow", (event) => {
    showCount++;
    console.log(`Show has been fired ${showCount} times.`,
                `Persisted? ${event.persisted}`);
  });
})();
