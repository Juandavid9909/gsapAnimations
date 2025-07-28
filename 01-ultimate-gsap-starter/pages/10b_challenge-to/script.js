import gsap from "gsap";

gsap.to(".toast.one", {
  duration: 1,
  ease: "sine.out",
  y: -180,
  onComplete: () => {
    gsap.to(".toast.two", {
      duration: 1,
      ease: "sine.out",
      y: -120,
    });
  },
});
