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
  title: "Cloud Automation Services | In-House DevOps Team",
  description:
    "Cloud operations, scaling, backups, and cleanup, automated end to end. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Autoscaling",
    line: "Infrastructure that scales automatically with real demand.",
  },
  {
    title: "Automated backups",
    line: "Backups that run on a schedule and are actually tested for restore.",
  },
  {
    title: "Resource cleanup",
    line: "Automated cleanup of unused or expired cloud resources.",
  },
  {
    title: "Policy enforcement",
    line: "Tagging, cost, and access policies enforced automatically, not by hand.",
  },
];

const DELIVERABLES = [
  "Autoscaling configuration",
  "Automated backup setup",
  "Resource cleanup automation",
  "Policy enforcement rules",
  "Documentation",
];

const OUTCOMES = [
  "Less manual cloud operations work",
  "Fewer forgotten, costly resources",
  "Backups you can actually trust",
  "A cloud environment that stays tidy over time",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "How is this different from DevOps Automation Services?",
    answer:
      "This page focuses specifically on cloud operations, scaling, backups, cleanup. Our broader DevOps Automation Services page also covers deployment and release automation.",
  },
  {
    question: "Can you automate backups we currently do manually?",
    answer: "Yes, and we'll make sure they're actually tested for restore, not just scheduled.",
  },
  {
    question: "Do we own the automation you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "DevOps Automation Services", href: "/devops-automation-services/" },
  { label: "Infrastructure Automation Services", href: "/infrastructure-automation-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloud Automation Services",
  serviceType: "Cloud Automation",
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

export default function CloudAutomationServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Cloud Automation Services"
        title="Cloud Automation Services"
        subtitle="Cloud operations, scaling, backups, and cleanup, automated end to end. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When cloud operations need to be automated"
        points={[
          "Scaling requires someone to notice and intervene manually.",
          "Backups exist, but nobody's confirmed they actually restore.",
          "Unused resources quietly accumulate and cost money.",
          "Policies like tagging and access are enforced inconsistently, if at all.",
        ]}
        closingLine="We automate the operational work that otherwise falls through the cracks."
      />

      <WhatWeDo id="what" heading="What we do" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about cloud automation" faqs={FAQS} />

      <RelatedLinks heading="Related automation resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
