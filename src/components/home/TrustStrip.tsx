import Container from "@/components/Container";
import Section from "@/components/Section";

const ITEMS = [
  "Works across AWS, Azure & GCP",
  "One accountable dedicated team",
  "NDA before we start",
  "You own all code",
];

export default function TrustStrip() {
  return (
    <Section tight surface="ink" className="border-t border-line-dark">
      <Container>
        {/* PLACEHOLDER: replace/add real proof (client logos, real metrics) when available */}
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-center">
          {ITEMS.map((item) => (
            <li key={item} className="text-small font-medium text-gray">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
