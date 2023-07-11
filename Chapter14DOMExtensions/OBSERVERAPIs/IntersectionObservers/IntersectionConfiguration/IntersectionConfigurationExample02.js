document.body.innerHTML = `
  <div style="height: 100px; width: 100px; ">Foo</div>
  <div style="height: 100px; width: 100px; opacity: 0;">Bar</div>
`;

let observer = new IntersectionObserver(
  (entries) => console.log(`isVisible: ${entries.map((x) => x.isVisible)}`),
  {
    trackVisibility: true,
    delay: 1000
  }
);
[...document.querySelectorAll("div")].map((el) => observer.observe(el));

// isVisible: [true,false]
Calculating effective visibility is extremely expensive compared to cartesian intersection. The delay value is used so that the browser has to perform this calculation as infrequently as possible, and it should be set to the maximum amount that your application can tolerate.
