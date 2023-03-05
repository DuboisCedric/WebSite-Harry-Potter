const animationGreensock = document.querySelector(".animation-greensock");

gsap.from(animationGreensock, {
  y: -450,
  duration: 8,
  ease: "elastic.out(0.6,0.5)",
});

TweenMax.fromTo(
  "#expo img",
  10,
  { scale: 0.1 },
  { scale: 1.5, ease: Linear.easeNone }
);
