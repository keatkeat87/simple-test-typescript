(() => {
  // pnp:C:\keatkeat\my-projects\HTML & CSS Practice\Simple Test (TypeScript)\index.ts
  var container = document.querySelector(".container");
  var io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log("entry", entry);
      console.log("container rect", container.getBoundingClientRect());
      console.log("entry.target rect", entry.target.getBoundingClientRect());
    });
  }, {
    root: container,
    threshold: [0]
  });
  var boxes = Array.from(document.querySelectorAll(".box"));
  var box = boxes[9];
  io.observe(box);
})();
