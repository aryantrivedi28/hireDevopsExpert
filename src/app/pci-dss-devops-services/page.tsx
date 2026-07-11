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

// HONESTY GUARD: this page must never claim the business is PCI DSS "compliant",
// certified, or audited. It describes technical practices that support PCI DSS
// readiness. Any specific certification claim is a PLACEHOLDER until confirmed real.
export const metadata: Metadata = {
  title: "PCI DSS DevOps Practices | In-House DevOps Team",
  description:
    "Technical practices that support PCI DSS readiness, access control, audit trails, and secure CI/CD. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Access control",
    line: "Least-privilege access, reviewed and documented.",
  },
  {
    title: "Audit trails & logging",
    line: "Activity logged in a way that supports audit and review requirements.",
  },
  {
    title: "Secure CI/CD",
    line: "Secrets management, scanning, and approvals built into your pipeline.",
    href: "/secure-ci-cd-pipeline-services/",
  },
  {
    title: "Vulnerability scanning",
    line: "Regular scanning for known vulnerabilities in dependencies and infrastructure.",
  },
];

const DELIVERABLES = [
  "Access control review",
  "Audit trail / logging setup",
  "Secure CI/CD pipeline",
  "Vulnerability scanning setup",
  "Documentation",
];

const OUTCOMES = [
  "Access and logging practices that support compliance readiness",
  "A secure pipeline with fewer exposed secrets",
  "Vulnerabilities caught earlier",
  "A documented process to show auditors or partners",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Are you PCI DSS certified, or can you certify us?",
    answer:
      "We're not a compliance certification body, and we don't claim PCI DSS certification for ourselves or guarantee it for you. We build the technical practices, access control, logging, secure pipelines, that support your own compliance process.",
    placeholderNote:
      "Any specific certification or attestation claim is only stated if confirmed as real.",
  },
  {
    question: "Can you work alongside our compliance or audit team?",
    answer: "Yes, we can implement the technical controls your compliance process requires.",
  },
  {
    question: "Can you review our existing setup against PCI DSS-relevant practices?",
    answer: "Yes, reviewing access control, logging, and pipeline security is a common starting point.",
  },
  {
    question: "Do we own the configuration and code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "DevSecOps Services", href: "/devsecops-services/" },
  { label: "Cloud Security DevOps Services", href: "/cloud-security-devops-services/" },
  { label: "DevOps for Fintech Startups", href: "/devops-for-fintech-startups/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
// PLACEHOLDER: real certification/attestation status, do not invent. None claimed here.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PCI DSS DevOps Practices",
  serviceType: "PCI DSS-Aligned DevOps Practices",
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

export default function PciDssDevOpsServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="PCI DSS DevOps Practices"
        title="PCI DSS DevOps Practices"
        subtitle="Technical practices that support PCI DSS readiness, access control, audit trails, and secure CI/CD. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="When infrastructure needs to support compliance requirements"
        points={[
          "Access permissions aren't documented or reviewed regularly.",
          "Logging exists, but wouldn't hold up well under audit scrutiny.",
          "Secrets and deployment approvals aren't handled consistently.",
          "You need technical practices in place before an audit or partner review.",
        ]}
        closingLine="We build the technical practices, you and your compliance team own the certification process itself."
      />

      <WhatWeDo id="what" heading="What we do" items={WHAT_WE_DO_ITEMS} />

      <EngagementModels
        heading="Ways to work with us"
        subLine="Not sure which fits? Tell us the problem on a free call and we'll recommend one."
        models={ENGAGEMENT_MODELS}
        className="bg-mist"
      />

      <ToolsRow heading="Tools we work with" tools={TOOLS} />

      <Deliverables
        heading="What you actually receive"
        items={DELIVERABLES}
        note="Exactly which of these you get depends on the engagement, we scope it on the call."
        className="bg-mist"
      />

      <Outcomes
        heading="What changes for your business"
        outcomes={OUTCOMES}
        doraNote="DevOps performance is commonly measured with DORA metrics, deployment frequency, lead time for changes, change failure rate, and time to restore service."
      />

      <SocialProof />

      <ServiceFAQ id="faq" heading="Questions about PCI DSS-aligned DevOps practices" faqs={FAQS} />

      <RelatedLinks heading="Related security & compliance resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
