import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";

type ComparisonColumn = {
  title: string;
  points: string[];
};

export default function Comparison({
  heading,
  columns,
  links,
  className = "",
}: {
  heading: string;
  columns: ComparisonColumn[];
  links?: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <Section aria-label={heading} className={className}>
      <Container>
        <h2 className="text-h2 font-semibold text-ink">{heading}</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {columns.map((column) => (
            <div key={column.title} className="rounded-xl border border-mist bg-white p-6">
              <h3 className="text-h3 font-medium text-ink">{column.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.points.map((point) => (
                  <li key={point} className="flex gap-3 text-small text-slate">
                    <span aria-hidden="true" className="text-teal-deep">
                      •
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {links && links.length > 0 && (
          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-x-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-small font-medium text-teal-deep underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
}
