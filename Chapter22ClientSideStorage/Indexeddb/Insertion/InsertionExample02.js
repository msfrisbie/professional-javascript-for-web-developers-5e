// where users is an array of new users
let request,
    requests = [];
for (let user of users) {
  request = store.add(user);
  request.onerror = () => {
    // handle error
  };
  request.onsuccess = () => {
    // handle success
  };
  requests.push(request);
}
