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

// NOTE: AI/LLM tooling and best practice move fast, copy stays general (no specific
// vendor tooling, pricing, or "best practice" stated as settled fact). PLACEHOLDER:
// confirm the team's real AI/LLM delivery experience before this page goes live.
export const metadata: Metadata = {
  title: "LLM App Deployment Services | In-House DevOps Team",
  description:
    "Deploy LLM-powered applications with a real release process, model serving, autoscaling, and monitoring. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Deployment pipeline",
    line: "A real release process for LLM-powered applications, not manual deployment.",
  },
  {
    title: "Model serving infrastructure",
    line: "Infrastructure to serve models reliably, sized to your actual traffic.",
    href: "/gpu-infrastructure-setup-service/",
  },
  {
    title: "Autoscaling",
    line: "Scale inference capacity with demand instead of over-provisioning.",
  },
  {
    title: "Monitoring",
    line: "Visibility into latency, cost, and usage, not just application uptime.",
  },
];

const DELIVERABLES = [
  "LLM app deployment pipeline",
  "Model serving infrastructure",
  "Autoscaling configuration",
  "Monitoring for latency & cost",
  "Documentation",
];

const OUTCOMES = [
  "A repeatable deployment process for LLM-powered features",
  "Infrastructure that scales with demand",
  "Better visibility into inference cost and latency",
  "The same DevOps discipline applied to AI workloads as the rest of your stack",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do you have experience deploying LLM applications specifically?",
    answer:
      "This is an emerging area of our work, the underlying DevOps practices (CI/CD, infrastructure as code, monitoring, cost control) are the same disciplines we apply elsewhere, adapted to LLM workloads.",
    placeholderNote:
      "Specific AI/LLM project history and credentials are confirmed on request, we don't claim case studies that aren't real.",
  },
  {
    question: "Which model providers or hosting options do you work with?",
    answer:
      "We work with whatever your application already uses, hosted APIs or self-hosted models, rather than pushing a specific vendor.",
  },
  {
    question: "Can you help with cost control for inference?",
    answer: "Yes, right-sizing and cost visibility for inference infrastructure is part of this engagement.",
  },
  {
    question: "Do we own the infrastructure and pipeline code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "AI / LLM App DevOps & Infrastructure", href: "/devops-for-ai-startups/" },
  { label: "GPU Infrastructure Setup Service", href: "/gpu-infrastructure-setup-service/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LLM App Deployment Services",
  serviceType: "LLM Application Deployment",
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

export default function LlmAppDeploymentServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="LLM App Deployment Services"
        title="LLM App Deployment Services"
        subtitle="Deploy LLM-powered applications with a real release process, model serving, autoscaling, and monitoring. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="When LLM app deployment needs real DevOps discipline"
        points={[
          "Deploying model or prompt changes is manual and ad hoc.",
          "Inference cost and latency aren't well understood.",
          "There's no autoscaling, so capacity is over- or under-provisioned.",
          "Monitoring covers the app but not model-specific behaviour.",
        ]}
        closingLine="LLM-powered features still need a real release process, we bring the same discipline we apply to any production system."
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

      <ServiceFAQ id="faq" heading="Questions about LLM app deployment" faqs={FAQS} />

      <RelatedLinks heading="Related AI infrastructure resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
