function onResolvedonFulfilled(id) {
  setTimeout(console.log, 0, console.asyncLog(id, 'resolvedfulfilled');
}
function onRejected(id) {
  setTimeout(console.log, 0, console.asyncLog(id, 'rejected');
}

let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

p1.then(() => onResolvedonFulfilled('p1'),
        () => onRejected('p1'));
p2.then(() => onResolvedonFulfilled('p2'),
        () => onRejected('p2'));

// (after 3s)
// p1 resolvedfulfilled
// p2 rejected
