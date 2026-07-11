import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import ProblemValue from "@/components/service/ProblemValue";
import WhatWeDo from "@/components/service/WhatWeDo";
import EngagementModels from "@/components/service/EngagementModels";
import Deliverables from "@/components/service/Deliverables";
import Outcomes from "@/components/service/Outcomes";
import SocialProof from "@/components/home/SocialProof";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import CtaBand from "@/components/service/CtaBand";
import { ENGAGEMENT_MODELS } from "@/lib/engagementModels";
import { jsonLdScript } from "@/lib/jsonLd";

// HONESTY GUARD: this page must not claim named fintech clients, past vertical
// experience, or results unless real. It describes how general DevOps practices
// apply to fintech's specific concerns (security, audit trails, uptime).
export const metadata: Metadata = {
  title: "DevOps for Fintech Startups | In-House DevOps Team",
  description:
    "How DevOps practices, security, audit trails, and uptime, apply specifically to fintech products. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Security-first infrastructure",
    line: "Access control, secrets management, and vulnerability scanning built in from the start.",
    href: "/devsecops-services/",
  },
  {
    title: "Audit trails & logging",
    line: "Activity logged in a way that supports audit and compliance review.",
  },
  {
    title: "Uptime & reliability",
    line: "Monitoring and incident response built around fintech's low tolerance for downtime.",
    href: "/devops-monitoring-observability-services/",
  },
  {
    title: "Compliance-relevant practices",
    line: "Technical practices that support PCI DSS and similar requirements.",
    href: "/pci-dss-devops-services/",
  },
];

const DELIVERABLES = [
  "Security & access review",
  "Audit trail / logging setup",
  "Monitoring & incident response setup",
  "Compliance-relevant technical controls",
  "Documentation",
];

const OUTCOMES = [
  "Infrastructure built around fintech's security and audit needs",
  "Better uptime for a product where downtime is costly",
  "Technical practices that support compliance work",
  "A documented, defensible setup"
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Have you worked with fintech clients before?",
    answer:
      "We apply the same rigorous DevOps and security practices across every client, specific fintech client history is shared only when real and with permission.",
    placeholderNote: "Named fintech client work or case studies are confirmed on request, none are claimed here.",
  },
  {
    question: "Can you help with PCI DSS-relevant practices specifically?",
    answer: "Yes, see our PCI DSS DevOps practices page for how that works.",
  },
  {
    question: "Do you understand fintech's uptime requirements?",
    answer: "Yes, we build monitoring and incident response with a low tolerance for downtime in mind.",
  },
  {
    question: "Do we own the infrastructure and code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "PCI DSS DevOps Practices", href: "/pci-dss-devops-services/" },
  { label: "DevSecOps Services", href: "/devsecops-services/" },
  { label: "DevOps for Startups & SaaS", href: "/devops-for-startups/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
// PLACEHOLDER: real fintech client experience/case studies, do not invent. None claimed here.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DevOps for Fintech Startups",
  serviceType: "Fintech DevOps",
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

export default function DevOpsForFintechStartupsPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="DevOps for Fintech Startups"
        title="DevOps for Fintech Startups"
        subtitle="How DevOps practices apply specifically to fintech's concerns, security, audit trails, and uptime. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we focus on", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="What fintech products need from DevOps"
        points={[
          "Security and access control matter more than in most products.",
          "Audit trails need to hold up under real scrutiny, not just exist.",
          "Downtime is costly, both financially and to trust.",
          "Compliance requirements shape technical decisions from day one.",
        ]}
        closingLine="Fintech doesn't need different DevOps fundamentals, it needs them applied with more rigour."
      />

      <WhatWeDo id="what" heading="What we focus on" items={WHAT_WE_DO_ITEMS} />

      <EngagementModels
        heading="Ways to work with us"
        subLine="Not sure which fits? Tell us the problem on a free call and we'll recommend one."
        models={ENGAGEMENT_MODELS}
        className="bg-mist"
      />

      <Deliverables
        heading="What you actually receive"
        items={DELIVERABLES}
        note="Exactly which of these you get depends on the engagement, we scope it on the call."
      />

      <Outcomes
        heading="What changes for your business"
        outcomes={OUTCOMES}
        className="bg-mist"
      />

      <SocialProof />

      <ServiceFAQ id="faq" heading="Questions about DevOps for fintech" faqs={FAQS} />

      <RelatedLinks heading="Related security & compliance resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
