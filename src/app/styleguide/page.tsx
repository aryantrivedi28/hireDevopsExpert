import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

const COLORS = [
  { name: "ink", hex: "#1C2B3A", className: "bg-ink", usage: "Primary. Headers, footer, dark sections." },
  { name: "slate", hex: "#3E5C76", className: "bg-slate", usage: "Secondary. Body/supporting text." },
  { name: "teal", hex: "#4E8378", className: "bg-teal", usage: "Decorative accent only, fails AA on small text." },
  { name: "teal-deep", hex: "#3C6E63", className: "bg-teal-deep", usage: "Interactive, buttons & links (AA-safe with white)." },
  { name: "gray", hex: "#8896A3", className: "bg-gray", usage: "Borders, dividers, subtext on dark only." },
  { name: "mist", hex: "#EEF2F5", className: "bg-mist", usage: "Section fills." },
  { name: "off", hex: "#F7F9FA", className: "bg-off", usage: "Page background." },
  { name: "ink-deep", hex: "#16222E", className: "bg-ink-deep", usage: "Derived. Hero + footer anchor." },
  { name: "ink-soft", hex: "#243447", className: "bg-ink-soft", usage: "Derived. Cards on dark sections." },
  { name: "mist-teal", hex: "#E9EFEC", className: "bg-mist-teal", usage: "Derived. Alternate light fill." },
];

const TYPE_SCALE = [
  { role: "Display / H1", className: "text-display font-semibold", spec: "clamp ~34-60px / 1.15 / 600" },
  { role: "H2", className: "text-h2 font-semibold", spec: "30px / 1.18 / 600" },
  { role: "H3", className: "text-h3 font-medium", spec: "19px / 1.25 / 500" },
  { role: "Body", className: "text-body font-normal max-w-[68ch]", spec: "17px / 1.7 / 400 · measure ≤ 68ch" },
  { role: "Small / caption", className: "text-small font-normal", spec: "14px / 1.5 / 400" },
  { role: "Mono label", className: "font-mono text-mono-label tracking-[0.12em] uppercase font-medium", spec: "13px / letter-spacing .12em / 500" },
];

const SPACING_SCALE = [4, 8, 12, 16, 24, 32, 48, 64, 96];

export default function StyleguidePage() {
  return (
    <Container>
      <Section>
        <Eyebrow>Dev-only route, delete before launch</Eyebrow>
        <h1 className="mt-2 text-display font-semibold text-ink">Style guide</h1>
        <p className="mt-4 max-w-[68ch] text-body text-slate">
          Visual reference for the brand tokens wired up in Part 1: colors, type scale,
          spacing scale, and button variants. Compare swatches against the approved brand
          guideline hex values before moving on to Part 2.
        </p>
      </Section>

      <Section tight className="border-t border-gray/30">
        <h2 className="text-h2 font-semibold text-ink">Colors</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {COLORS.map((color) => (
            <div key={color.name} className="rounded-xl border border-gray/30 p-4">
              <div className={`h-20 w-full rounded-lg border border-gray/20 ${color.className}`} />
              <div className="mt-3">
                <p className="font-mono text-mono-label tracking-[0.12em] uppercase text-ink">
                  {color.name}
                </p>
                <p className="mt-1 text-small text-slate">{color.hex}</p>
                <p className="mt-1 text-small text-slate">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tight className="border-t border-gray/30">
        <h2 className="text-h2 font-semibold text-ink">Type scale</h2>
        <div className="mt-8 flex flex-col gap-8">
          {TYPE_SCALE.map((row) => (
            <div key={row.role} className="border-b border-gray/20 pb-8 last:border-b-0">
              <p className="font-mono text-mono-label tracking-[0.12em] uppercase text-teal-deep">
                {row.role}, {row.spec}
              </p>
              <p className={`mt-2 text-ink ${row.className}`}>
                Hire DevOps Expert, production-ready infrastructure, delivered.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tight className="border-t border-gray/30">
        <h2 className="text-h2 font-semibold text-ink">Spacing scale (4px base)</h2>
        <div className="mt-8 flex flex-col gap-3">
          {SPACING_SCALE.map((px) => (
            <div key={px} className="flex items-center gap-4">
              <span className="w-12 font-mono text-small text-slate">{px}px</span>
              <div className="h-4 rounded-sm bg-teal-deep" style={{ width: `${px}px` }} />
            </div>
          ))}
        </div>
      </Section>

      <Section tight className="border-t border-gray/30">
        <h2 className="text-h2 font-semibold text-ink">Buttons</h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="primary" href="/styleguide">
            Primary link
          </Button>
          <Button variant="secondary" href="/styleguide">
            Secondary link
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
        <p className="mt-4 text-small text-slate">
          Tab to each control to confirm the teal focus-visible outline is visible.
        </p>
      </Section>
    </Container>
  );
}
