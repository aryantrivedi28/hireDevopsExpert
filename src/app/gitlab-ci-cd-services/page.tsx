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
  title: "GitLab CI/CD Services | In-House DevOps Team",
  description:
    "Pipelines built natively in GitLab CI, runners, YAML pipelines, and container registry integration, by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Pipeline authoring",
    line: "GitLab CI YAML pipelines written for your build, test, and deploy process.",
  },
  {
    title: "Runners",
    line: "GitLab-hosted or self-hosted runners, configured for your workload.",
  },
  {
    title: "Container registry integration",
    line: "GitLab's built-in container registry wired into your deployment pipeline.",
  },
  {
    title: "Deploy keys & environments",
    line: "Deployment environments and access configured properly across stages.",
  },
];

const DELIVERABLES = [
  "GitLab CI pipeline (.gitlab-ci.yml)",
  "Runner configuration",
  "Container registry integration",
  "Environment & deploy key setup",
  "Documentation",
];

const OUTCOMES = [
  "Automated, consistent deployments in GitLab",
  "Less manual release work",
  "A pipeline the team can read and maintain",
  "Faster feedback on every change",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Can you add CI/CD to a GitLab repo with nothing set up yet?",
    answer: "Yes, this is one of the most common ways this engagement starts.",
  },
  {
    question: "Do you use GitLab-hosted or self-hosted runners?",
    answer: "Either, we'll recommend based on your build needs, cost, and infrastructure constraints.",
  },
  {
    question: "Can you migrate us from Jenkins or GitHub Actions?",
    answer: "Yes, migrating an existing pipeline to GitLab CI is a common request.",
  },
  {
    question: "Do we own the pipeline configuration you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "CI/CD Pipeline Setup Services", href: "/ci-cd-pipeline-setup-services/" },
  { label: "Jenkins pipeline setup", href: "/jenkins-pipeline-setup/" },
  { label: "GitHub Actions setup service", href: "/github-actions-setup-service/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GitLab CI/CD Services",
  serviceType: "GitLab CI/CD Setup",
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

export default function GitLabCiCdServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="GitLab CI/CD Services"
        title="GitLab CI/CD Services"
        subtitle="Pipelines built natively in GitLab CI, runners, YAML pipelines, and container registry integration. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When your GitLab CI setup needs work"
        points={[
          "There's no CI/CD in the repo yet, and deployments are manual.",
          "Pipeline YAML has grown messy and hard to maintain.",
          "Runners are misconfigured or inconsistent across projects.",
          "Container registry and deployment aren't properly wired together.",
        ]}
        closingLine="We build GitLab pipelines your team can actually read, trust, and maintain."
      />

      <WhatWeDo id="what" heading="What we do" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about GitLab CI/CD" faqs={FAQS} />

      <RelatedLinks heading="Related CI/CD resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
