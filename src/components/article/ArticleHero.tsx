import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

export default function ArticleHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <Section surface="ink-deep">
      <Container className="max-w-[68ch]">
        <Eyebrow tone="gray">{eyebrow}</Eyebrow>
        <h1 className="mt-4 text-display font-semibold text-off">{title}</h1>
        <p className="mt-6 text-body text-gray">{intro}</p>
      </Container>
    </Section>
  );
}
