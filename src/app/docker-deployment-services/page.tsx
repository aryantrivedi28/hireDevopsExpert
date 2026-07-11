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
  title: "Docker Deployment Services | In-House DevOps Team",
  description:
    "Deploy containerised applications reliably, registries, CI/CD integration, and image security. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Deployment pipelines",
    line: "CI/CD wired to build, push, and deploy your Docker images.",
    href: "/ci-cd-pipeline-setup-services/",
  },
  {
    title: "Registry setup",
    line: "Image storage and versioning set up properly.",
  },
  {
    title: "Image security scanning",
    line: "Images scanned before they reach production.",
  },
  {
    title: "Deployment targets",
    line: "Deploy to a single server, ECS, or another platform, without needing Kubernetes.",
  },
];

const DELIVERABLES = [
  "Deployment pipeline for containers",
  "Container registry setup",
  "Image security scanning",
  "Deployment documentation",
];

const OUTCOMES = [
  "Reliable, repeatable container deployments",
  "Faster, safer releases",
  "Fewer security issues shipping in images",
  "Deployment that doesn't require Kubernetes complexity",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do we need Kubernetes to deploy containers reliably?",
    answer: "No, many teams deploy containers reliably to a single server or ECS without Kubernetes.",
  },
  {
    question: "Can you set up the registry and pipeline together?",
    answer: "Yes, that's the typical scope of this engagement.",
  },
  {
    question: "Do we own the pipeline and configuration you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Docker Consulting & Containerization Services", href: "/docker-consulting-services/" },
  { label: "Dockerize Application Service", href: "/dockerize-application-service/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Docker Deployment Services",
  serviceType: "Docker Deployment",
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

export default function DockerDeploymentServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Docker Deployment Services"
        title="Docker Deployment Services"
        subtitle="Deploy containerised applications reliably, registries, CI/CD integration, and image security. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When container deployment needs work"
        points={[
          "Deploying a new image version is still a manual process.",
          "There's no proper container registry set up.",
          "Nobody's scanning images for vulnerabilities before deployment.",
          "You're not sure if you need Kubernetes just to deploy containers.",
        ]}
        closingLine="We deploy containers reliably, with or without Kubernetes, depending on what you actually need."
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

      <ServiceFAQ id="faq" heading="Questions about Docker deployment" faqs={FAQS} />

      <RelatedLinks heading="Related containerization resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
