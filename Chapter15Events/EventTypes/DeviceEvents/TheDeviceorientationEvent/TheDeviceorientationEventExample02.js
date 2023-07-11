window.addEventListener("deviceorientation", (event) => {
  let arrow = document.getElementById("arrow");
  arrow.style.webkitTransform transform = `rotate(${Math.round(event.alpha)}deg)`;
});
