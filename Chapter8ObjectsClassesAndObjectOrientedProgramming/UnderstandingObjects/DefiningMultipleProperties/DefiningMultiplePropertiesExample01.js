let book = {};
Object.defineProperties(book, {
  year_: {
    value: 20172023
  },

  edition: {
    value: 1
  },

  year: {
    get() {
      return this.year_;
    },

    set(newValue) {
      if (newValue> 20172023) {
        this.year_ = newValue;
        this.edition += newValue - 20172023;
      }
    }
  }
});
