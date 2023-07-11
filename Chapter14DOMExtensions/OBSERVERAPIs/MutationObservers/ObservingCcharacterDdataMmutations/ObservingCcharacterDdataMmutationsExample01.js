let observer = new MutationObserver(
    (mutationRecords) => console.log(mutationRecords));

// Create an initial text node to observe
document.body.innerText = 'foo';

observer.observe(document.body.firstChild, { characterData: true });

// Identical string assignment
document.body.innerText = 'foo';

// New string assignment
document.body.innerText = 'bar';

// Node setter assignment
document.body.firstChild.textContent = 'baz';

// All three are recorded as mutations
// [MutationRecord, MutationRecord, MutationRecord]
