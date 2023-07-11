let r = new Response('foobar');

r.text().then(console.log);  // foobar

r.text().then(console.log);
// TypeError: Failed to execute 'text' on 'Response': body stream is locked
