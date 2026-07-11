import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

const MODELS = [
  {
    title: "Fixed-scope project",
    line: "A defined setup with a clear deliverable and timeline.",
  },
  {
    title: "Managed support (retainer)",
    line: "We keep your infrastructure healthy month to month.",
  },
  {
    title: "Hourly / as-needed",
    line: "Short, specific tasks without a long commitment.",
  },
  {
    title: "Dedicated engineer",
    line: "An engineer from our team focused on your account.",
  },
  {
    title: "White-label for agencies",
    line: "We deliver DevOps under your brand for your clients.",
  },
];

export default function EngagementModels() {
  return (
    <Section id="how-we-work" surface="off" aria-label="Ways to work with us">
      <Container>
        <Eyebrow tone="teal-deep" number="n.003">How we work</Eyebrow>
        <h2 className="mt-3 text-h2 font-semibold text-ink">Ways to work with us</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {MODELS.map((model) => (
            <div key={model.title} className="rounded-xl border border-mist bg-white p-6">
              <h3 className="text-h3 font-medium text-ink">{model.title}</h3>
              <p className="mt-2 text-small text-slate">{model.line}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
