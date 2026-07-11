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

// NOTE: AI/LLM infrastructure tooling and best practice move fast, copy here stays
// deliberately general (no specific vendor tooling, pricing, or "best practice" stated
// as settled fact). PLACEHOLDER: confirm the team's real AI/LLM delivery experience
// before this page goes live, see FAQ note below.
export const metadata: Metadata = {
  title: "AI / LLM App DevOps & Infrastructure | In-House DevOps Team",
  description:
    "Infrastructure for AI and LLM applications, GPU provisioning, model deployment, and inference infrastructure, approached with real DevOps discipline.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "LLM app deployment",
    line: "Deploy LLM-powered applications with a real release process, not a manual one.",
    href: "/llm-app-deployment-services/",
  },
  {
    title: "GPU infrastructure",
    line: "Provision and right-size GPU infrastructure for training or inference.",
    href: "/gpu-infrastructure-setup-service/",
  },
  {
    title: "Inference infrastructure",
    line: "Infrastructure built around inference latency and cost, not just raw compute.",
    href: "/inference-infrastructure-services/",
  },
  {
    title: "MLOps setup",
    line: "CI/CD and operational practices applied to model deployment.",
    href: "/mlops-setup-services/",
  },
  {
    title: "Vector databases",
    line: "Infrastructure for vector databases used in retrieval-augmented applications.",
  },
  {
    title: "Autoscaling for AI workloads",
    line: "Scale inference capacity with demand instead of over-provisioning.",
  },
  {
    title: "Cost & monitoring",
    line: "Visibility into GPU spend and model performance, not just application metrics.",
  },
];

const DELIVERABLES = [
  "AI/LLM infrastructure architecture",
  "GPU provisioning setup",
  "Model deployment pipeline",
  "Monitoring for inference & cost",
  "Documentation & runbooks",
  "Ongoing support plan",
];

const OUTCOMES = [
  "A repeatable model deployment process",
  "Better visibility into GPU and inference costs",
  "Infrastructure that scales with demand",
  "The same DevOps discipline applied to AI workloads as the rest of your stack",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do you have experience with AI/LLM infrastructure specifically?",
    answer:
      "This is an emerging area of our work, the underlying DevOps practices (CI/CD, infrastructure as code, monitoring, cost control) are the same disciplines we apply elsewhere, adapted to AI/LLM workloads.",
    placeholderNote:
      "Specific AI/LLM project history and credentials are confirmed on request, we don't claim case studies that aren't real.",
  },
  {
    question: "Can you help with GPU cost optimisation?",
    answer: "Yes, right-sizing and cost visibility for GPU infrastructure is part of this engagement.",
  },
  {
    question: "Do you handle model deployment, or just the surrounding infrastructure?",
    answer: "Both, from the deployment pipeline itself to the infrastructure it runs on.",
  },
  {
    question: "Do you work with vector databases?",
    answer: "Yes, as part of the infrastructure for retrieval-augmented applications.",
  },
  {
    question: "Do we own the infrastructure and pipeline code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "LLM App Deployment Services", href: "/llm-app-deployment-services/" },
  { label: "GPU Infrastructure Setup Service", href: "/gpu-infrastructure-setup-service/" },
  { label: "Inference Infrastructure Services", href: "/inference-infrastructure-services/" },
  { label: "MLOps Setup Services", href: "/mlops-setup-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI / LLM App DevOps & Infrastructure",
  serviceType: "AI/LLM Infrastructure",
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

export default function DevOpsForAiStartupsPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="DevOps for AI Startups"
        title="AI / LLM App DevOps & Infrastructure"
        subtitle="Infrastructure for AI and LLM applications, GPU provisioning, model deployment, and inference infrastructure, approached with the same DevOps discipline as any other production system."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What this covers", href: "#what" }}
      />

      <ProblemValue
        heading="When AI/LLM infrastructure needs DevOps discipline"
        points={[
          "GPU infrastructure is expensive and hard to right-size.",
          "Model deployment is manual, or handled ad hoc outside your normal release process.",
          "Inference costs and latency aren't well understood.",
          "There's no monitoring specific to model performance or usage.",
        ]}
        closingLine="AI and LLM infrastructure still needs the fundamentals, automation, monitoring, and cost control, just applied to a newer kind of workload."
      />

      <WhatWeDo id="what" heading="What this covers" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about AI/LLM DevOps" faqs={FAQS} />

      <RelatedLinks
        heading="Related AI/LLM infrastructure resources"
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
