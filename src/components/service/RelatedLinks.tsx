import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function RelatedLinks({
  heading,
  links,
  className = "",
}: {
  heading: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <Section aria-label={heading} className={className}>
      <Container>
        <h2 className="text-h2 font-semibold text-ink">{heading}</h2>
        <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-body font-medium text-teal-deep underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
