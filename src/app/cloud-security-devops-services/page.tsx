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
  title: "Cloud Security DevOps Services | In-House DevOps Team",
  description:
    "IAM review, network security, and misconfiguration cleanup for your cloud infrastructure, delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "IAM & access review",
    line: "Least-privilege access, reviewed and tightened across your cloud accounts.",
  },
  {
    title: "Network security",
    line: "VPCs, security groups, and firewalls reviewed for common misconfigurations.",
  },
  {
    title: "Logging & audit trails",
    line: "Cloud activity logged in a way that's actually useful during an incident.",
  },
  {
    title: "Secrets management",
    line: "Secrets stored and rotated properly, not hard-coded or shared insecurely.",
  },
];

const DELIVERABLES = [
  "Cloud security review findings",
  "IAM/access cleanup",
  "Network security configuration review",
  "Logging & audit trail setup",
  "Secrets management setup",
  "Documentation",
];

const OUTCOMES = [
  "Fewer over-broad permissions",
  "A cloud environment that's easier to audit",
  "Reduced exposure from common misconfigurations",
  "A repeatable process for staying secure over time",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Which clouds do you review for security?",
    answer: "AWS, Azure, and GCP, whichever you're on.",
  },
  {
    question: "Do you guarantee our infrastructure is secure afterward?",
    answer:
      "No security review can guarantee zero risk, we'll give you an honest picture of what we find and fix, not a blanket guarantee.",
  },
  {
    question: "Can you review an existing, unaudited environment?",
    answer: "Yes, this is one of the most common ways this engagement starts.",
  },
  {
    question: "Do we own the configuration changes you make?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "DevSecOps Services", href: "/devsecops-services/" },
  { label: "Secure CI/CD Pipeline Services", href: "/secure-ci-cd-pipeline-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloud Security DevOps Services",
  serviceType: "Cloud Security",
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

export default function CloudSecurityDevOpsServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Cloud Security DevOps Services"
        title="Cloud Security DevOps Services"
        subtitle="IAM review, network security, and misconfiguration cleanup for your cloud infrastructure. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When cloud security needs a closer look"
        points={[
          "IAM permissions have grown wider than anyone intended.",
          "Security groups and network rules were never fully reviewed.",
          "Logging exists, but nobody's confident it would help during an incident.",
          "Secrets are stored or shared in ways that make you uneasy.",
        ]}
        closingLine="We review what's actually configured, not what's assumed to be configured."
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

      <ServiceFAQ id="faq" heading="Questions about cloud security" faqs={FAQS} />

      <RelatedLinks heading="Related security resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
