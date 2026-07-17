import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

const STEPS = [
  "Understand your setup",
  "Audit cloud/deploy/infra",
  "Suggest a roadmap",
  "Assign your engineer(s)",
  "Implement",
  "Monitor, optimise & support",
];

export default function Process() {
  return (
    <Section id="process" surface="off" aria-label="How it works">
      <Container>
        <Eyebrow tone="teal-deep">Process</Eyebrow>
        <h2 className="mt-3 text-h2 font-semibold text-ink">How it works</h2>
        <p className="mt-2 text-body text-slate">
          It starts with a free technical conversation, not a sales pitch.
        </p>
        <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step}
              className="rounded-xl border border-mist bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-deep/40"
            >
              <span className="font-mono text-mono-label text-teal-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-body font-medium text-ink">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
