import type { ReactNode } from "react";

type EyebrowTone = "slate" | "teal-deep" | "gray";

const TONE_CLASSES: Record<EyebrowTone, string> = {
  slate: "text-slate",
  "teal-deep": "text-teal-deep",
  // "gray" is the only brand token with AA-safe contrast on the dark `ink` background
  // (4.77:1), teal/teal-deep both fail there. Use this tone on dark sections only.
  gray: "text-gray",
};

export default function Eyebrow({
  children,
  tone = "slate",
  number,
  className = "",
}: {
  children: ReactNode;
  tone?: EyebrowTone;
  number?: string;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-mono-label tracking-[0.12em] uppercase ${TONE_CLASSES[tone]} ${className}`.trim()}
    >
      {number && <span className="opacity-70">{number} · </span>}
      {children}
    </p>
  );
}
