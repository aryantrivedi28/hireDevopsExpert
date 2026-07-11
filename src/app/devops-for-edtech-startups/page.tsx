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

// HONESTY GUARD: this page must not claim named edtech clients, past vertical
// experience, or specific results unless real.
export const metadata: Metadata = {
  title: "DevOps for EdTech Startups | In-House DevOps Team",
  description:
    "Infrastructure built for concurrency, video, and exam-time load, for edtech platforms. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Concurrency handling",
    line: "Infrastructure that holds up when many students hit the platform at once, class start times, exam windows.",
  },
  {
    title: "Video infrastructure",
    line: "Reliable delivery for live and recorded video content.",
  },
  {
    title: "Autoscaling for predictable spikes",
    line: "Scale ahead of known high-load periods like exams or live sessions.",
  },
  {
    title: "Data privacy basics",
    line: "Access control and data handling practices appropriate for student data.",
  },
];

const DELIVERABLES = [
  "Concurrency & load review",
  "Autoscaling configuration",
  "Video infrastructure review",
  "Access control review",
  "Documentation",
];

const OUTCOMES = [
  "A platform that holds up during class-start and exam-time spikes",
  "Reliable video delivery",
  "Infrastructure tested ahead of known high-load events",
  "Sensible data access practices for student data",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Have you worked with edtech clients before?",
    answer:
      "We apply the same infrastructure and scaling practices across every client, specific edtech client history is shared only when real and with permission.",
    placeholderNote: "Named edtech client work or case studies are confirmed on request, none are claimed here.",
  },
  {
    question: "Can you prepare our platform for an exam period specifically?",
    answer: "Yes, load testing and scaling ahead of a known high-concurrency event is a common part of this engagement.",
  },
  {
    question: "Do you handle video streaming infrastructure?",
    answer: "Yes, as part of a broader infrastructure review, we'll assess your current video delivery setup.",
  },
  {
    question: "Do we own the infrastructure and configuration you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "DevOps for Startups & SaaS", href: "/devops-for-startups/" },
  { label: "Monitoring & Observability Services", href: "/devops-monitoring-observability-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
// PLACEHOLDER: real edtech client experience/case studies, do not invent. None claimed here.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DevOps for EdTech Startups",
  serviceType: "EdTech DevOps",
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

export default function DevOpsForEdtechStartupsPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="DevOps for EdTech Startups"
        title="DevOps for EdTech Startups"
        subtitle="Infrastructure built for concurrency, video, and exam-time load. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we focus on", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="What edtech platforms need from DevOps"
        points={[
          "Class start times and exam windows create sharp, predictable traffic spikes.",
          "Video delivery needs to be reliable, not just present.",
          "Student data requires sensible, defensible access practices.",
          "A platform outage during an exam has real consequences.",
        ]}
        closingLine="Edtech's traffic patterns are predictable, that means you can prepare for them, not just react."
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

      <ServiceFAQ id="faq" heading="Questions about DevOps for edtech" faqs={FAQS} />

      <RelatedLinks heading="Related resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
