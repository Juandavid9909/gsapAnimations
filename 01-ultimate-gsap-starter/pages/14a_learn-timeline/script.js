import gsap from "gsap";

const timeline = gsap.timeline();

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  timeline.from(
    card,
    {
      duration: 0.5,
      ease: "power2.out",
      opacity: 0,
    },
    "+=0.1"
  );
});
