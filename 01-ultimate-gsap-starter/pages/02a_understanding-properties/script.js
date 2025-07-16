import gsap from "gsap";

gsap.to(".box", {
  background: "#FF6F61",
  borderRadius: "50%",
  delay: 0.5,
  ease: "bounce",
  duration: 2,
  opacity: 1,
  scale: 1.25,
  repeat: -1,
  repeatDelay: 2,
  rotation: 360,
  yoyo: true,
});
