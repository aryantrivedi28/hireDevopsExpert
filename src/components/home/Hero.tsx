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
          <Eyebrow tone="gray">Hire a DevOps Expert</Eyebrow>
          <h1 className="mt-4 text-display font-semibold text-off">
            Hire a DevOps Expert, done-for-you by an in-house team.
          </h1>
          <p className="mt-6 max-w-[46ch] text-body text-gray">
            Our in-house DevOps team sets up, automates, and manages your
            infrastructure, CI/CD, AWS/Azure/GCP, Kubernetes, and monitoring, as
            an extension of your engineering team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/">Book a DevOps consultation</Button>
            <Button variant="secondary-dark" href="#services">
              See our services
            </Button>
          </div>
          <p className="mt-4 text-small text-gray">
            Looking for one person on your team?{" "}
            <Link href="/hire-devops-engineer/" className="font-medium text-off underline">
              hire DevOps engineer
            </Link>{" "}
            support instead.
          </p>
        </div>
        <PipelineMotif />
      </Container>
    </Section>
  );
}
