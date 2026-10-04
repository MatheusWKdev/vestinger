const PIN_SCROLL_SCREENS = 3.5;
const SCRUB_SMOOTHING = 0.8;
const TRANSFER_DURATION = 1.35;
const TRANSFER_OFFSET = 0.95;

function transferLine(timeline, largeLine, smallLine, startAt) {
  timeline
    .to(largeLine, {
      autoAlpha: 0.12,
      clipPath: "inset(100% 0% 0% 100%)",
      y: "0.55rem",
      scale: 0.97,
      duration: TRANSFER_DURATION,
      ease: "none",
    }, startAt)
    .to(smallLine, {
      autoAlpha: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      scale: 1,
      duration: TRANSFER_DURATION,
      ease: "none",
    }, startAt);
}

export function initManifesto() {
  const manifesto = document.querySelector(".manifesto");

  if (!manifesto) {
    return;
  }

  const { gsap, ScrollTrigger } = window;

  if (!gsap || !ScrollTrigger) {
    console.error("GSAP e ScrollTrigger sao necessarios para a secao Manifesto.");
    return;
  }

  const candle = manifesto.querySelector(".manifesto__candle");
  const largeLines = gsap.utils.toArray(".manifesto__type-slot--large .manifesto__phrase", manifesto);
  const smallLines = gsap.utils.toArray(".manifesto__type-slot--small .manifesto__phrase", manifesto);

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(largeLines, {
    autoAlpha: 0,
    clipPath: "inset(100% 0% 0% 0%)",
    y: "0.7rem",
    scale: 0.985,
    transformOrigin: "right bottom",
  });

  gsap.set(smallLines, {
    autoAlpha: 0,
    clipPath: "inset(0% 100% 100% 0%)",
    y: "0.4rem",
    scale: 0.9,
    transformOrigin: "left top",
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: manifesto,
      start: "top top",
      end: () => `+=${Math.round(window.innerHeight * PIN_SCROLL_SCREENS)}`,
      pin: true,
      pinSpacing: true,
      scrub: SCRUB_SMOOTHING,
      invalidateOnRefresh: true,
    },
  });

  timeline
    .addLabel("candle")
    .to({}, { duration: 0.08 })
    .to(candle, {
      autoAlpha: 1,
      y: 0,
      duration: 0.72,
      ease: "power2.out",
    })
    .to({}, { duration: 0.12 });

  timeline
    .to(largeLines, {
      autoAlpha: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      scale: 1,
      duration: 0.72,
      stagger: 0.07,
      ease: "power2.out",
    })
    .to({}, { duration: 0.2 });

  const transferStart = timeline.duration();

  largeLines.forEach((largeLine, index) => {
    transferLine(
      timeline,
      largeLine,
      smallLines[index],
      transferStart + index * TRANSFER_OFFSET,
    );
  });

  timeline.to({}, { duration: 0.3 });
}
