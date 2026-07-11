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
  title: "Managed DevOps Services | In-House DevOps Team",
  description:
    "Ongoing DevOps support, monitoring, incident response, and release management, delivered by our in-house team on a monthly retainer. No full-time hire required.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "DevOps as a Service",
    line: "Ongoing infrastructure management delivered as a service, not a one-off project.",
  },
  {
    title: "Incident response",
    line: "A team on call when something breaks in production.",
  },
  {
    title: "Release management",
    line: "Consistent, predictable releases instead of ad hoc deploys.",
    href: "/ci-cd-pipeline-setup-services/",
  },
  {
    title: "Monitoring & observability",
    line: "Continuous monitoring so problems get caught early.",
    href: "/devops-monitoring-observability-services/",
  },
  {
    title: "SLA-backed support",
    line: "Clear response expectations agreed upfront, not left vague.",
  },
  {
    title: "Remote & SaaS support",
    line: "Support delivered remotely, wherever your team and infrastructure are.",
  },
];

const DELIVERABLES = [
  "Monthly infrastructure health report",
  "Incident response coverage",
  "Release management process",
  "Monitoring & alerting setup",
  "Runbooks & documentation",
  "Monthly retainer summary",
];

const OUTCOMES = [
  "Fewer surprises in production",
  "Faster incident response",
  "Consistent, predictable releases",
  "One accountable team instead of ad hoc firefighting",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "What does a managed DevOps retainer actually include?",
    answer:
      "Ongoing monitoring, incident response, release support, and infrastructure care, delivered by our in-house team on a monthly retainer. Exact scope is agreed per engagement.",
  },
  {
    question: "Is this instead of hiring a DevOps engineer?",
    answer:
      "For many teams, yes, a managed retainer covers ongoing DevOps needs without committing to a full-time hire.",
  },
  {
    question: "Do you offer SLA-backed response times?",
    answer: "Yes, response expectations are agreed as part of the retainer.",
    placeholderNote: "Specific SLA and response-time commitments are confirmed per engagement.",
  },
  {
    question: "Can you support a SaaS product specifically?",
    answer:
      "Yes, SaaS uptime, releases, and cost are exactly what this kind of ongoing support is built for.",
  },
  {
    question: "Can we start with a smaller engagement first?",
    answer: "Yes. Many clients start with a fixed-scope project before moving to a managed retainer.",
  },
];

const RELATED_LINKS = [
  { label: "ongoing DevOps support", href: "/ongoing-devops-support/" },
  { label: "SaaS DevOps support", href: "/devops-support-for-saas-companies/" },
  { label: "startup DevOps", href: "/devops-for-startups/" },
  { label: "white-label support", href: "/white-label-devops-services/" },
  { label: "monitoring and observability support", href: "/devops-monitoring-observability-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Managed DevOps Services",
  serviceType: "Managed DevOps",
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

export default function ManagedDevOpsServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Managed DevOps Services"
        title="Managed DevOps Services"
        subtitle="Ongoing DevOps support from our in-house team, monitoring, incident response, release management, and infrastructure care on a monthly retainer. No full-time hire required."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What's included", href: "#what" }}
      />

      <ProblemValue
        heading="When you need ongoing DevOps support"
        points={[
          "You need DevOps coverage, but not a full-time hire.",
          "Incidents happen and there's no one accountable to respond.",
          "Releases aren't managed consistently.",
          "Monitoring exists, but nobody's watching it.",
        ]}
        closingLine="That's exactly what a managed DevOps retainer is for."
      />

      <WhatWeDo
        id="what"
        heading="What's included in managed DevOps"
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
        note="Exactly what's included depends on the retainer scope, we agree this upfront."
      />

      <Outcomes
        heading="What changes for your business"
        outcomes={OUTCOMES}
        doraNote="DevOps performance is commonly measured with DORA metrics, deployment frequency, lead time for changes, change failure rate, and time to restore service."
        className="bg-mist"
      />

      <SocialProof />

      <ServiceFAQ id="faq" heading="Questions about managed DevOps support" faqs={FAQS} />

      <RelatedLinks
        heading="Related DevOps support & services"
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
