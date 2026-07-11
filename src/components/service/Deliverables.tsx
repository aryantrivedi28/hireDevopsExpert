import Container from "@/components/Container";
import Section from "@/components/Section";

export default function Deliverables({
  heading,
  items,
  note,
  className = "",
}: {
  heading: string;
  items: string[];
  note?: string;
  className?: string;
}) {
  return (
    <Section aria-label={heading} className={className}>
      <Container>
        <h2 className="text-h2 font-semibold text-ink">{heading}</h2>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg border border-mist p-4 text-small text-ink"
            >
              <span aria-hidden="true" className="text-teal-deep">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        {note && <p className="mt-6 text-small text-slate">{note}</p>}
      </Container>
    </Section>
  );
}
