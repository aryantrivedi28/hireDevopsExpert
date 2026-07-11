import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

const AUDIENCES = [
  "SaaS founders",
  "CTOs",
  "Agencies",
  "Startups",
  "Product teams",
  "E-commerce platforms",
  "App development companies",
];

export default function WhoWeHelp() {
  return (
    <Section surface="mist" aria-label="Who we help">
      <Container>
        <Eyebrow tone="teal-deep" number="n.006">Audience</Eyebrow>
        <h2 className="mt-3 text-h2 font-semibold text-ink">Who we help</h2>
        <p className="mt-2 max-w-[68ch] text-body text-slate">
          From early-stage builds to scaling platforms, see how we approach{" "}
          <Link href="/devops-for-startups/" className="text-teal-deep underline">
            DevOps for startups
          </Link>{" "}
          and the teams around them.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {AUDIENCES.map((audience) => (
            <li
              key={audience}
              className="rounded-full border border-mist bg-off px-4 py-2 text-small font-medium text-ink transition-colors duration-200 hover:border-teal-deep/50 hover:text-teal-deep"
            >
              {audience}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
