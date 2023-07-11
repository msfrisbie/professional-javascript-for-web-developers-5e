let fakeCallback = (fakeEventContext, observer) => console.log("Fake event happened!");

let fakeObserver = new FakeObserver(fakeCallback);
