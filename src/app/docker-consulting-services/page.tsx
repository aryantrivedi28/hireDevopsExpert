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
  title: "Docker Consulting & Containerization Services | In-House DevOps Team",
  description:
    "Dockerfiles, Compose, image optimisation, and container security, done right, by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Dockerize your application",
    line: "Turn an app that isn't containerised into one that is.",
    href: "/dockerize-application-service/",
  },
  {
    title: "Dockerfile & image optimisation",
    line: "Smaller, faster, more secure Docker images.",
  },
  {
    title: "Docker Compose",
    line: "Multi-container local and staging environments that actually match production.",
  },
  {
    title: "Container registries",
    line: "Image storage and versioning set up properly.",
  },
  {
    title: "Container security",
    line: "Scan and harden images before they reach production.",
  },
  {
    title: "Docker deployment",
    line: "Deploy containerised apps reliably, without Kubernetes if you don't need it yet.",
    href: "/docker-deployment-services/",
  },
];

const DELIVERABLES = [
  "Dockerfile(s)",
  "Docker Compose configuration",
  "Container registry setup",
  "Image security scan results",
  "Deployment documentation",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Consistent environments across dev, staging, and production",
  "Smaller, faster-building images",
  "Fewer \"works on my machine\" issues",
  "A clear path to Kubernetes if and when you need it",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do we need Kubernetes, or is Docker alone enough?",
    answer:
      "Often Docker alone is enough, we'll give you an honest recommendation rather than pushing Kubernetes by default.",
  },
  {
    question: "Can you containerise an existing application?",
    answer: "Yes, this is one of the most common ways this engagement starts.",
  },
  {
    question: "Can you fix slow or bloated Docker images?",
    answer: "Yes, image optimisation is a quick, high-value fix in most cases.",
  },
  {
    question: "Do you handle container security scanning?",
    answer: "Yes, as part of the setup or as an ongoing check.",
  },
  {
    question: "Do we own the Dockerfiles and configuration you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Docker Deployment Services", href: "/docker-deployment-services/" },
  { label: "Dockerize Application Service", href: "/dockerize-application-service/" },
  { label: "Docker vs Kubernetes", href: "/blog/docker-vs-kubernetes/" },
  { label: "Kubernetes Consulting Services", href: "/kubernetes-consulting-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Docker Consulting & Containerization Services",
  serviceType: "Docker Consulting",
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

export default function DockerConsultingServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Docker Consulting Services"
        title="Docker Consulting & Containerization Services"
        subtitle="Containerise applications properly, Dockerfiles, Compose, image optimisation, and registries, done right the first time. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When containerisation needs expert help"
        points={[
          "Your app isn't containerised yet, and \"it works on my machine\" is a real problem.",
          "Docker images are bloated, slow to build, or insecure.",
          "Compose setups have grown messy across environments.",
          "You're not sure if you need Kubernetes yet, or if Docker alone is enough.",
        ]}
        closingLine="We containerise applications properly, then help you decide what, if anything, comes next."
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

      <ServiceFAQ id="faq" heading="Questions about Docker & containerization" faqs={FAQS} />

      <RelatedLinks
        heading="Related containerization resources & services"
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
