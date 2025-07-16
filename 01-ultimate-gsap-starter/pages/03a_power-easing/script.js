import gsap from "gsap";

gsap.to(".btn", {
  duration: 0.4,
  ease: "power4.out",
  y: -20,
});

gsap.from(".toast", {
  duration: 1.2,
  ease: "power2.out",
  x: -300,
});

gsap.from(".card", {
  duration: 1,
  ease: "power3.inOut",
  opacity: 0,
  scale: 0.5,
});
