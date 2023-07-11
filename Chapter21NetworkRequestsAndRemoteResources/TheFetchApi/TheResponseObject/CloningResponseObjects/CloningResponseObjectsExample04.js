let r = new Response('foobar');

r.clone().text().then(console.log);  // foobar
r.clone().text().then(console.log);  // foobar
r.text().then(console.log);          // foobar
