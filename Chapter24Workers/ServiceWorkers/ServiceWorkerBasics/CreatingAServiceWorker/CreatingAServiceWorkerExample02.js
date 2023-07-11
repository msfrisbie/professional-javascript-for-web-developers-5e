// empty service worker script
MAIN.JS
// Successfully registers a service worker, resolves
navigator.serviceWorker.register('./emptyServiceWorker.js')
  .then(console.log, console.error);

// ServiceWorkerRegistration { … }


// Attempts to register service worker from nonexistent file, rejects
navigator.serviceWorker.register('./doesNotExist.js')
  .then(console.log, console.error);

// TypeError: Failed to register a ServiceWorker:
// A bad HTTP response code (404) was received when fetching the script.
