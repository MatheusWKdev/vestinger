export function initSelectedWork() {
  const stage = document.querySelector("#helena-martins .project-showcase__stage");
  const { gsap, ScrollTrigger } = window;

  if (!stage || !gsap || !ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const media = gsap.matchMedia();

  media.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        id: "helena-depth",
        trigger: stage,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    // Total travel, centered around the static composition at scroll progress 0.5.
    const planes = [
      [".project-showcase__hero-plane", -22],
      [".project-showcase__visual--contact", -32],
      [".project-showcase__visual--about", 28],
      [".project-showcase__visual--contact-detail", -36],
      [".project-showcase__visual--philosophy", -40],
      [".project-showcase__mobile-group", -28],
      [".project-showcase__title span:first-child", -22],
      [".project-showcase__title span:last-child", 16],
      [".project-showcase__plane--left", -44],
      [".project-showcase__plane--rear", 36],
      [".project-showcase__plane--right", -40],
      [".project-showcase__organic", -34],
      [".project-showcase__arc", 30],
      [".project-showcase__meta--primary", -8],
      [".project-showcase__editorial-line", -12],
      [".project-showcase__link", -8],
    ];

    planes.forEach(([selector, travel]) => {
      const element = stage.querySelector(selector);
      if (element) {
        timeline.fromTo(element, { y: -travel / 2 }, {
          y: travel / 2,
          immediateRender: false,
        }, 0);
      }
    });
  });

  // The existing Lenis already drives ScrollTrigger.update and GSAP's ticker.
  // Refresh after fonts and lazy screenshots settle; no additional scroll loop.
  const images = [...stage.querySelectorAll("img")];
  Promise.all([
    document.fonts.ready,
    ...images.map((image) => image.decode().catch(() => {})),
  ]).then(() => ScrollTrigger.refresh());
}

export function initPizzariaWork() {
  const stage = document.querySelector("#forno-nero .pizzaria-showcase__stage");
  const { gsap, ScrollTrigger } = window;

  if (!stage || !gsap || !ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();

  media.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        id: "pizzaria-depth",
        trigger: stage,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    // Keep the approved static arrangement at the middle of the scroll range.
    const planes = [
      [".pizzaria-showcase__hero-plane", -22],
      [".pizzaria-showcase__surface--nero", 34],
      [".pizzaria-showcase__surface--craft", -26],
      [".pizzaria-showcase__surface--location", 30],
      [".pizzaria-showcase__surface--fire", -28],
      [".pizzaria-showcase__mobile", 26],
      [".pizzaria-showcase__title span:first-child", 18],
      [".pizzaria-showcase__title span:last-child", -16],
      [".pizzaria-showcase__ellipse", -40],
      [".pizzaria-showcase__ember-plane", 36],
      [".pizzaria-showcase__meta--primary", 6],
      [".pizzaria-showcase__phrase", -8],
      [".pizzaria-showcase__footer .project-showcase__link", 6],
    ];

    planes.forEach(([selector, travel]) => {
      const element = stage.querySelector(selector);
      if (element) {
        timeline.fromTo(element, { y: -travel / 2 }, {
          y: travel / 2,
          immediateRender: false,
        }, 0);
      }
    });
  });

  // Reuse the current Lenis/GSAP integration without another scroll handler.
  Promise.all([
    document.fonts.ready,
    ...[...stage.querySelectorAll("img")].map((image) => image.decode().catch(() => {})),
  ]).then(() => ScrollTrigger.refresh());
}

export function initPulsoWork() {
  const stage = document.querySelector("#pulso .pulso-showcase__stage");
  const { gsap, ScrollTrigger } = window;

  if (!stage || !gsap || !ScrollTrigger) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();

  media.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        id: "pulso-depth",
        trigger: stage,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    // Total travel stays centered on the static composition at progress 0.5.
    const planes = [
      [".pulso-showcase__hero-plane", -26],
      [".pulso-showcase__surface--vertical", 40],
      [".pulso-showcase__surface--modalities", -34],
      [".pulso-showcase__surface--plan", 28],
      [".pulso-showcase__surface--contact", -30],
      [".pulso-showcase__mobile", -24],
      [".pulso-showcase__title", 22],
      [".pulso-showcase__structure", 44],
      [".pulso-showcase__bar", -38],
      [".pulso-showcase__meta--primary", -6],
      [".pulso-showcase__phrase", 8],
      [".pulso-showcase__footer .project-showcase__link", -6],
    ];

    planes.forEach(([selector, travel]) => {
      const element = stage.querySelector(selector);
      if (element) {
        timeline.fromTo(element, { y: -travel / 2 }, {
          y: travel / 2,
          immediateRender: false,
        }, 0);
      }
    });
  });

  // The existing Lenis owns scrolling; only refresh after image/font layout.
  Promise.all([
    document.fonts.ready,
    ...[...stage.querySelectorAll("img")].map((image) => image.decode().catch(() => {})),
  ]).then(() => ScrollTrigger.refresh());
}
