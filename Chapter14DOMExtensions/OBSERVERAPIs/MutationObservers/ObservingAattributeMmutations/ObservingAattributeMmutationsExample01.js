let observer = new MutationObserver(
    (mutationRecords) => console.log(mutationRecords));

observer.observe(document.body, { attributes: true });

// Add attribute
document.body.setAttribute('foo', 'bar');

// Modify existing attribute
document.body.setAttribute('foo', 'baz');

// Remove attribute
document.body.removeAttribute('foo');

// All three are recorded as mutations
// [MutationRecord, MutationRecord, MutationRecord]
