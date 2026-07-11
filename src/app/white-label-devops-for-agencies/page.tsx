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

export const metadata: Metadata = {
  title: "White Label DevOps Services for Agencies | Partner With Us",
  description:
    "How white-label DevOps partnership actually works, onboarding, communication, and delivery, for agencies and MSPs.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Partner onboarding",
    line: "A short onboarding process to understand your clients, standards, and communication preferences.",
  },
  {
    title: "NDA & confidentiality",
    line: "Signed before any client details or work begin.",
  },
  {
    title: "Delivery under your process",
    line: "We fit into your existing project and communication workflow, not the other way around.",
  },
  {
    title: "Escalation path",
    line: "A clear, agreed process for what happens if something goes wrong.",
  },
];

const DELIVERABLES = [
  "Partner onboarding process",
  "NDA & confidentiality agreement",
  "Agreed communication & escalation process",
  "Client-ready documentation for delivered work",
];

const OUTCOMES = [
  "A DevOps partner that fits into how your agency already works",
  "Confidence that delivery quality matches your standards",
  "Capacity to take on more DevOps-heavy client work",
  "No client-facing risk to your relationship",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "How does onboarding as a partner actually work?",
    answer:
      "We start with a short conversation about your clients, standards, and communication preferences, then sign an NDA before any client work begins.",
  },
  {
    question: "Can we bring you in on a single client project first?",
    answer: "Yes, many partnerships start with a single, fixed-scope project.",
  },
  {
    question: "Will you communicate directly with our clients?",
    answer: "Only if you want that, by default, communication stays with you.",
  },
  {
    question: "What happens if something goes wrong on a client project?",
    answer: "We agree an escalation path upfront as part of onboarding, before any work starts.",
  },
];

const RELATED_LINKS = [
  { label: "White Label DevOps Services", href: "/white-label-devops-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "White Label DevOps Services for Agencies",
  serviceType: "White Label DevOps Partnership",
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

export default function WhiteLabelDevOpsForAgenciesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="White Label DevOps for Agencies"
        title="White Label DevOps Services for Agencies"
        subtitle="How partnership actually works, onboarding, communication, and delivery, for agencies and MSPs who want a reliable DevOps partner behind the scenes."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "How onboarding works", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="What agencies want from a white-label partner"
        points={[
          "A clear, simple onboarding process, not a drawn-out sales cycle.",
          "Confidence that delivery quality won't reflect badly on your agency.",
          "Communication that fits your existing client workflow.",
          "A clear plan for what happens if something goes wrong.",
        ]}
        closingLine="This page is about how the partnership itself works, see our White Label DevOps Services page for the full scope of what we deliver."
      />

      <WhatWeDo id="what" heading="How partnership works" items={WHAT_WE_DO_ITEMS} />

      <EngagementModels
        heading="Ways to work with us"
        subLine="Not sure which fits? Tell us the problem on a free call and we'll recommend one."
        models={ENGAGEMENT_MODELS}
        className="bg-mist"
      />

      <Deliverables
        heading="What you actually receive"
        items={DELIVERABLES}
        note="Exactly which of these you get depends on the partnership, we scope it on the call."
      />

      <Outcomes
        heading="What changes for your agency"
        outcomes={OUTCOMES}
        className="bg-mist"
      />

      <SocialProof />

      <ServiceFAQ id="faq" heading="Questions about partnering with us" faqs={FAQS} />

      <RelatedLinks heading="Related resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Ready to talk about a partnership?"
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
