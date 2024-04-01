const mask = document.querySelector("#div-mask-back");
const tl = gsap.timeline();

tl.to(mask, {
  "--m1": "20%",
  delay: 2,
  duration: 0.5,
  ease: "back.out(2)"
}).to(mask, {
  "--m2": "30%",
  duration: 0.5,
  delay: 0.5,
  ease: "back.out(2)"
});

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);

  gsap.to(mask, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.3,
    ease: "sine.out"
  });
});
