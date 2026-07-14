export type ScrollToSectionOptions = {
  block?: ScrollLogicalPosition;
  highlight?: boolean;
};

export function scrollToElement(id: string, options?: ScrollToSectionOptions) {
  const target = document.getElementById(id);
  if (!target) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  target.scrollIntoView({
    behavior: prefersReduced ? "auto" : "smooth",
    block: options?.block ?? "start",
  });

  if (options?.highlight) {
    target.classList.add("is-highlighted");
    window.setTimeout(() => target.classList.remove("is-highlighted"), 2800);
  }

  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${window.location.search}`,
  );
}

export function scrollToSection(
  event: { preventDefault: () => void },
  id: string,
  options?: ScrollToSectionOptions,
) {
  event.preventDefault();
  scrollToElement(id, options);
}
