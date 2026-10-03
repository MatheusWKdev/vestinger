const HERO_REVEAL_DELAY = 180;

function whenIntroCompletes(intro, callback) {
  if (!intro || intro.classList.contains("intro--complete")) {
    callback();
    return;
  }

  const observer = new MutationObserver(() => {
    if (!intro.classList.contains("intro--complete")) {
      return;
    }

    observer.disconnect();
    callback();
  });

  observer.observe(intro, {
    attributes: true,
    attributeFilter: ["class"],
  });
}

export function initHero() {
  const hero = document.querySelector(".hero");

  if (!hero) {
    return;
  }

  const intro = document.querySelector(".intro");

  whenIntroCompletes(intro, () => {
    window.setTimeout(() => {
      hero.classList.add("hero--revealed");
    }, HERO_REVEAL_DELAY);
  });
}
