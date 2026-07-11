import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import {
  IconUsers,
  IconMessage,
  IconShieldCheck,
  IconClipboardCheck,
} from "@/components/home/icons";

const POINTS = [
  {
    icon: IconUsers,
    title: "One accountable team",
    line: "The same engineers own your setup end to end.",
  },
  {
    icon: IconMessage,
    title: "Talk to the actual engineers",
    line: "Not just an account manager.",
  },
  {
    icon: IconShieldCheck,
    title: "IP + NDA",
    line: "You own everything we build; NDA before any work starts.",
  },
  {
    icon: IconClipboardCheck,
    title: "Clear deliverables",
    line: "You always know exactly what you're getting.",
  },
];

export default function WhyUs() {
  return (
    <Section id="why-us" surface="ink" aria-label="Why choose us">
      <Container>
        <Eyebrow tone="gray" number="n.004">Why in-house</Eyebrow>
        <h2 className="mt-3 text-h2 font-semibold text-off">
          Why an in-house team beats a marketplace
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {POINTS.map(({ icon: Icon, title, line }) => (
            <div key={title} className="rounded-xl border border-line-dark bg-ink-soft p-6">
              <Icon className="h-6 w-6 text-teal" aria-hidden="true" />
              <h3 className="mt-4 text-h3 font-medium text-off">{title}</h3>
              <p className="mt-2 text-small text-off">{line}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
