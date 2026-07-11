import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function FinalCta() {
  return (
    <Section surface="teal-deep" aria-label="Get in touch">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-[24ch] text-h2 font-semibold text-white">
          Tell us what&apos;s breaking. We&apos;ll tell you how we&apos;d fix it.
        </h2>
        <Button variant="secondary-dark" href="/contact/">
          Book a Free Call
        </Button>
      </Container>
    </Section>
  );
}
