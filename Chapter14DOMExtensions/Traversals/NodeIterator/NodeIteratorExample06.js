let div = document.getElementById("div1");
let iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT,
                                           null, false);

let node = iterator.nextNode();
while (node !== null) {
  console.log(node.tagName);     // output the tag name
  node = iterator.nextNode();
}
