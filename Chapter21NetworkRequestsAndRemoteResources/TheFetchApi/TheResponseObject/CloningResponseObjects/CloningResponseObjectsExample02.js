let r = new Response('foobar');
r.clone();
// No error

r.text();  // sets the bodyUsed field to false

r.clone();
// TypeError: Failed to execute 'clone' on 'Response': Response body is already used
