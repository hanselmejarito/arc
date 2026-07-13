"use client";

import { useEffect } from "react";

type LegacyClientProps = {
  scripts: string[];
};

function executeScript(source: string) {
  const script = document.createElement("script");
  script.textContent = source;
  document.body.appendChild(script);
}

export default function LegacyClient({ scripts }: LegacyClientProps) {
  useEffect(() => {
    if (document.body.dataset.arcBootstrapped === "true") return;

    document.body.dataset.arcBootstrapped = "true";
    scripts.slice(0, 1).forEach(executeScript);

    const runMapScripts = () => scripts.slice(1).forEach(executeScript);
    const existingLeaflet = document.querySelector<HTMLScriptElement>(
      'script[data-arc-leaflet="true"]',
    );

    if (existingLeaflet) {
      if ("L" in window) runMapScripts();
      else existingLeaflet.addEventListener("load", runMapScripts, { once: true });
      return;
    }

    const leaflet = document.createElement("script");
    leaflet.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    leaflet.integrity =
      "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    leaflet.crossOrigin = "";
    leaflet.dataset.arcLeaflet = "true";
    leaflet.addEventListener("load", runMapScripts, { once: true });
    document.body.appendChild(leaflet);
  }, [scripts]);

  return null;
}
