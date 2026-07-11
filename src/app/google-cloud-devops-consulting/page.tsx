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
  title: "Google Cloud DevOps Consulting | In-House DevOps Team",
  description:
    "Hands-on GCP consulting, account setup, GKE, Cloud Build, and infrastructure as code. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "GCP account & project setup",
    line: "A clean, secure GCP project structure, or a review of your existing one.",
  },
  {
    title: "GKE setup",
    line: "Kubernetes on Google Cloud, set up and hardened correctly.",
    href: "/gcp-devops-services/",
  },
  {
    title: "CI/CD with Cloud Build",
    line: "Pipelines built to deploy into your GCP environment.",
  },
  {
    title: "Infrastructure as Code",
    line: "GCP infrastructure managed with Terraform.",
  },
];

const DELIVERABLES = [
  "GCP account/project review",
  "CI/CD pipeline",
  "GKE setup (where relevant)",
  "Terraform-managed GCP infrastructure",
  "Documentation",
];

const OUTCOMES = [
  "A clearer, more secure GCP setup",
  "Faster, safer GCP deployments",
  "Infrastructure you can recreate and audit",
  "A foundation for future GCP growth",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "How is this different from your GCP DevOps Services page?",
    answer:
      "This page is scoped to hands-on GCP consulting engagements; our GCP DevOps Services page covers the fuller ongoing offering.",
  },
  {
    question: "Do you also work with AWS and Azure, or only GCP?",
    answer: "We work across AWS, Azure, and GCP, if you're on GCP, that's where we focus for this engagement.",
  },
  {
    question: "Do we own the infrastructure code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "GCP DevOps Services", href: "/gcp-devops-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Cloud DevOps Consulting",
  serviceType: "GCP DevOps Consulting",
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

export default function GoogleCloudDevOpsConsultingPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Google Cloud DevOps Consulting"
        title="Google Cloud DevOps Consulting"
        subtitle="Hands-on GCP consulting, account setup, GKE, Cloud Build, and infrastructure as code. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="When you need GCP consulting help"
        points={[
          "Your GCP project has grown organically, without a clear structure.",
          "GKE clusters were set up quickly and never hardened.",
          "Deployments to GCP are manual or inconsistent.",
          "Nobody on the team has deep, hands-on GCP experience.",
        ]}
        closingLine="We bring practical GCP delivery experience, not just familiarity with the console."
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

      <ServiceFAQ id="faq" heading="Questions about our Google Cloud consulting" faqs={FAQS} />

      <RelatedLinks heading="Related GCP resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
