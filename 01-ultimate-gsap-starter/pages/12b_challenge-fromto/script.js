import gsap from "gsap";

const buttons = document.querySelectorAll(".reactions button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    gsap.fromTo(
      button,
      {
        scale: 1.2,
        y: -60,
      },
      {
        duration: 0.3,
        ease: "power1.inOut",
        opacity: 0.8,
        scale: 1,
        scale: 1.2,
        y: 0,
      }
    );
  });
});
