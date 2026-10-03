const INTRO_START_DELAY = 300;
const INTRO_HOLD_DURATION = 800;
const INTRO_EXIT_DURATION = 1150;
const INTRO_FORMATION_FALLBACK = 750;

export function initIntro() {
  const intro = document.querySelector(".intro");

  if (!intro) {
    return;
  }

  const sword = intro.querySelector(".intro__sword");
  let formationFinished = false;
  let formationFallbackId;

  const finishIntro = () => {
    if (formationFinished) {
      return;
    }

    formationFinished = true;
    window.clearTimeout(formationFallbackId);

    window.setTimeout(() => {
      intro.classList.add("intro--exiting");

      window.setTimeout(() => {
        intro.classList.add("intro--complete");
      }, INTRO_EXIT_DURATION);
    }, INTRO_HOLD_DURATION);
  };

  sword?.addEventListener("animationend", finishIntro, { once: true });

  window.setTimeout(() => {
    intro.classList.add("intro--active");

    formationFallbackId = window.setTimeout(
      finishIntro,
      INTRO_FORMATION_FALLBACK,
    );
  }, INTRO_START_DELAY);
}
