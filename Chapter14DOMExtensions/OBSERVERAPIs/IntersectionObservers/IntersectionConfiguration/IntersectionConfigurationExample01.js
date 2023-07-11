document.body.innerHTML = `
  <div style="margin-top:150vh; height: 100px;"></div>
`;

let observer = new IntersectionObserver(
  () => console.log("Intersection!"), 
  {
    threshold: [0, 0.5, 1]
  }
);

observer.observe(document.querySelector("div"));
