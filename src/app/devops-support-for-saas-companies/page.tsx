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
  title: "DevOps Support for SaaS Companies | In-House DevOps Team",
  description:
    "Ongoing DevOps support built around SaaS uptime, release velocity, and cloud cost, delivered by our in-house team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Release velocity",
    line: "Ship releases faster and more safely, without slowing product development.",
    href: "/ci-cd-pipeline-setup-services/",
  },
  {
    title: "Uptime",
    line: "Monitoring and incident response built around SaaS uptime expectations.",
    href: "/devops-monitoring-observability-services/",
  },
  {
    title: "Cloud cost",
    line: "Keep infrastructure costs predictable as your customer base grows.",
    href: "/aws-devops-services/",
  },
  {
    title: "Scaling",
    line: "Infrastructure that holds up as usage, load, and customer count increase.",
  },
];

const DELIVERABLES = [
  "SaaS infrastructure review",
  "CI/CD pipeline",
  "Monitoring & alerting setup",
  "Cost review",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Faster, safer releases",
  "Better uptime for your customers",
  "Predictable cloud costs as you grow",
  "Infrastructure that scales with your customer base",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Is this different from your general managed DevOps offering?",
    answer:
      "It's the same underlying service, framed around SaaS-specific concerns, release velocity, uptime, and cloud cost as your customer base grows.",
  },
  {
    question: "Can you work with an early-stage SaaS product?",
    answer: "Yes, see our DevOps for Startups & SaaS page for how we scope engagements at that stage.",
  },
  {
    question: "Can you help reduce our cloud costs as we scale?",
    answer:
      "Yes, we look at your actual usage before recommending anything, and we don't promise a specific percentage upfront.",
  },
  {
    question: "Do we own the infrastructure and configuration you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "DevOps for Startups & SaaS", href: "/devops-for-startups/" },
  { label: "Managed DevOps Services", href: "/managed-devops-services/" },
  { label: "CI/CD Pipeline Setup Services", href: "/ci-cd-pipeline-setup-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DevOps Support for SaaS Companies",
  serviceType: "SaaS DevOps Support",
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

export default function DevOpsSupportForSaasCompaniesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="DevOps Support for SaaS Companies"
        title="DevOps Support for SaaS Companies"
        subtitle="Ongoing DevOps support built around what matters to a SaaS business, release velocity, uptime, and cloud cost. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we focus on", href: "#what" }}
      />

      <ProblemValue
        heading="What SaaS teams run into"
        points={[
          "Releases slow down as the product and customer base grow.",
          "Uptime becomes higher-stakes as more customers depend on the product.",
          "Cloud costs scale in ways that are hard to predict.",
          "There's no dedicated DevOps person, and engineers are stretched.",
        ]}
        closingLine="SaaS products live and die by uptime, release speed, and cost, DevOps support here is about protecting all three."
      />

      <WhatWeDo id="what" heading="What we focus on" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about DevOps support for SaaS companies" faqs={FAQS} />

      <RelatedLinks heading="Related support resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
