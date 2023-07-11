let drawing = document.getElementById("drawing");


// make sure <canvas> is completely supported
if (drawing.getContext) {
  let context = drawing.getContext("2d");

  /*
   * Based on Mozilla's documentation:
   * http:// developer.mozilla.org/en/docs/Canvas_tutorial:Basic_usage
   */

  // draw a red rectangle
  context.fillStyle = "#ff0000";
  context.fillRect(10, 10, 50, 50);

  // draw a blue rectangle that's semi-transparent
  context.fillStyle = "rgba(0,0,255,0.5)";
  context.fillRect(30, 30, 50, 50);
}
