"use client";

import { useEffect, useRef } from "react";
import { branches } from "@/data/branches";

import { scrollToElement } from "@/lib/scroll-to-section";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function highlightBranch(number: number) {
  scrollToElement(`branch-${number}`, { block: "center", highlight: true });
}

function buildPopup(branch: (typeof branches)[number]) {
  const status = branch.accredited ? "Accredited" : "Open daily";
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`;

  return `
    <div class="hero-map-popup">
      <div class="hero-map-popup-header">
        <strong>${escapeHtml(branch.name)}</strong>
        <span class="hero-map-popup-status${branch.accredited ? " accredited" : ""}">${status}</span>
      </div>
      <p class="hero-map-popup-meta">${escapeHtml(branch.hours)}</p>
      <p class="hero-map-popup-meta">${escapeHtml(branch.phone)}</p>
      <div class="hero-map-popup-actions">
        <a class="hero-map-popup-btn call" href="tel:${escapeHtml(branch.phoneHref)}">Call</a>
        <a class="hero-map-popup-btn directions" href="${directionsUrl}" target="_blank" rel="noopener noreferrer">Directions</a>
        <a class="hero-map-popup-btn details" href="#branch-${branch.number}" data-branch-id="${branch.number}">Details</a>
      </div>
    </div>
  `;
}

export default function BranchMap() {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    void import("leaflet").then((leaflet) => {
      if (disposed || !mapElement.current) return;

      const L = leaflet.default;
      const map = L.map(mapElement.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      const bounds = L.latLngBounds([]);
      branches.forEach((branch) => {
        const tone = branch.accredited ? "accredited" : "walkins";
        const iconSize = branch.main ? 36 : 30;
        const icon = L.divIcon({
          className: "hero-map-marker",
          html: `<span class="hero-map-pulse ${tone}${branch.main ? " main" : ""}" aria-hidden="true"><span class="hero-map-dot ${tone}${branch.main ? " main" : ""}"></span></span>`,
          iconSize: [iconSize, iconSize],
          iconAnchor: [iconSize / 2, iconSize / 2],
        });

        const marker = L.marker(branch.coordinates, { icon }).addTo(map);
        marker.bindPopup(buildPopup(branch), { maxWidth: 220, minWidth: 0 });
        bounds.extend(branch.coordinates);
      });

      const onPopupClick = (event: MouseEvent) => {
        const target = (event.target as HTMLElement | null)?.closest(
          "[data-branch-id]",
        ) as HTMLElement | null;
        if (!target) return;
        event.preventDefault();
        highlightBranch(Number(target.dataset.branchId));
      };

      map.getContainer().addEventListener("click", onPopupClick);
      map.on("popupopen", (event) => {
        const content = event.popup
          .getElement()
          ?.querySelector(".leaflet-popup-content");
        if (content instanceof HTMLElement) {
          content.style.width = "auto";
        }
      });
      map.fitBounds(bounds, { padding: [28, 28] });
      const resizeTimer = window.setTimeout(() => map.invalidateSize(), 350);
      const resize = () => map.invalidateSize();
      window.addEventListener("resize", resize);

      cleanup = () => {
        window.clearTimeout(resizeTimer);
        window.removeEventListener("resize", resize);
        map.getContainer().removeEventListener("click", onPopupClick);
        map.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={mapElement}
      id="heroMap"
      aria-label="Map of ARC branch locations"
    />
  );
}
