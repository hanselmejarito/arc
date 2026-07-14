"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type ScrollLinkProps = ComponentPropsWithoutRef<"a"> & {
  targetId: string;
  block?: ScrollLogicalPosition;
  highlight?: boolean;
};

export default function ScrollLink({
  targetId,
  href,
  block = "start",
  highlight = false,
  onClick,
  ...props
}: ScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(event, targetId, { block, highlight });
    onClick?.(event);
  };

  return (
    <a href={href ?? `#${targetId}`} onClick={handleClick} {...props} />
  );
}
