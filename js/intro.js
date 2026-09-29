const INTRO_START_DELAY = 520;

export function initIntro() {
  const intro = document.querySelector(".intro");

  if (!intro) {
    return;
  }

  window.setTimeout(() => {
    intro.classList.add("intro--active");
  }, INTRO_START_DELAY);
}
