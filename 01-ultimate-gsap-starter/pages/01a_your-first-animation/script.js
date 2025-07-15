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

    gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  },
});
