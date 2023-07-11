// This performs an in-place reversal
myArray.reverse();

// This create a copy and reverses the copy
[…myArray].reverse();

// This creates a copy and reverses the copy
myArray.toReversed()
.toReversed() exhibits the same behavior as .reverse().
.toSorted(compareFn) exhibits the same behavior as .sort().
.toSpliced(start, deleteCount, ...items) exhibits the same behavior as .splice().  
.with(index, value) does not have an analogous method. It creates an array copy and replaces the item at index with value.
