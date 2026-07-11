import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ProblemValue({
  heading,
  points,
  closingLine,
}: {
  heading: string;
  points: string[];
  closingLine?: string;
}) {
  return (
    <Section aria-label={heading}>
      <Container className="max-w-[68ch]">
        <h2 className="text-h2 font-semibold text-ink">{heading}</h2>
        <ul className="mt-6 flex flex-col gap-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-body text-slate">
              <span aria-hidden="true" className="text-teal-deep">
                •
              </span>
              {point}
            </li>
          ))}
        </ul>
        {closingLine && <p className="mt-6 text-body font-medium text-ink">{closingLine}</p>}
      </Container>
    </Section>
  );
}
