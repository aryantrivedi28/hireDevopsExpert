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
  title: "DevOps as a Service | In-House DevOps Team",
  description:
    "DevOps delivered as an ongoing service, not a one-off project, infrastructure, automation, monitoring, and support from our in-house team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Infrastructure management",
    line: "Your cloud infrastructure managed continuously, not just set up once.",
  },
  {
    title: "Automation as a service",
    line: "CI/CD, deployments, and operational tasks kept automated over time.",
    href: "/devops-automation-services/",
  },
  {
    title: "Monitoring as a service",
    line: "Ongoing monitoring and alerting, maintained and tuned as your system changes.",
    href: "/devops-monitoring-observability-services/",
  },
  {
    title: "Release management",
    line: "A consistent release process, owned by us, month after month.",
  },
];

const DELIVERABLES = [
  "Ongoing infrastructure management",
  "Automation maintenance",
  "Monitoring & alerting maintenance",
  "Release management",
  "Monthly service summary",
];

const OUTCOMES = [
  "DevOps handled continuously, not as a one-time project",
  "No full-time hire required",
  "Consistent infrastructure quality over time",
  "One accountable team for ongoing DevOps needs",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "How is DevOps as a service different from a managed retainer?",
    answer:
      "They describe the same underlying model, ongoing, service-based DevOps delivery rather than a one-off project. See our managed DevOps services page for the full breakdown.",
  },
  {
    question: "Can you take over from an existing setup?",
    answer: "Yes, taking over an existing environment is a common way this engagement starts.",
  },
  {
    question: "Is this suitable for a small team?",
    answer: "Yes, this model is built for teams that need DevOps coverage without a full-time hire.",
  },
  {
    question: "Do we own the infrastructure and code?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Managed DevOps Services", href: "/managed-devops-services/" },
  { label: "ongoing DevOps support", href: "/ongoing-devops-support/" },
  { label: "DevOps support for SaaS companies", href: "/devops-support-for-saas-companies/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DevOps as a Service",
  serviceType: "DevOps as a Service",
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

export default function DevOpsAsAServicePage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="DevOps as a Service"
        title="DevOps as a Service"
        subtitle="DevOps delivered as an ongoing service, not a one-off project, infrastructure, automation, monitoring, and support, handled continuously by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What this includes", href: "#what" }}
      />

      <ProblemValue
        heading="When DevOps needs to be a service, not a project"
        points={[
          "A one-off setup project leaves nobody responsible for what happens next.",
          "Infrastructure needs continuous attention, not a single round of fixes.",
          "You want predictable, ongoing DevOps costs instead of ad hoc project pricing.",
          "You need this delivered by a team you can rely on, not a single freelancer.",
        ]}
        closingLine="DevOps as a service means the work continues after the initial setup, for as long as you need it."
      />

      <WhatWeDo id="what" heading="What this includes" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about DevOps as a service" faqs={FAQS} />

      <RelatedLinks heading="Related support resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
