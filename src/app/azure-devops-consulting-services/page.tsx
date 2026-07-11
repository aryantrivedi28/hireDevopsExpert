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

// NOTE (SEO): "Azure DevOps" is Microsoft's own product name (navigational intent).
// This page targets "azure devops consulting services" only, every heading below
// qualifies the phrase; never present bare "Azure DevOps" as our own service name.
export const metadata: Metadata = {
  title: "Azure DevOps Consulting Services | In-House DevOps Team",
  description:
    "Azure Pipelines, Repos, Boards, AKS, and infrastructure as code, consulting and hands-on delivery from our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Azure Pipelines",
    line: "CI/CD pipelines built and maintained in Azure Pipelines.",
  },
  {
    title: "Repos & Boards",
    line: "Source control and work tracking set up properly in Azure Repos and Boards.",
  },
  {
    title: "AKS (Azure Kubernetes Service)",
    line: "Kubernetes on Azure, set up and hardened correctly.",
  },
  {
    title: "Azure Container Registry",
    line: "Image storage and versioning with ACR.",
  },
  {
    title: "App Service",
    line: "Application hosting on Azure App Service, configured correctly.",
  },
  {
    title: "Infrastructure as Code on Azure",
    line: "Terraform or ARM/Bicep-managed Azure infrastructure.",
  },
  {
    title: "Azure migration",
    line: "Move workloads onto Azure, or between Azure regions and subscriptions.",
    href: "/azure-migration-services/",
  },
];

const DELIVERABLES = [
  "Azure architecture diagram",
  "Azure Pipelines CI/CD setup",
  "AKS cluster setup",
  "Infrastructure as Code for Azure",
  "Monitoring & alerting setup",
  "Documentation & runbooks",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Faster, more reliable Azure Pipelines releases",
  "A properly hardened AKS setup",
  "Azure infrastructure managed as code",
  "A maintainable Azure environment",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Is this the same as Microsoft's Azure DevOps product?",
    answer:
      "No, Azure DevOps is Microsoft's own toolset (Pipelines, Repos, Boards). We're a consulting team that sets up and manages it for you, alongside the rest of your Azure infrastructure.",
  },
  {
    question: "Do you work with AKS?",
    answer: "Yes, setup, hardening, and ongoing management of Azure Kubernetes Service.",
  },
  {
    question: "Can you take over an existing, fragile Azure Pipelines setup?",
    answer: "Yes, that's a common starting point.",
  },
  {
    question: "Do you also work with AWS and GCP, or only Azure?",
    answer:
      "We work across AWS, Azure, and GCP, if you're on Azure, that's where we focus for this engagement.",
  },
  {
    question: "Do we own the pipeline and infrastructure configuration you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Azure Migration Services", href: "/azure-migration-services/" },
  { label: "Hire Azure DevOps Engineer", href: "/hire-azure-devops-engineer/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Azure DevOps Consulting Services",
  serviceType: "Azure DevOps Consulting",
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

export default function AzureDevOpsConsultingServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Azure DevOps Consulting Services"
        title="Azure DevOps Consulting Services"
        subtitle="Consulting and hands-on delivery for teams building on Microsoft Azure, Pipelines, Repos, Boards, AKS, and infrastructure as code. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do on Azure", href: "#what" }}
      />

      <ProblemValue
        heading="When you need Azure DevOps consulting help"
        points={[
          "Your Azure Pipelines setup is fragile or inconsistently maintained.",
          "AKS clusters were set up quickly and never properly hardened.",
          "Infrastructure on Azure is managed by hand instead of as code.",
          "Nobody on the team has deep hands-on Azure experience.",
        ]}
        closingLine="We bring hands-on Azure delivery experience, not just familiarity with the portal."
      />

      <WhatWeDo id="what" heading="What we do on Azure" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about our Azure DevOps consulting" faqs={FAQS} />

      <RelatedLinks
        heading="Related Azure resources & services"
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
