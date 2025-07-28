import gsap from "gsap";

const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  gsap.from(card, {
    duration: 0.3,
    ease: "power1.out",
  });
  gsap.to(card, {
    duration: 0.5,
    rotateY: 180,
    ease: "power2.out",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.from(card, {
    duration: 0.3,
    ease: "power1.out",
  });
  gsap.to(card, {
    duration: 0.5,
    rotateY: 0,
    ease: "power2.inOut",
  });
});
