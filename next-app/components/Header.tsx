"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Services", "#services"],
  ["What To Do", "#what-to-do"],
  ["Branches", "#branches"],
  ["FAQ", "#faq"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [open]);

  return (
    <>
      <a href="#what-to-do" className="emergency-bar">
        <span className="pulse" aria-hidden="true" />
        Animal bite? Wash the wound immediately with soap &amp; water for 15
        minutes — then go to the nearest ARC branch NOW.
        <span className="pulse" aria-hidden="true" />
      </a>
      <header ref={headerRef}>
        <div className="header-inner">
          <a href="#top" className="logo-wrap" aria-label="ARC home">
            <Image
              src="/arc_logo.jpg"
              alt="ARC Anti Rabies Vaccine Clinic"
              className="logo-img"
              width={52}
              height={52}
              priority
            />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mainNav"
            onClick={() => setOpen((current) => !current)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <nav id="mainNav" className={open ? "open" : undefined}>
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
