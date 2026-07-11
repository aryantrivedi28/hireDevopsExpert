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

// NOTE: MLOps tooling and best practice move fast, copy stays general (no specific
// vendor tooling stated as settled fact). PLACEHOLDER: confirm the team's real MLOps
// delivery experience before this page goes live.
export const metadata: Metadata = {
  title: "MLOps Setup Services for Startups | In-House DevOps Team",
  description:
    "CI/CD and operational practices applied to model deployment, for startups building ML-powered products. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Model deployment pipelines",
    line: "CI/CD applied to model deployment, not just application code.",
  },
  {
    title: "Model registry & versioning",
    line: "Track which model version is running where, and roll back cleanly if needed.",
  },
  {
    title: "Monitoring for model performance",
    line: "Visibility into model behaviour and drift, not just application uptime.",
  },
  {
    title: "Data pipeline integration",
    line: "Connect data pipelines to the deployment process reliably.",
  },
];

const DELIVERABLES = [
  "Model deployment pipeline",
  "Model registry / versioning setup",
  "Monitoring for model performance",
  "Documentation",
];

const OUTCOMES = [
  "A repeatable model deployment process",
  "Faster iteration on model updates",
  "Better visibility into model performance in production",
  "The same DevOps discipline applied to ML workloads as the rest of your stack",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do you have experience with MLOps specifically?",
    answer:
      "This is an emerging area of our work, the underlying DevOps practices (CI/CD, infrastructure as code, monitoring) are the same disciplines we apply elsewhere, adapted to ML workloads.",
    placeholderNote:
      "Specific MLOps project history and credentials are confirmed on request, we don't claim case studies that aren't real.",
  },
  {
    question: "Which ML tools or frameworks do you work with?",
    answer: "Whichever your team already uses, we build around your existing stack rather than pushing a specific framework.",
  },
  {
    question: "Is this the same as your AI/LLM infrastructure services?",
    answer:
      "Related, but distinct, this page focuses on the model deployment pipeline itself; our AI/LLM page covers the broader infrastructure picture.",
  },
  {
    question: "Do we own the pipeline and code you write?",
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
  name: "MLOps Setup Services for Startups",
  serviceType: "MLOps Setup",
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

export default function MlopsSetupServicesForStartupsPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="MLOps Setup Services"
        title="MLOps Setup Services for Startups"
        subtitle="CI/CD and operational practices applied to model deployment, for startups building ML-powered products. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="When model deployment needs real DevOps discipline"
        points={[
          "Deploying a new model version is manual and ad hoc.",
          "There's no way to know which model version is running in production.",
          "Rolling back a bad model deployment is stressful, not routine.",
          "Nobody's monitoring model performance once it's deployed.",
        ]}
        closingLine="Model deployment still needs the fundamentals, versioning, automation, and monitoring."
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

      <ServiceFAQ id="faq" heading="Questions about MLOps setup" faqs={FAQS} />

      <RelatedLinks heading="Related AI infrastructure resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
