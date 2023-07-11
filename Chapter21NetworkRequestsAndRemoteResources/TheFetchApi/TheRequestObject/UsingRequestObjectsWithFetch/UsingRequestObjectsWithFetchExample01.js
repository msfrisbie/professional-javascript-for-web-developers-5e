let r = new Request('https://foo.com');

// send GET request to foo.com
fetch(r);

// send POST request to foo.com
fetch(r, { method: 'POST' });
