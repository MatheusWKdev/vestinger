const LENIS_LERP = 0.12;

export function initSmoothScroll() {
  const { Lenis, gsap, ScrollTrigger } = window;

  if (!Lenis || !gsap || !ScrollTrigger) {
    console.error("Lenis, GSAP e ScrollTrigger sao necessarios para o smooth scroll.");
    return null;
  }

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    autoRaf: false,
    anchors: true,
    lerp: LENIS_LERP,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    stopInertiaOnNavigate: true,
    respectReducedMotion: false,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  ScrollTrigger.refresh();

  return lenis;
}
