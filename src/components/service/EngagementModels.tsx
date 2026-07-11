import Container from "@/components/Container";
import Section from "@/components/Section";
import type { EngagementModel } from "@/lib/engagementModels";

export default function EngagementModels({
  heading,
  subLine,
  models,
  id,
  className = "",
}: {
  heading: string;
  subLine?: string;
  models: EngagementModel[];
  id?: string;
  className?: string;
}) {
  return (
    <Section id={id} aria-label={heading} className={className}>
      <Container>
        <h2 className="text-h2 font-semibold text-ink">{heading}</h2>
        {subLine && <p className="mt-2 text-body text-slate">{subLine}</p>}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {models.map((model) => (
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
