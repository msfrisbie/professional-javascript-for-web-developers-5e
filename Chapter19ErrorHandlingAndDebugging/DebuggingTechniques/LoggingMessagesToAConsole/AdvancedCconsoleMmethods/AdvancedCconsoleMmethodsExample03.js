console.group("My Group");        // Start a new group
console.log("Starting loop.");    // Output a message
console.groupCollapsed("Loop");   // Start a new collapsed subgroup
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);  // Output a message for each iteration
}
console.groupEnd();               // End the Loop group
console.log("Loop complete.");    // Output a message
console.groupEnd();               // End the MyGroup group
