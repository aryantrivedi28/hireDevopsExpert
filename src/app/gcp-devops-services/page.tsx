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
  title: "GCP DevOps Services | In-House DevOps Team",
  description:
    "GKE, Cloud Build, Cloud Run, and infrastructure as code on Google Cloud, delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "GKE (Google Kubernetes Engine)",
    line: "Kubernetes on GCP, set up and hardened correctly.",
    href: "/gke-setup-services/",
  },
  {
    title: "Cloud Build & Cloud Run",
    line: "CI/CD and serverless deployment using Cloud Build and Cloud Run.",
  },
  {
    title: "IAM & access",
    line: "Least-privilege access configured correctly on GCP.",
  },
  {
    title: "Monitoring",
    line: "Visibility into GCP infrastructure and application health.",
  },
  {
    title: "Terraform on GCP",
    line: "GCP infrastructure managed as code.",
  },
  {
    title: "Migration to GCP",
    line: "Move workloads onto Google Cloud.",
  },
];

const DELIVERABLES = [
  "GCP architecture diagram",
  "CI/CD pipeline (Cloud Build or other)",
  "GKE cluster setup",
  "Terraform for GCP",
  "Monitoring & alerting setup",
  "Documentation & runbooks",
];

const OUTCOMES = [
  "A properly hardened GKE setup",
  "Automated deployments on GCP",
  "GCP infrastructure managed as code",
  "Better visibility into GCP costs and health",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do you work with GKE?",
    answer: "Yes, setup, hardening, and ongoing management of Google Kubernetes Engine.",
  },
  {
    question: "Do you also work with AWS and Azure, or only GCP?",
    answer:
      "We work across AWS, Azure, and GCP, if you're on GCP, that's where we focus for this engagement.",
  },
  {
    question: "Can you take over an existing GCP setup?",
    answer: "Yes, auditing and cleaning up an existing setup is a common starting point.",
  },
  {
    question: "Can you help us migrate to GCP?",
    answer: "Yes, as part of a scoped migration engagement.",
  },
  {
    question: "Do we own the infrastructure code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Google Cloud DevOps Consulting", href: "/google-cloud-devops-consulting/" },
  { label: "GKE Setup Services", href: "/gke-setup-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GCP DevOps Services",
  serviceType: "GCP DevOps",
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

export default function GcpDevOpsServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="GCP DevOps Services"
        title="GCP DevOps Services"
        subtitle="DevOps for teams building on Google Cloud, GKE, Cloud Build, Cloud Run, and infrastructure as code. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do on GCP", href: "#what" }}
      />

      <ProblemValue
        heading="When you need GCP DevOps help"
        points={[
          "GKE clusters were set up quickly and never properly hardened.",
          "Deployments to Cloud Run or Cloud Build aren't automated.",
          "Infrastructure on GCP is managed by hand instead of as code.",
          "Monitoring and cost visibility on GCP are limited.",
        ]}
        closingLine="We bring the same DevOps discipline to GCP that we apply on AWS and Azure."
      />

      <WhatWeDo id="what" heading="What we do on GCP" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about our GCP DevOps services" faqs={FAQS} />

      <RelatedLinks
        heading="Related GCP resources & services"
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
