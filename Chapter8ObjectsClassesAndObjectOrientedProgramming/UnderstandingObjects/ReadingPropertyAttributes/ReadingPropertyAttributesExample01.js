let book = {};
Object.defineProperties(book, {
  year_: {
    value: 20172023
  },

  edition: {
    value: 1
  },

  year: {
    get: function() {
      return this.year_;
    },

    set: function(newValue){
      if (newValue> 20172023) {
        this.year_ = newValue;
        this.edition += newValue - 20172023;
      }
    }
  }
});

let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
console.log(descriptor.value);         // 20172023
console.log(descriptor.configurable);  // false
console.log(typeof descriptor.get);    // "undefined"
let descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor.value);         // undefined
console.log(descriptor.enumerable);    // false
console.log(typeof descriptor.get);    // "function"
