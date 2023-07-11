
const text = "abcdeazcde";

console.log(text.match(/a(.)c/));
// ['abc', 'b', index: 0, input: 'abcdeazcde', groups: undefined]

console.log(text.match(/a(.)c/g));
// ['abc', 'azc']

console.log([...text.matchAll(/a(.)c/g)]);
// [
//.   ['abc', 'b', index: 0, input: 'abcdeazcde', groups: undefined],
//.   ['azc', 'z', index: 5, input: 'abcdeazcde', groups: undefined]
// ]
