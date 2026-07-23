import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function Svg({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconSyringe({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14.5 3.5 20.5 9.5" />
      <path d="M16.5 5.5 8 14l-1.5 5.5L12 18l8.5-8.5" />
      <path d="M9 15l-3.5 3.5" />
      <path d="M18 7.5 16.5 6" />
    </Svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function IconDrop({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10z" />
    </Svg>
  );
}

export function IconBandage({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="9" width="18" height="6" rx="3" />
      <path d="M10 9v6M14 9v6" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconPill({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m10.5 7.5 6 6" />
      <path d="M8.5 15.5A3.5 3.5 0 0 1 4 11l5-5a3.5 3.5 0 0 1 5 5l-5.5 4.5z" />
      <path d="M15.5 8.5A3.5 3.5 0 0 1 20 13l-5 5a3.5 3.5 0 0 1-5-5l5.5-4.5z" />
    </Svg>
  );
}

export function IconClipboard({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4.5h6v2H9z" />
      <path d="M9 11h6M9 15h4" />
    </Svg>
  );
}

export function IconFlask({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 3h6" />
      <path d="M10 3v6l-4.5 8.5A2 2 0 0 0 7.2 21h9.6a2 2 0 0 0 1.7-3.5L14 9V3" />
      <path d="M8.5 14h7" />
    </Svg>
  );
}
