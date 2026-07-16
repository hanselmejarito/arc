"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.01, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delayMs
    ? { transitionDelay: `${delayMs}ms` }
    : undefined;

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
