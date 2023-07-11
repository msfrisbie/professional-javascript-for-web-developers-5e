const eventSource = new EventSource("https://api.example.com/events");
eventSource.onmessage = event => {
  console.log(event.data);
};
eventSource.onerror = error => {
  console.log("Error:", error);
};
