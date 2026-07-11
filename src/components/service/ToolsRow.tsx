import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ToolsRow({
  heading,
  tools,
  className = "",
}: {
  heading: string;
  tools: string[];
  className?: string;
}) {
  return (
    <Section aria-label={heading} className={className}>
      <Container>
        <h2 className="text-h2 font-semibold text-ink">{heading}</h2>
        {/* VERIFY with user: trim to tools the team actually uses. */}
        <ul className="mt-8 flex flex-wrap gap-3">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-mist bg-off px-4 py-2 text-small font-medium text-ink transition-colors duration-200 hover:border-teal-deep/50 hover:text-teal-deep"
            >
              {tool}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
