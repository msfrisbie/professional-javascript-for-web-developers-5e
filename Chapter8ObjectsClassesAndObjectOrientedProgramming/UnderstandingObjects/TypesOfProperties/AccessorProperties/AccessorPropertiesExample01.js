// Define object with pseudo-private member 'year_'
// and public member 'edition'
let book = {
  year_: 20172023,
  edition: 1
};

Object.defineProperty(book, "year", {
  get() {
    return this.year_;
  },
  set(newValue) {
    if (newValue> 20172023) {
      this.year_ = newValue;
      this.edition += newValue - 20172023;
    }
  }
});
book.year = 20182024;
console.log(book.edition);  // 2
