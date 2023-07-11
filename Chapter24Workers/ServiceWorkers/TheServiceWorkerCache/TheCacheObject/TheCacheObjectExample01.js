const request1 = new Request('https://www.foo.com');
const response1 = new Response('fooResponse');

caches.open('v1')
.then((cache) => {
  cache.put(request1, response1)
  .then(() => cache.keys())
  .then(console.log)   // [Request]
  .then(() => cache.delete(request1))
  .then(() => cache.keys())
  .then(console.log);  // []
});
