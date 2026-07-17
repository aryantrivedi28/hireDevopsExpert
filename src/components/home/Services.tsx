import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

const SERVICE_CARDS = [
  {
    title: "Hire a DevOps Engineer",
    line: "Bring in an experienced DevOps engineer from our in-house team.",
    href: "/hire-devops-engineer",
  },
  {
    title: "Managed DevOps Services",
    line: "Ongoing infrastructure care on a monthly retainer.",
    href: "/managed-devops-services",
  },
  {
    title: "DevOps for Startups & SaaS",
    line: "DevOps built for how startups and SaaS teams actually ship.",
    href: "/devops-for-startups",
  },
  {
    title: "AWS DevOps Services",
    line: "Set up, secure, and cost-optimise your AWS infrastructure.",
    href: "/aws-devops-services",
  },
  {
    title: "CI/CD Pipeline Setup",
    line: "Automate build, test, and deploy so releases stop being scary.",
    href: "/ci-cd-pipeline-setup-services",
  },
  {
    title: "Infrastructure as Code",
    line: "Version-controlled, repeatable infrastructure from day one.",
    href: "/infrastructure-as-code-services",
  },
  {
    title: "Terraform Consulting",
    line: "Practical Terraform implementation, not just theory.",
    href: "/terraform-consulting-services",
  },
  {
    title: "Kubernetes Consulting",
    line: "Containerise and orchestrate apps that scale under load.",
    href: "/kubernetes-consulting-services",
  },
  {
    title: "DevOps Automation",
    line: "Replace manual scripts and steps with real automation.",
    href: "/devops-automation-services",
  },
  {
    title: "DevSecOps",
    line: "Bake security into your pipelines, secrets, and access.",
    href: "/devsecops-services",
  },
  {
    title: "Monitoring & Observability",
    line: "Know something's wrong before your users tell you.",
    href: "/devops-monitoring-observability-services/",
  },
  {
    title: "Cloud Migration",
    line: "Move to the cloud (or between clouds) without the downtime drama.",
    href: "/cloud-migration-devops-services",
  },
  {
    title: "White-Label DevOps",
    line: "We deliver DevOps under your brand for your clients.",
    href: "/white-label-devops-services",
  },
];

export default function Services() {
  return (
    <Section id="services" surface="mist" aria-label="Services">
      <Container>
        <Eyebrow tone="teal-deep">Services</Eyebrow>
        <h2 className="mt-3 text-h2 font-semibold text-ink">What we do</h2>
        <p className="mt-2 max-w-[68ch] text-body text-slate">
          This covers everything from{" "}
          <Link href="/managed-devops-services" className="text-teal-deep underline">
            managed DevOps services
          </Link>{" "}
          to{" "}
          <Link href="/aws-devops-services" className="text-teal-deep underline">
            AWS DevOps services
          </Link>
          , Kubernetes, Terraform, and more, one in-house team covering the full
          stack.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {SERVICE_CARDS.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="flex flex-col rounded-xl border border-mist bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-deep/60"
            >
              <h3 className="text-h3 font-medium text-ink">{service.title}</h3>
              <p className="mt-2 flex-1 text-small text-slate">{service.line}</p>
              <span className="mt-4 text-small font-medium text-teal-deep">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
