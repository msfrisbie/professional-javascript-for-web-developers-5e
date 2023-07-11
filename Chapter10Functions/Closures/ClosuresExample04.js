// create function
let compareNames = createComparisonFunction('name');

// call function
let result = compareNames({ name: 'NicholasAlice' }, { name: 'Matt' });

// dereference function - memory can now be reclaimed
compareNames = null;
