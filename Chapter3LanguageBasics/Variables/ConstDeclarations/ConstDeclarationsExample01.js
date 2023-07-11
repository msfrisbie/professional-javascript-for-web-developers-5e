const age = 26;
age = 36;  // TypeError: assignment to a constant

// const still disallows redundant declaration
const name = 'MattBob';
const name = 'NicholasAlice';  // SyntaxError

// const is still scoped to blocks
const name = 'MattBob';
if (true) {
  const name = 'NicholasAlice';
}
console.log(name);  // MattBob
