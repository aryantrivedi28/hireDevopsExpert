import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import ProblemValue from "@/components/service/ProblemValue";
import WhatWeDo from "@/components/service/WhatWeDo";
import EngagementModels from "@/components/service/EngagementModels";
import ToolsRow from "@/components/service/ToolsRow";
import Deliverables from "@/components/service/Deliverables";
import Outcomes from "@/components/service/Outcomes";
import SocialProof from "@/components/home/SocialProof";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import CtaBand from "@/components/service/CtaBand";
import { ENGAGEMENT_MODELS } from "@/lib/engagementModels";
import { TOOLS } from "@/lib/tools";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "CI/CD Pipeline Setup Services | In-House DevOps Team",
  description:
    "Automated build, test, and deployment pipelines, tool-agnostic CI/CD setup delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Jenkins pipelines",
    line: "CI/CD pipelines built and maintained in Jenkins.",
    href: "/jenkins-pipeline-setup/",
  },
  {
    title: "GitHub Actions",
    line: "Workflows and automated deployments using GitHub Actions.",
    href: "/github-actions-setup-service/",
  },
  {
    title: "GitLab CI/CD",
    line: "Pipelines built natively in GitLab CI.",
    href: "/gitlab-ci-cd-services/",
  },
  {
    title: "Bitbucket Pipelines",
    line: "CI/CD set up for teams already on Bitbucket.",
  },
  {
    title: "Automated testing",
    line: "Tests wired into the pipeline so broken code doesn't ship.",
  },
  {
    title: "Environments & rollback",
    line: "Staging and production environments with a real rollback path.",
  },
  {
    title: "Secure CI/CD",
    line: "Secrets, scanning, and approvals built into the pipeline, not bolted on.",
    href: "/secure-ci-cd-pipeline-services/",
  },
];

const DELIVERABLES = [
  "CI/CD pipeline",
  "Automated test integration",
  "Staging + production environments",
  "Rollback process",
  "Deployment documentation",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Faster releases",
  "Fewer failed deployments",
  "Less manual, risky release work",
  "A repeatable release process",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Which CI/CD tool do you use?",
    answer:
      "Whichever fits your team, Jenkins, GitHub Actions, GitLab CI, or Bitbucket Pipelines. We keep this tool-agnostic and build around what you already use.",
  },
  {
    question: "Can you add CI/CD to an existing, messy deployment process?",
    answer: "Yes, that's one of the most common starting points.",
  },
  {
    question: "Do you include automated testing in the pipeline?",
    answer:
      "Yes, where tests exist we wire them in; where they don't, we can help establish a baseline.",
  },
  {
    question: "Is this built specifically for SaaS products?",
    answer: "It works well for SaaS, and we tailor it to your release cadence either way.",
  },
  {
    question: "Do we own the pipeline configuration?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Jenkins pipeline setup", href: "/jenkins-pipeline-setup/" },
  { label: "GitHub Actions setup service", href: "/github-actions-setup-service/" },
  { label: "GitLab CI/CD Services", href: "/gitlab-ci-cd-services/" },
  { label: "secure CI/CD pipeline", href: "/secure-ci-cd-pipeline-services/" },
  {
    label: "How to set up a CI/CD pipeline for SaaS products",
    href: "/blog/how-to-set-up-ci-cd-pipeline-for-saas/",
  },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CI/CD Pipeline Setup Services",
  serviceType: "CI/CD Pipeline Setup",
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

export default function CiCdPipelineSetupServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="CI/CD Pipeline Setup Services"
        title="CI/CD Pipeline Setup Services"
        subtitle="Automated build, test, and deployment pipelines, tool-agnostic, built around how your team already works. Delivered by our in-house team, not a single freelancer."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we set up", href: "#what" }}
      />

      <ProblemValue
        heading="Signs your release process needs work"
        points={[
          "Deployments are still manual, or depend on one person.",
          "Releases are slow, risky, or happen outside working hours to be safe.",
          "There's no automated testing in the deployment process.",
          "Rolling back a bad release is stressful, not routine.",
        ]}
        closingLine="A proper CI/CD pipeline turns releases from an event into a non-event."
      />

      <WhatWeDo id="what" heading="What we set up" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

      <EngagementModels
        heading="Ways to work with us"
        subLine="Not sure which fits? Tell us the problem on a free call and we'll recommend one."
        models={ENGAGEMENT_MODELS}
      />

      <ToolsRow heading="Tools we work with" tools={TOOLS} className="bg-mist" />

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

      <SocialProof />

      <ServiceFAQ id="faq" heading="Questions about CI/CD pipeline setup" faqs={FAQS} />

      <RelatedLinks
        heading="Related CI/CD resources & services"
        links={RELATED_LINKS}
        className="bg-mist"
      />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
