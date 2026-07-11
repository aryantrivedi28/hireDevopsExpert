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
  title: "Infrastructure as Code Services | In-House DevOps Team",
  description:
    "Version-controlled, repeatable infrastructure with Terraform or CloudFormation, delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Terraform implementation",
    line: "Practical, modular Terraform, not just theory.",
    href: "/terraform-consulting-services/",
  },
  {
    title: "CloudFormation",
    line: "Native AWS CloudFormation where that fits your stack better.",
  },
  {
    title: "Modules & reusable code",
    line: "Infrastructure code organised into modules your team can actually reuse.",
  },
  {
    title: "State management",
    line: "Remote state, locking, and workspaces set up correctly from the start.",
  },
  {
    title: "Drift detection",
    line: "Catch when live infrastructure no longer matches your code.",
  },
  {
    title: "GitOps & code review",
    line: "Infrastructure changes reviewed like any other code change.",
  },
];

const DELIVERABLES = [
  "Terraform/CloudFormation codebase",
  "Module structure & documentation",
  "Remote state setup",
  "Drift detection process",
  "Code review workflow for infra changes",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Infrastructure you can recreate from scratch",
  "Fewer manual console changes",
  "Reviewable, auditable infrastructure changes",
  "Less configuration drift",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Terraform or CloudFormation, which do you recommend?",
    answer:
      "It depends on your stack. Terraform is cloud-agnostic; CloudFormation is AWS-native. We'll recommend based on what you're already using.",
  },
  {
    question: "Can you convert our existing manually-configured infrastructure into code?",
    answer: "Yes, this is one of the most common starting points for an IaC engagement.",
  },
  {
    question: "Do we own the Terraform/CloudFormation code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
  {
    question: "Does this slow down how quickly we can make changes?",
    answer:
      "No, once it's set up, changes are usually faster and safer, since they go through the same review process as your application code.",
  },
  {
    question: "Can you support us on an ongoing basis after the initial setup?",
    answer: "Yes, as a managed retainer once the initial IaC setup is in place.",
  },
];

const RELATED_LINKS = [
  { label: "Terraform Consulting Services", href: "/terraform-consulting-services/" },
  { label: "DevOps Automation Services", href: "/devops-automation-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Infrastructure as Code Services",
  serviceType: "Infrastructure as Code",
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

export default function InfrastructureAsCodeServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Infrastructure as Code Services"
        title="Infrastructure as Code Services"
        subtitle="Version-controlled, repeatable infrastructure, built with Terraform or CloudFormation, reviewed like code, and never configured by hand again. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "How we approach IaC", href: "#what" }}
      />

      <ProblemValue
        heading="When infrastructure needs to become code"
        points={[
          "Infrastructure was set up by hand, and nobody's fully sure what's in it.",
          "Changes are made directly in the cloud console, with no history or review.",
          "There's no way to reliably recreate your environment from scratch.",
          "Configuration drifts between environments over time.",
        ]}
        closingLine="Infrastructure as Code turns your infrastructure into something version-controlled, reviewable, and repeatable."
      />

      <WhatWeDo id="what" heading="How we approach IaC" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about Infrastructure as Code" faqs={FAQS} />

      <RelatedLinks
        heading="Related infrastructure services"
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
