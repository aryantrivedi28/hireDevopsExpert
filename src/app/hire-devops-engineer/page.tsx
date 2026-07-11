import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import ServiceHero from "@/components/service/ServiceHero";
import ProblemValue from "@/components/service/ProblemValue";
import WhatWeDo from "@/components/service/WhatWeDo";
import EngagementModels from "@/components/service/EngagementModels";
import Comparison from "@/components/service/Comparison";
import Deliverables from "@/components/service/Deliverables";
import Outcomes from "@/components/service/Outcomes";
import CostNote from "@/components/service/CostNote";
import SocialProof from "@/components/home/SocialProof";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import CtaBand from "@/components/service/CtaBand";
import { ENGAGEMENT_MODELS } from "@/lib/engagementModels";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Hire a DevOps Engineer | In-House DevOps Team",
  description:
    "Hire experienced DevOps engineers to set up CI/CD, manage your cloud, and keep production stable, delivered by our in-house team, not a freelancer marketplace.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "CI/CD pipelines",
    line: "Automate build, test, and deploy so releases stop being scary.",
    href: "/ci-cd-pipeline-setup-services/",
  },
  {
    title: "Cloud infrastructure (AWS/Azure/GCP)",
    line: "Set up, secure, and cost-optimise your cloud infrastructure.",
    href: "/aws-devops-services/",
  },
  {
    title: "Kubernetes & Docker",
    line: "Containerise and orchestrate apps that scale under load.",
    href: "/kubernetes-consulting-services/",
  },
  {
    title: "Terraform / Infrastructure as Code",
    line: "Version-controlled, repeatable infrastructure, no more manual setup.",
    href: "/infrastructure-as-code-services/",
  },
  {
    title: "Deployment & release automation",
    line: "Ship releases on a predictable, repeatable process.",
    href: "/devops-automation-services/",
  },
  {
    title: "Monitoring, logging & alerting",
    line: "Know something's wrong before your users tell you.",
    href: "/devops-monitoring-observability-services/",
  },
  {
    title: "Security (DevSecOps basics)",
    line: "Bake security into your pipelines, secrets, and access.",
    href: "/devsecops-services/",
  },
  {
    title: "Cloud cost optimisation",
    line: "Find and fix the spend that's quietly adding up.",
  },
  {
    title: "Ongoing production support",
    line: "Keep production stable with continuous care, not one-off fixes.",
    href: "/managed-devops-services/",
  },
];

const DELIVERABLES = [
  "DevOps audit report",
  "CI/CD pipeline",
  "Staging + production environments",
  "Infrastructure as Code scripts",
  "Monitoring dashboards",
  "Documentation & runbooks",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Faster, safer deployments",
  "Less downtime",
  "Lower cloud cost",
  "Easier scaling",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do I hire one engineer or a team?",
    answer:
      "You work with our in-house team, not a single freelancer. Depending on the engagement, we can also assign a dedicated engineer from that team to focus on your account.",
  },
  {
    question: "Can we start small before committing to a retainer?",
    answer:
      "Yes. Many clients start with a fixed-scope project, a specific pipeline, migration, or audit, before moving to ongoing support if that makes sense.",
  },
  {
    question: "Which clouds do you work with?",
    answer:
      "AWS, Azure, and GCP. We work with whichever cloud you're already on rather than pushing you to switch.",
  },
  {
    question: "Can you fix our existing setup rather than start from scratch?",
    answer:
      "Yes, auditing and cleaning up an existing, undocumented, or fragile setup is one of the most common ways engagements start.",
  },
  {
    question: "Do we own the code, and is there an NDA?",
    answer:
      "Yes to both. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "How to hire a DevOps engineer", href: "/blog/how-to-hire-a-devops-engineer/" },
  { label: "Managed DevOps services", href: "/managed-devops-services/" },
  { label: "DevOps for startups & SaaS", href: "/devops-for-startups/" },
  { label: "DevOps engineer hourly rate & cost", href: "/blog/devops-engineer-hourly-rate-cost/" },
  {
    label: "Dedicated DevOps engineer vs. freelance",
    href: "/blog/dedicated-devops-engineer-vs-freelance/",
  },
  { label: "When to hire a DevOps engineer", href: "/blog/when-to-hire-a-devops-engineer/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire a DevOps Engineer",
  serviceType: "DevOps engineering / hire",
  provider: {
    "@type": "Organization",
    name: "hiredevopsexpert.com",
  },
  areaServed: "IN",
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HireDevOpsEngineerPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Hire a DevOps Engineer"
        title="Hire a DevOps Engineer, an in-house team, not a gamble."
        subtitle="Bring in experienced DevOps engineers to set up your CI/CD, manage your cloud, containerise with Kubernetes, automate with Terraform, and keep production stable, delivered by our in-house team, not a freelancer marketplace."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "How we work", href: "#how" }}
      />

      <ProblemValue
        heading="When do you actually need to hire a DevOps engineer?"
        points={[
          "Deployments are manual and releases are slow or risky.",
          "Cloud bills keep climbing and nobody's sure why.",
          "There's no real monitoring or alerting in place.",
          "The app struggles to scale under load.",
          "Your engineers are stretched thin covering DevOps on the side.",
        ]}
        closingLine="If this sounds familiar, that's usually the point teams decide to hire a DevOps engineer, or bring in a team to cover it."
      />

      <WhatWeDo
        heading="What our DevOps engineers actually do"
        items={WHAT_WE_DO_ITEMS}
        className="bg-mist"
      />

      <EngagementModels
        id="how"
        heading="Ways to work with us"
        subLine="Not sure which fits? Tell us the problem on a free call and we'll recommend one."
        models={ENGAGEMENT_MODELS}
      />

      <Comparison
        heading="Hire full-time vs. work with our in-house team"
        className="bg-mist"
        columns={[
          {
            title: "Hiring a full-time DevOps engineer",
            points: [
              "Recruiting, interviewing, and onboarding takes real time.",
              "You own management, tooling, and backup coverage.",
              "Makes sense when DevOps is a permanent, full-time need.",
            ],
          },
          {
            title: "Working with our in-house team",
            points: [
              "Start in days, not a multi-week hiring cycle.",
              "You get a team, not a single point of failure.",
              "Scale the engagement up or down as your need changes.",
            ],
          },
        ]}
        links={[
          {
            label: "managed DevOps instead of full-time hiring",
            href: "/managed-devops-services/",
          },
          {
            label: "Dedicated DevOps engineer vs. freelancer",
            href: "/blog/dedicated-devops-engineer-vs-freelance/",
          },
        ]}
      />

      <Deliverables
        heading="What you actually receive"
        items={DELIVERABLES}
        note="Exactly which of these you get depends on the engagement, we scope it on the call."
      />

      <Outcomes
        heading="What changes for your business"
        outcomes={OUTCOMES}
        doraNote="DevOps performance is commonly measured with DORA metrics, deployment frequency, lead time for changes, change failure rate, and time to restore service."
        className="bg-mist"
      />

      <CostNote
        heading="What does it cost to hire a DevOps engineer?"
        body="Cost depends on scope, engagement model, and whether you need a dedicated engineer or shared team coverage, hourly, retainer, and project pricing all work differently."
        placeholderNote="Specific hourly rate and salary benchmarks to be confirmed with current, verified data."
        linkLabel="See DevOps engineer hourly rate & cost"
        linkHref="/blog/devops-engineer-hourly-rate-cost/"
      />

      <SocialProof />

      <Section aria-label="Hiring guide">
        <Container className="max-w-[68ch]">
          <p className="text-body text-slate">
            Want a deeper walkthrough first? Read our guide on{" "}
            <Link
              href="/blog/how-to-hire-a-devops-engineer/"
              className="font-medium text-teal-deep underline"
            >
              how to hire a DevOps engineer
            </Link>
            .
          </p>
        </Container>
      </Section>

      <ServiceFAQ id="faq" heading="Questions about hiring a DevOps engineer" faqs={FAQS} />

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
