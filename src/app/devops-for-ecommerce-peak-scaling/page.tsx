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

// HONESTY GUARD: this page must not claim named ecommerce clients, past vertical
// experience, or specific results (e.g. "handled X orders/sec") unless real.
export const metadata: Metadata = {
  title: "DevOps for Ecommerce Peak Scaling | In-House DevOps Team",
  description:
    "Infrastructure that holds up during traffic spikes, autoscaling, caching, and database scaling for ecommerce platforms. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Autoscaling",
    line: "Infrastructure that scales automatically as traffic spikes.",
  },
  {
    title: "Caching",
    line: "Caching layers that reduce load on your backend during peak traffic.",
  },
  {
    title: "Database scaling",
    line: "Database configuration reviewed and scaled for peak load, not average load.",
  },
  {
    title: "CDN & static asset delivery",
    line: "Static content served efficiently so your infrastructure handles what actually needs it.",
  },
];

const DELIVERABLES = [
  "Peak-load infrastructure review",
  "Autoscaling configuration",
  "Caching setup",
  "Database scaling plan",
  "Load testing plan",
  "Documentation",
];

const OUTCOMES = [
  "Infrastructure that holds up under peak traffic",
  "Fewer outages during high-demand periods",
  "A tested plan, not a hope that things will scale",
  "Lower cost during normal traffic, thanks to real autoscaling",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Have you handled ecommerce clients before?",
    answer:
      "We apply the same infrastructure and scaling practices across every client, specific ecommerce client history is shared only when real and with permission.",
    placeholderNote: "Named ecommerce client work or case studies are confirmed on request, none are claimed here.",
  },
  {
    question: "Can you load-test our infrastructure before a big event?",
    answer: "Yes, load testing ahead of a known peak (like a sale event) is a common part of this engagement.",
  },
  {
    question: "How far in advance should we prepare for a peak event?",
    answer: "Ideally several weeks, enough time to test, tune, and fix what load testing reveals.",
  },
  {
    question: "Do we own the infrastructure and configuration you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "DevOps for Startups & SaaS", href: "/devops-for-startups/" },
  { label: "AWS DevOps Services", href: "/aws-devops-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
// PLACEHOLDER: real ecommerce client experience/case studies, do not invent. None claimed here.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DevOps for Ecommerce Peak Scaling",
  serviceType: "Ecommerce Peak Scaling",
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

export default function DevOpsForEcommercePeakScalingPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="DevOps for Ecommerce Peak Scaling"
        title="DevOps for Ecommerce Peak Scaling"
        subtitle="Infrastructure that holds up during traffic spikes, autoscaling, caching, and database scaling. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we focus on", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="What ecommerce platforms need from DevOps"
        points={[
          "Traffic spikes during sales or seasonal events risk outages.",
          "The database becomes a bottleneck under peak load.",
          "Autoscaling exists in theory but hasn't actually been tested.",
          "A single bad peak-traffic event can cost real revenue and trust.",
        ]}
        closingLine="Peak-traffic readiness is something you test for, not hope for."
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

      <ServiceFAQ id="faq" heading="Questions about DevOps for ecommerce" faqs={FAQS} />

      <RelatedLinks heading="Related resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
