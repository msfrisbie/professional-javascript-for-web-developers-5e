self.onmessage = ({data, source}) => {
  console.log('service worker heard:', data);

  source.postMessage('bar');
};
MAIN.JS
navigator.serviceWorker.onmessage = ({data}) => {
  console.log('client heard:', data);
};

navigator.serviceWorker.register('./serviceWorker.js')
.then(() => {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage('foo');
  }
});

// service worker heard: foo
// client heard: bar
