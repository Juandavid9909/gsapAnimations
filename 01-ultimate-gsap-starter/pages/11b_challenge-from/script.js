import gsap from "gsap";

const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    duration: 0.3,
    ease: "power1.out",
    rotateY: 180,
  });

  gsap.from(card, {
    duration: 0.3,
    ease: "power1.out",
    immediateRender: false,
    rotateY: 0,
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    duration: 0.3,
    ease: "power1.out",
    rotateY: 0,
  });

  gsap.from(card, {
    duration: 0.3,
    ease: "power1.out",
    immediateRender: false,
    rotateY: 180,
  });
});
