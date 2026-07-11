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
  title: "DevSecOps Services | In-House DevOps Team",
  description:
    "Security built into your pipelines, secrets, and access, secure CI/CD, IAM review, and vulnerability scanning by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Secure CI/CD pipelines",
    line: "Security checks built directly into your deployment pipeline.",
    href: "/secure-ci-cd-pipeline-services/",
  },
  {
    title: "SAST & DAST scanning",
    line: "Static and dynamic application security testing wired into your workflow.",
  },
  {
    title: "Secret scanning & management",
    line: "Catch exposed secrets before they ship, and manage them properly going forward.",
  },
  {
    title: "IAM & access review",
    line: "Least-privilege access, reviewed and tightened.",
  },
  {
    title: "Vulnerability scanning",
    line: "Dependencies and infrastructure scanned for known vulnerabilities.",
  },
  {
    title: "Policy as code",
    line: "Security and compliance rules enforced automatically, not manually checked.",
  },
  {
    title: "Cloud security",
    line: "Cloud configuration reviewed against common security misconfigurations.",
    href: "/cloud-security-devops-services/",
  },
];

const DELIVERABLES = [
  "Security audit findings",
  "Secure CI/CD pipeline",
  "Secret scanning setup",
  "IAM/access review report",
  "Vulnerability scanning setup",
  "Policy-as-code rules",
  "Documentation & runbooks",
];

const OUTCOMES = [
  "Security issues caught before they ship",
  "Fewer exposed secrets and over-broad permissions",
  "A documented, repeatable security process",
  "A pipeline that enforces security automatically",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Is this a full compliance certification service (SOC 2, ISO 27001, PCI DSS)?",
    answer:
      "We help build the technical practices that support compliance readiness, secure pipelines, access control, and vulnerability management.",
    placeholderNote:
      "We do not claim specific compliance certifications or attestations (SOC 2, ISO 27001, PCI DSS, etc.) unless confirmed as real.",
  },
  {
    question: "Do you run SAST and DAST scanning?",
    answer: "Yes, wired into your CI/CD pipeline so issues are caught before code ships.",
  },
  {
    question: "Can you review and tighten our AWS/cloud IAM permissions?",
    answer: "Yes, reviewing and cleaning up over-broad access is a common starting point.",
  },
  {
    question: "Can you fix an existing, insecure CI/CD setup?",
    answer: "Yes, securing an existing pipeline is one of the most common ways this engagement starts.",
  },
  {
    question: "Do we own the security configuration and code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "secure CI/CD pipeline services", href: "/secure-ci-cd-pipeline-services/" },
  { label: "Cloud Security DevOps Services", href: "/cloud-security-devops-services/" },
  { label: "PCI DSS DevOps services", href: "/pci-dss-devops-services/" },
  { label: "DevOps for Fintech Startups", href: "/devops-for-fintech-startups/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
// PLACEHOLDER: real compliance certifications/attestations, do not invent. Omitted entirely
// from this schema until the user confirms specific, real certifications.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DevSecOps Services",
  serviceType: "DevSecOps",
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

export default function DevSecOpsServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="DevSecOps Services"
        title="DevSecOps Services"
        subtitle="Security built into your pipelines, secrets, and access, not bolted on afterward. Delivered by our in-house team, with process and honesty over compliance theatre."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When security needs to catch up with DevOps"
        points={[
          "Security review happens after code ships, if at all.",
          "Secrets are stored in plaintext, in code, or shared insecurely.",
          "There's no vulnerability scanning in the pipeline.",
          "Access permissions have grown wider than anyone intended.",
        ]}
        closingLine="DevSecOps means security checks happen automatically, as part of how you already ship, not as a separate, painful step."
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

      <ServiceFAQ id="faq" heading="Questions about our DevSecOps services" faqs={FAQS} />

      <RelatedLinks
        heading="Related security & compliance resources"
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
