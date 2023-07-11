function htmlEscape(text) {
  return text.replace(/[<>"&]/g, function(match, pos, originalText) {
    switch(match) {
      case "<":
        return "<";
      case ">":
        return ">";
      case "&":
        return "&";
      case "\"":
        return """;
    }
  });
}

console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
// "<p class="greeting">Hello world!</p>"
