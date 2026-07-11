import type { ComponentPropsWithoutRef } from "react";

type SectionSurface = "off" | "mist" | "mist-teal" | "ink" | "ink-deep" | "teal-deep";

const SURFACE_CLASSES: Record<SectionSurface, string> = {
  off: "bg-off",
  mist: "bg-mist",
  "mist-teal": "bg-mist-teal",
  ink: "bg-ink",
  "ink-deep": "bg-ink-deep",
  "teal-deep": "bg-teal-deep",
};

type SectionProps = {
  tight?: boolean;
  surface?: SectionSurface;
} & ComponentPropsWithoutRef<"section">;

export default function Section({
  children,
  tight = false,
  surface,
  className = "",
  ...props
}: SectionProps) {
  const padding = tight ? "py-8 md:py-12" : "py-12 md:py-24";
  const surfaceClass = surface ? SURFACE_CLASSES[surface] : "";

  return (
    <section className={`${padding} ${surfaceClass} ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}
