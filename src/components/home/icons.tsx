import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconAlertTriangle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4 2 20h20L12 4Z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function IconClockX(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconCoin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 15V9c0-1.5 1-2 3-2s3 .5 3 2-1 1.5-3 2-3 .5-3 2 1 2 3 2 3-.5 3-2" />
    </svg>
  );
}

export function IconBellOff(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l16 16" />
      <path d="M17 17H4s2-2 2-7a6 6 0 0 1 1.3-3.7" />
      <path d="M10 4.2A6 6 0 0 1 18 10c0 2.4.5 4 1 5" />
      <path d="M9.5 20a2.5 2.5 0 0 0 4.6 0" />
    </svg>
  );
}

export function IconTrendingDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6l7 7 4-4 7 7" />
      <path d="M21 10v6h-6" />
    </svg>
  );
}

export function IconFolderX(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6Z" />
      <path d="M9.5 12.5l5 5M14.5 12.5l-5 5" />
    </svg>
  );
}

export function IconUserX(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="4" />
      <path d="M2 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
      <path d="M17 8l4 4M21 8l-4 4" />
    </svg>
  );
}

export function IconHourglass(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h12" />
      <path d="M6 21h12" />
      <path d="M7 3c0 5 4 6.5 5 8-1 1.5-5 3-5 8" />
      <path d="M17 3c0 5-4 6.5-5 8 1 1.5 5 3 5 8" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6" />
      <path d="M16 5.5c1.7.3 3 1.8 3 3.5s-1.3 3.2-3 3.5" />
      <path d="M18.5 15c2 .5 3.5 2.4 3.5 5.5" />
    </svg>
  );
}

export function IconMessage(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H8l-4 4V5Z" />
    </svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l8 3v6c0 4.5-3.4 7.5-8 9-4.6-1.5-8-4.5-8-9V6l8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconClipboardCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="4" width="12" height="17" rx="1.5" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9.5 13l2 2 3.5-3.5" />
    </svg>
  );
}
