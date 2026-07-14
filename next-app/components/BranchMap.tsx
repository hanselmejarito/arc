"use client";

import { useEffect, useRef } from "react";
import { branches } from "@/data/branches";

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
        const size = branch.main ? 18 : 14;
        const icon = L.divIcon({
          className: "hero-map-marker",
          html: `<div class="hero-map-dot${branch.main ? " main" : ""}"></div>`,
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });

        const marker = L.marker(branch.coordinates, { icon }).addTo(map);
        marker.bindPopup(
          `<div class="hero-map-popup"><strong>${branch.name}</strong><a href="#branches">View branch details →</a></div>`,
        );
        bounds.extend(branch.coordinates);
      });

      map.fitBounds(bounds, { padding: [28, 28] });
      const resizeTimer = window.setTimeout(() => map.invalidateSize(), 350);
      const resize = () => map.invalidateSize();
      window.addEventListener("resize", resize);

      cleanup = () => {
        window.clearTimeout(resizeTimer);
        window.removeEventListener("resize", resize);
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
