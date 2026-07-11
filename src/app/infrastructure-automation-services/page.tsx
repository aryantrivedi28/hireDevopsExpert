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
  title: "Infrastructure Automation Services | In-House DevOps Team",
  description:
    "Provisioning, scaling, and infrastructure changes automated through code, not manual console work. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Automated provisioning",
    line: "Infrastructure provisioned through code, triggered automatically where it makes sense.",
    href: "/terraform-consulting-services/",
  },
  {
    title: "Scaling automation",
    line: "Infrastructure that scales automatically with demand, not manual intervention.",
  },
  {
    title: "GitOps workflows",
    line: "Infrastructure changes applied through CI/CD, not from someone's laptop.",
  },
  {
    title: "Drift correction",
    line: "Automated detection and correction when live infrastructure drifts from code.",
  },
];

const DELIVERABLES = [
  "Automated provisioning pipeline",
  "Scaling automation",
  "GitOps-driven infrastructure workflow",
  "Drift detection & correction process",
  "Documentation",
];

const OUTCOMES = [
  "Infrastructure changes that don't require manual console work",
  "Faster, safer infrastructure provisioning",
  "Less configuration drift over time",
  "A repeatable, auditable infrastructure process",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "How is this different from Infrastructure as Code services?",
    answer:
      "IaC is the foundation, writing infrastructure as code. Infrastructure automation goes further, wiring that code into automated, triggered workflows.",
  },
  {
    question: "Can you automate infrastructure we've already written in Terraform?",
    answer: "Yes, wiring existing Terraform into automated pipelines is a common next step.",
  },
  {
    question: "Do we own the automation you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "DevOps Automation Services", href: "/devops-automation-services/" },
  { label: "Terraform Consulting Services", href: "/terraform-consulting-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Infrastructure Automation Services",
  serviceType: "Infrastructure Automation",
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

export default function InfrastructureAutomationServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Infrastructure Automation Services"
        title="Infrastructure Automation Services"
        subtitle="Provisioning, scaling, and infrastructure changes automated through code, not manual console work. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When infrastructure work needs to be automated"
        points={[
          "Infrastructure provisioning still happens by hand.",
          "Scaling requires someone to notice and intervene manually.",
          "Infrastructure changes bypass any review process.",
          "Live infrastructure quietly drifts from what's documented.",
        ]}
        closingLine="We wire infrastructure changes into automated, reviewable workflows."
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

      <ServiceFAQ id="faq" heading="Questions about infrastructure automation" faqs={FAQS} />

      <RelatedLinks heading="Related automation resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
