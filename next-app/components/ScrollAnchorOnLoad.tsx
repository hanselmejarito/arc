"use client";

import { useEffect } from "react";

/** Smooth-scroll to a hash target on first load, then keep the URL clean. */
export default function ScrollAnchorOnLoad() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: hash.startsWith("branch-") ? "center" : "start",
      });

      if (hash.startsWith("branch-")) {
        target.classList.add("is-highlighted");
        window.setTimeout(() => target.classList.remove("is-highlighted"), 2800);
      }

      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    });
  }, []);

  return null;
}
