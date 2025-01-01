
const { animate, stagger } = Motion

animate("li", { y: [5, 0, 5] },
  { duration: 2, repeat: Infinity, ease: "easeInOut", delay: stagger(0.1, { ease: [.32, .23, .4, .9] }) })