import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function ArticleCta({
  heading,
  body,
  pillarLabel,
  pillarHref,
  ctaLabel = "Book a DevOps consultation",
  ctaHref = "/contact/",
}: {
  heading: string;
  body: string;
  pillarLabel: string;
  pillarHref: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <Section surface="teal-deep" aria-label="Next steps">
      <Container className="max-w-[68ch]">
        <h2 className="text-h2 font-semibold text-white">{heading}</h2>
        <p className="mt-3 text-body text-off">{body}</p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <Link href={pillarHref} className="text-body font-medium text-white underline">
            {pillarLabel}
          </Link>
          <Button variant="secondary-dark" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
