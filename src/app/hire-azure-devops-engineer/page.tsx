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

export const metadata: Metadata = {
  title: "Hire an Azure DevOps Engineer | In-House DevOps Team",
  description:
    "Bring in an experienced Azure engineer from our in-house team, Pipelines, Repos, Boards, and AKS. Not a freelancer marketplace.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Azure Pipelines & Repos",
    line: "CI/CD and source control set up and maintained properly.",
  },
  {
    title: "AKS",
    line: "Kubernetes on Azure, set up and hardened correctly.",
  },
  {
    title: "Infrastructure as Code",
    line: "Azure infrastructure managed as code, not by hand.",
  },
  {
    title: "Ongoing support",
    line: "Continued support once your Azure setup is in place.",
  },
];

const DELIVERABLES = [
  "Azure infrastructure review",
  "Azure Pipelines setup",
  "AKS setup (where relevant)",
  "Documentation",
  "Ongoing support plan",
];

const OUTCOMES = [
  "An experienced Azure engineer, not a generalist",
  "Faster, safer Azure deployments",
  "A properly configured Azure environment",
  "Backed by our in-house team, not a single freelancer",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do I get one engineer or a team?",
    answer:
      "You work with our in-house team; we can assign a dedicated engineer focused on your Azure work specifically.",
  },
  {
    question: "Can you also cover AWS or GCP if we're multi-cloud?",
    answer: "Yes, we work across AWS, Azure, and GCP.",
  },
  {
    question: "Can you take over an existing Azure setup?",
    answer: "Yes, auditing and improving an existing Azure environment is a common starting point.",
  },
  {
    question: "Do we own the infrastructure and code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Azure DevOps Consulting Services", href: "/azure-devops-consulting-services/" },
  { label: "hire a DevOps engineer", href: "/hire-devops-engineer/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire an Azure DevOps Engineer",
  serviceType: "Azure DevOps Engineering / Hire",
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

export default function HireAzureDevOpsEngineerPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Hire an Azure DevOps Engineer"
        title="Hire an Azure DevOps Engineer"
        subtitle="Bring in an experienced Azure engineer from our in-house team, Pipelines, Repos, Boards, and AKS. Not a freelancer marketplace."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="When you need Azure-specific expertise"
        points={[
          "Your team doesn't have deep, hands-on Azure experience.",
          "Azure Pipelines or AKS need setup or hardening.",
          "You want a dedicated engineer, not a generalist stretched across every cloud.",
          "You'd rather work with a team than a single freelancer.",
        ]}
        closingLine="You get an engineer focused on your Azure environment, backed by our full team."
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

      <ServiceFAQ id="faq" heading="Questions about hiring an Azure DevOps engineer" faqs={FAQS} />

      <RelatedLinks heading="Related Azure resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
