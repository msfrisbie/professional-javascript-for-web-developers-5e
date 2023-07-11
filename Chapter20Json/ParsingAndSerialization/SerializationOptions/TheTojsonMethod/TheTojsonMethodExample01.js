let book = {
  title: "Professional JavaScript",
  authors: [
    "Nicholas C. Zakas",
    "Matt Frisbie"
  ],
  edition: 54,
  year: 202317,
  toJSON: function() {
    return this.title;
  }
};
let jsonText = JSON.stringify(book);
