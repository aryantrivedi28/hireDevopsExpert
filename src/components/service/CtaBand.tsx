import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function CtaBand({
  heading,
  ctaLabel,
  ctaHref,
}: {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <Section surface="teal-deep" aria-label="Get in touch">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-[24ch] text-h2 font-semibold text-white">{heading}</h2>
        <Button variant="secondary-dark" href={ctaHref}>
          {ctaLabel}
        </Button>
      </Container>
    </Section>
  );
}
