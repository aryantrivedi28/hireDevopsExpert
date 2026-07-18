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
  title: "White Label DevOps Services | For Agencies & MSPs",
  description:
    "DevOps delivered under your brand, for your clients, a silent delivery partner for agencies and MSPs.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Silent delivery partner",
    line: "We work under NDA, under your brand, your client never sees us.",
  },
  {
    title: "Agency & MSP support",
    line: "DevOps capacity for agencies and MSPs, scaled to project or retainer work.",
  },
  {
    title: "Client delivery standards",
    line: "Delivered to a standard you're comfortable putting your name on.",
  },
  {
    title: "SLA & escalation",
    line: "Clear response expectations and an escalation path agreed upfront.",
  },
  {
    title: "Documentation",
    line: "Documentation handed to you, not locked in our heads.",
  },
];

const DELIVERABLES = [
  "White-label DevOps delivery",
  "Client-ready documentation",
  "SLA & escalation process",
  "NDA & confidentiality agreement",
  "Ongoing support plan",
];

const OUTCOMES = [
  "DevOps capacity without hiring",
  "A partner your client never needs to know about",
  "Reliable delivery you can put your name on",
  "Room to take on more DevOps-heavy client work",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Will our client know you're involved?",
    answer:
      "No, we work under NDA and under your brand. Client-facing communication stays with you unless you want it otherwise.",
  },
  {
    question: "Do you sign an NDA?",
    answer: "Yes, always, before any work starts.",
  },
  {
    question: "Can you work on a single project, or only ongoing retainers?",
    answer: "Both, fixed-scope projects and ongoing retainer support are both options.",
  },
  {
    question: "What kind of DevOps work can you take on for our clients?",
    answer:
      "The same range we offer directly, CI/CD, cloud infrastructure, Kubernetes, monitoring, security, and ongoing support.",
  },
  {
    question: "How do escalations work if something goes wrong?",
    answer: "We agree an escalation path upfront as part of the engagement.",
  },
];

const RELATED_LINKS = [
  { label: "White-Label Kubernetes Services", href: "/white-label-kubernetes-services/" },
  { label: "White-Label CI/CD Services", href: "/white-label-ci-cd-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "White Label DevOps Services",
  serviceType: "White Label DevOps",
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

export default function WhiteLabelDevOpsServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="White Label DevOps Services"
        title="White Label DevOps Services"
        subtitle="DevOps delivered under your brand, for your clients, we stay invisible, you stay the expert. Built for agencies and MSPs who need DevOps capacity without hiring."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact" }}
        secondaryCta={{ label: "How white-label works", href: "#what" }}
      />

      <ProblemValue
        heading="When agencies need a white-label DevOps partner"
        points={[
          "A client needs DevOps work your team doesn't have the bandwidth or skills for.",
          "Hiring a full-time DevOps engineer doesn't make sense for the volume of work.",
          "You need a partner who can stay silent and let you own the client relationship.",
          "Quality and delivery need to be reliable enough to put your name on it.",
        ]}
        closingLine="We deliver the work, you stay the face of the relationship."
      />

      <WhatWeDo
        id="what"
        heading="How white-label works with us"
        items={WHAT_WE_DO_ITEMS}
        className="bg-mist"
      />

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

      <ServiceFAQ id="faq" heading="Questions about white-label DevOps" faqs={FAQS} />

      <RelatedLinks
        heading="Related white-label & agency resources"
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
