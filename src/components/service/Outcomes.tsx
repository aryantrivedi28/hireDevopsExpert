import Container from "@/components/Container";
import Section from "@/components/Section";

export default function Outcomes({
  heading,
  outcomes,
  doraNote,
  className = "",
}: {
  heading: string;
  outcomes: string[];
  doraNote?: string;
  className?: string;
}) {
  // Outcomes is this site's "one ink block per page" anchor (see the surface-rhythm
  // brief), so its background is fixed regardless of the legacy bg-mist/off utility
  // pages still pass in via `className`, only non-background classes from it apply.
  const extraClassName = className.replace(/\bbg-\S+/g, "").trim();

  return (
    <Section surface="ink" aria-label={heading} className={extraClassName}>
      <Container>
        <h2 className="text-h2 font-semibold text-off">{heading}</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {outcomes.map((outcome) => (
            <li
              key={outcome}
              className="rounded-full border border-line-dark bg-ink-soft px-4 py-2 text-small font-medium text-off transition-colors duration-200 hover:border-teal/60"
            >
              {outcome}
            </li>
          ))}
        </ul>
        {doraNote && <p className="mt-6 max-w-[68ch] text-small text-gray">{doraNote}</p>}
      </Container>
    </Section>
  );
}
