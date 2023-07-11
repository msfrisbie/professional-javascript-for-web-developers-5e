let observer = new MutationObserver(
    (mutationRecords) => console.log(mutationRecords));

observer.observe(document.body, { attributeFilter: ['foo'] });

// Add whitelisted attribute
document.body.setAttribute('foo', 'bar');

// Add excluded attribute
document.body.setAttribute('baz', 'qux');

// Only a single mutation record is created for the 'foo' attribute mutation
// [MutationRecord]
