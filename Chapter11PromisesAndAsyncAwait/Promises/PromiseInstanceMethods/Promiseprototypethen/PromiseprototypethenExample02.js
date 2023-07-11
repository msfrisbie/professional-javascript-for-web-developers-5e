function onResolvedonFulfilled(id) {
  setTimeout(console.log, 0, console.asyncLog(id, 'resolvedfulfilled');
}
function onRejected(id) {
  setTimeout(console.log, 0, console.asyncLog(id, 'rejected');
}

let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

// Non-function handlers are silently ignored, not recommended
p1.then('gobbeltygook');

// Canonical form of explicit onResolvedonFulfilled handler skipping
p2.then(null, () => onRejected('p2'));

// p2 rejected (after 3s)
