import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import PipelineMotif from "@/components/PipelineMotif";

export default function Hero() {
  return (
    <Section surface="ink-deep">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <Eyebrow tone="gray">HIRE A DEVOPS EXPERT</Eyebrow>
          <h1 className="mt-4 text-display font-semibold text-off">
            We set up and run your DevOps, so your developers can focus on shipping.
          </h1>
          <p className="mt-6 max-w-[46ch] text-body text-gray">
            We build your CI/CD pipelines, manage your AWS, Azure, or GCP 
            infrastructure, and keep production stable—with the same engineers 
            on your account throughout.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/">Get a free infrastructure audit</Button>
            <Button variant="secondary-dark" href="#services">
              See our services
            </Button>
          </div>
          <p className="mt-4 text-small text-gray">
            Looking for one person on your team?{" "}
            <Link href="/hire-devops-engineer/" className="font-medium text-off underline">
              Hire a DevOps engineer
            </Link>{" "}
            instead.
          </p>
        </div>
        <PipelineMotif />
      </Container>
    </Section>
  );
}