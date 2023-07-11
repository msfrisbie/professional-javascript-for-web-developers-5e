navigator.permissions.query({name: "clipboard-read"}).then(result => {
  if (result.state == "granted") {
    /* clipboard access granted */
  }
});
