fetch("http://www.somewhere-else.com/page/")
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Request was unsuccessful: " + response.status);
    }
  });
