const container = document.querySelector(".container")!;
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log("entry", entry);
      console.log("container rect", container.getBoundingClientRect());
      console.log("entry.target rect", entry.target.getBoundingClientRect());
    });
  },
  {
    root: container,
    threshold: [0],
  }
);

const boxes = Array.from(document.querySelectorAll(".box"));
const box = boxes[9];
io.observe(box);
