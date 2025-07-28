import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      delay: index * 0.1,
      duration: 0.6,
      ease: "sine.inOut",
      repeat: -1,
      scaleY: 1.6,
      yoyo: true,
    }
  );
});
