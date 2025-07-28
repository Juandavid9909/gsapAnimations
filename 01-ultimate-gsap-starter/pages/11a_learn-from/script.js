import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  delay: 0.2,
  duration: 0.6,
  ease: "power4.out",
  opacity: 0,
  scale: 0.95,
  stagger: 0.2,
  y: 60,
});

repeat.addEventListener("click", () => {
  animation.restart();
});
