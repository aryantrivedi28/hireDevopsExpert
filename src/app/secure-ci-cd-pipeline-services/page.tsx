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
  title: "Secure CI/CD Pipeline Services | In-House DevOps Team",
  description:
    "Security built into your CI/CD pipeline, secret scanning, dependency scanning, and approvals, delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Secret scanning",
    line: "Catch exposed secrets before they're committed or deployed.",
  },
  {
    title: "Dependency scanning",
    line: "Flag known-vulnerable dependencies before they ship.",
  },
  {
    title: "Deployment approvals",
    line: "Required approvals for sensitive environments, built into the pipeline.",
  },
  {
    title: "Artifact signing",
    line: "Sign and verify build artifacts so what ships is what was built.",
  },
];

const DELIVERABLES = [
  "Secret scanning setup",
  "Dependency scanning setup",
  "Approval gates for sensitive deployments",
  "Artifact signing setup",
  "Documentation",
];

const OUTCOMES = [
  "Fewer exposed secrets in your codebase",
  "Vulnerable dependencies caught before they ship",
  "Controlled, auditable deployment approvals",
  "A pipeline that enforces security automatically",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Can you add this to our existing CI/CD pipeline?",
    answer: "Yes, securing an existing pipeline is one of the most common ways this engagement starts.",
  },
  {
    question: "Which CI/CD tools does this work with?",
    answer: "Jenkins, GitHub Actions, GitLab CI, and Bitbucket Pipelines, we keep this tool-agnostic.",
  },
  {
    question: "Is this the same as your DevSecOps offering?",
    answer:
      "This page is scoped to the pipeline itself; our DevSecOps Services page covers the broader security practice.",
  },
  {
    question: "Do we own the pipeline configuration you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "DevSecOps Services", href: "/devsecops-services/" },
  { label: "CI/CD Pipeline Setup Services", href: "/ci-cd-pipeline-setup-services/" },
  { label: "Cloud Security DevOps Services", href: "/cloud-security-devops-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Secure CI/CD Pipeline Services",
  serviceType: "Secure CI/CD",
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

export default function SecureCiCdPipelineServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Secure CI/CD Pipeline Services"
        title="Secure CI/CD Pipeline Services"
        subtitle="Security built into your CI/CD pipeline, secret scanning, dependency scanning, and deployment approvals. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When your pipeline needs security built in"
        points={[
          "Secrets have ended up in code or logs before.",
          "There's no dependency scanning before code ships.",
          "Anyone with pipeline access can deploy to production.",
          "Nobody's verifying that what's deployed matches what was built.",
        ]}
        closingLine="We build security checks into the pipeline itself, not as a separate, skippable step."
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

      <ServiceFAQ id="faq" heading="Questions about secure CI/CD" faqs={FAQS} />

      <RelatedLinks heading="Related security resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
