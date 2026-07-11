import Container from "@/components/Container";
import Section from "@/components/Section";
import { TOOLS } from "@/lib/tools";

export default function Tools() {
  return (
    <Section surface="mist-teal" aria-label="Tools we work with">
      <Container>
        <h2 className="text-h2 font-semibold text-ink">Tools we work with</h2>
        {/* VERIFY with the user: trim this list to only tools the team actually works with. */}
        <ul className="mt-8 flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
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
