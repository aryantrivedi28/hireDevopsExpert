import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function CostNote({
  heading,
  body,
  placeholderNote,
  linkLabel,
  linkHref,
  className = "",
}: {
  heading: string;
  body: string;
  placeholderNote?: string;
  linkLabel: string;
  linkHref: string;
  className?: string;
}) {
  return (
    <Section aria-label={heading} className={className}>
      <Container className="max-w-[68ch]">
        <h2 className="text-h2 font-semibold text-ink">{heading}</h2>
        <p className="mt-4 text-body text-slate">{body}</p>
        {placeholderNote && <p className="mt-2 italic text-slate">{placeholderNote}</p>}
        <Link href={linkHref} className="mt-4 inline-block text-body font-medium text-teal-deep underline">
          {linkLabel}
        </Link>
      </Container>
    </Section>
  );
}
