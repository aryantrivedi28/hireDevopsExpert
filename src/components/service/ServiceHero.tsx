import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import PipelineMotif from "@/components/PipelineMotif";

type Cta = {
  label: string;
  href: string;
};

export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showMotif = true,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  showMotif?: boolean;
}) {
  return (
    <Section surface="ink-deep">
      <Container
        className={
          showMotif
            ? "grid grid-cols-1 items-center gap-12 md:grid-cols-2"
            : "max-w-[68ch]"
        }
      >
        <div>
          <Eyebrow tone="gray">{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-display font-semibold text-off">{title}</h1>
          <p className="mt-6 max-w-[46ch] text-body text-gray">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            {secondaryCta && (
              <Button variant="secondary-dark" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
        {showMotif && <PipelineMotif />}
      </Container>
    </Section>
  );
}
