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
  title: "AWS Cost Optimization Services | In-House DevOps Team",
  description:
    "Right-sizing, savings plans, and waste cleanup for AWS, a real audit of your usage, not a guessed percentage. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Right-sizing",
    line: "Match instance and resource sizes to what you actually use.",
  },
  {
    title: "Reserved & savings plans",
    line: "Use commitment-based pricing where your usage is predictable enough to justify it.",
  },
  {
    title: "Unused resource cleanup",
    line: "Find and remove idle EC2, EBS, load balancers, and other forgotten resources.",
  },
  {
    title: "Storage review",
    line: "Move data to the right S3 storage class instead of paying standard rates by default.",
  },
  {
    title: "Well-Architected cost review",
    line: "A structured review against AWS's own cost optimisation pillar.",
  },
];

const DELIVERABLES = [
  "AWS cost audit findings",
  "Right-sizing recommendations",
  "Unused resource cleanup",
  "Reserved/savings plan recommendations",
  "Cost optimisation report",
  "Ongoing support plan",
];

const OUTCOMES = [
  "A clearer picture of where your AWS spend goes",
  "Lower, more predictable AWS costs",
  "Cleaned-up, right-sized infrastructure",
  "A repeatable process for staying cost-aware going forward",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "How much can you actually save us?",
    answer:
      "It depends entirely on your current setup, we look at your actual usage before recommending anything, and we don't promise a specific percentage upfront.",
  },
  {
    question: "Will this require downtime or risky changes?",
    answer:
      "Most cost optimisation work, right-sizing, cleanup, storage class changes, can be done without disrupting production.",
  },
  {
    question: "Do you do a one-time audit, or ongoing cost management?",
    answer: "Both are options, a one-time audit, or ongoing cost review as part of a managed retainer.",
  },
  {
    question: "Can you also help with our AWS architecture, not just cost?",
    answer: "Yes, see our AWS DevOps Services page for the fuller offering.",
  },
];

const RELATED_LINKS = [
  { label: "AWS DevOps Services", href: "/aws-devops-services/" },
  { label: "How to reduce AWS cloud costs", href: "/blog/how-to-reduce-aws-cloud-costs/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AWS Cost Optimization Services",
  serviceType: "AWS Cost Optimization",
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

export default function AwsCostOptimizationServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="AWS Cost Optimization Services"
        title="AWS Cost Optimization Services"
        subtitle="Right-sizing, savings plans, and waste cleanup for AWS, based on a real audit of your usage, not a guessed percentage. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When your AWS bill needs a closer look"
        points={[
          "Your AWS bill keeps climbing and nobody's sure why.",
          "Resources were provisioned generously and never revisited.",
          "Nobody's checked for idle or forgotten AWS resources.",
          "You suspect you're paying for capacity you don't use.",
        ]}
        closingLine="We start by understanding where your spend actually goes, not by guessing."
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

      <ServiceFAQ id="faq" heading="Questions about AWS cost optimization" faqs={FAQS} />

      <RelatedLinks heading="Related AWS resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Want your AWS setup audited before you spend more on it?"
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
