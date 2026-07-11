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

// NOTE: GPU/AI infrastructure tooling and pricing move fast, copy stays general
// (no specific vendor, instance type, or pricing stated as settled fact). PLACEHOLDER:
// confirm the team's real GPU infrastructure delivery experience before this page goes live.
export const metadata: Metadata = {
  title: "GPU Infrastructure Setup Service | In-House DevOps Team",
  description:
    "Provision and right-size GPU infrastructure for training or inference. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "GPU provisioning",
    line: "GPU infrastructure provisioned on the cloud provider that fits your workload.",
  },
  {
    title: "Right-sizing",
    line: "Match GPU capacity to actual training or inference demand, not a guess.",
  },
  {
    title: "Autoscaling",
    line: "Scale GPU capacity with demand instead of paying for idle hardware.",
  },
  {
    title: "Cost & utilisation monitoring",
    line: "Visibility into GPU spend and utilisation, not just uptime.",
  },
];

const DELIVERABLES = [
  "GPU infrastructure setup",
  "Autoscaling configuration",
  "Cost & utilisation monitoring",
  "Documentation",
];

const OUTCOMES = [
  "GPU infrastructure sized to actual demand",
  "Better visibility into GPU spend",
  "Infrastructure that scales with training or inference load",
  "The same DevOps discipline applied to GPU workloads as the rest of your stack",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do you have experience with GPU infrastructure specifically?",
    answer:
      "This is an emerging area of our work, the underlying DevOps practices (provisioning, autoscaling, cost control, monitoring) are the same disciplines we apply elsewhere, adapted to GPU workloads.",
    placeholderNote:
      "Specific GPU/AI infrastructure project history and credentials are confirmed on request, we don't claim case studies that aren't real.",
  },
  {
    question: "Which cloud providers do you set up GPU infrastructure on?",
    answer: "Whichever fits your workload and budget, we're not tied to a single provider.",
  },
  {
    question: "Can you help control GPU costs specifically?",
    answer: "Yes, right-sizing and utilisation visibility are core parts of this engagement.",
  },
  {
    question: "Do we own the infrastructure and configuration you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "AI / LLM App DevOps & Infrastructure", href: "/devops-for-ai-startups/" },
  { label: "LLM App Deployment Services", href: "/llm-app-deployment-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GPU Infrastructure Setup Service",
  serviceType: "GPU Infrastructure Setup",
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

export default function GpuInfrastructureSetupServicePage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="GPU Infrastructure Setup Service"
        title="GPU Infrastructure Setup Service"
        subtitle="Provision and right-size GPU infrastructure for training or inference. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="When GPU infrastructure needs DevOps discipline"
        points={[
          "GPU capacity is over- or under-provisioned relative to actual demand.",
          "GPU spend is a mystery, nobody's tracking utilisation.",
          "There's no autoscaling, so you pay for idle hardware or hit capacity limits.",
          "GPU infrastructure was set up ad hoc, outside your normal DevOps process.",
        ]}
        closingLine="GPU infrastructure still needs the fundamentals, right-sizing, automation, and cost control."
      />

      <WhatWeDo id="what" heading="What we do" items={WHAT_WE_DO_ITEMS} />

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

      <ServiceFAQ id="faq" heading="Questions about GPU infrastructure setup" faqs={FAQS} />

      <RelatedLinks heading="Related AI infrastructure resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
