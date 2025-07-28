import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    duration: 0.8,
    ease: "power4.out",
    opacity: 1,
    scale: 1,
    y: -120,
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        duration: 0.7,
        ease: "power2.in",
        opacity: 0,
        scale: 0.95,
        y: 0,
        onComplete: () => {
          setTimeout(showToastLoop, 2500);
        },
      });
    },
  });
};

showToastLoop();
