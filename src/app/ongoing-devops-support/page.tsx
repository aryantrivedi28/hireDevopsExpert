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
  title: "Ongoing DevOps Support | In-House DevOps Team",
  description:
    "Continuous DevOps coverage, infrastructure care, incident response, and release support, delivered by our in-house team month to month.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Infrastructure care",
    line: "Regular maintenance and upkeep, not just firefighting.",
  },
  {
    title: "Incident response",
    line: "A team available when something breaks.",
  },
  {
    title: "Release support",
    line: "Support for ongoing releases and deployments.",
  },
  {
    title: "Monitoring",
    line: "Continued monitoring so issues are caught early.",
    href: "/devops-monitoring-observability-services/",
  },
];

const DELIVERABLES = [
  "Monthly infrastructure review",
  "Incident coverage",
  "Release support",
  "Monitoring & alerting maintenance",
  "Monthly summary report",
];

const OUTCOMES = [
  "Consistent infrastructure care",
  "Faster response when something breaks",
  "One accountable team instead of ad hoc help",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "How is this different from a one-off project?",
    answer:
      "A project has a defined end point; ongoing support is continuous, infrastructure care, incident response, and releases handled month to month.",
  },
  {
    question: "Can we start with a smaller engagement first?",
    answer: "Yes. Many clients start with a fixed-scope project before moving to ongoing support.",
  },
  {
    question: "Do you offer SLA-backed response times?",
    answer: "Response expectations are agreed as part of the engagement.",
    placeholderNote: "Specific SLA and response-time commitments are confirmed per engagement.",
  },
  {
    question: "Can this replace a full-time hire?",
    answer: "For many teams, yes, see our managed DevOps services page for how that works.",
  },
];

const RELATED_LINKS = [
  { label: "Managed DevOps Services", href: "/managed-devops-services/" },
  { label: "monitoring and observability support", href: "/devops-monitoring-observability-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ongoing DevOps Support",
  serviceType: "Ongoing DevOps Support",
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

export default function OngoingDevOpsSupportPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Ongoing DevOps Support"
        title="Ongoing DevOps Support"
        subtitle="Continuous DevOps coverage for teams that need reliable, ongoing support, not a one-off project. Delivered by our in-house team, tied to your existing infrastructure."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What's included", href: "#what" }}
      />

      <ProblemValue
        heading="When you need ongoing DevOps support"
        points={[
          "Your infrastructure needs regular care, not a single project.",
          "Something breaks and there's no one on call to respond.",
          "Small infrastructure tasks pile up because nobody owns them.",
          "You need coverage, but not a full-time headcount.",
        ]}
        closingLine="Ongoing support means someone's accountable for your infrastructure every month, not just once."
      />

      <WhatWeDo id="what" heading="What ongoing support includes" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about ongoing DevOps support" faqs={FAQS} />

      <RelatedLinks heading="Related support resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
