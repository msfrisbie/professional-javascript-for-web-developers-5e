let obj = { name: “Matt” };
let finalizationRegistry = new FinalizationRegistry((heldValue) => {
  console.log(`Cleaning up object: ${heldValue}`);
});

finalizationRegistry.register(obj, “My held value”);

obj = null;

// After GC:
// “Cleaning up object: My held value”
