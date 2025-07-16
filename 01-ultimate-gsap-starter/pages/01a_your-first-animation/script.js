gsap.to(".card", {
  duration: 5,
  opacity: 1,
  scale: 1,
  onComplete: () => {
    gsap.to(".card", {
      duration: 0.5,
      repeat: -1, // infinite repeat
      y: -20,
      yoyo: true, // reverse the animation on each repeat
    });
  },
});
