fetch('https://foo.com')
  .then((response) => {
    console.log(response);
  });

// Response {
//   body: (…)
//   bodyUsed: false
//   headers: Headers {}
//   ok: true
//   redirected: false
//   status: 200
//   statusText: "OK"
//   type: "basic"
//   url: "https://foo.com/"
// }
