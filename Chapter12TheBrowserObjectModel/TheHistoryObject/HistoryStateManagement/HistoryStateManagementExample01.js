let stateObject = {foo:"bar"};

history.pushState(stateObject, "My title", "baz.html");
As soon as pushState() executes, the state information is pushed onto the history stack and the browser's address bar changes to reflect the new relative URL. Despite this change, the browser does not make a request to the server, even though querying location.href will return exactly what's in the address bar. The second argument isn't currently used by any implementations and so it is safe to either leave it as an empty string or provide a short title. The first argument should contain all of the information necessary to correctly initialize this page state when necessary. To prevent abuse, the size of the state object is limited, typically to less than 500MB–1MB.
