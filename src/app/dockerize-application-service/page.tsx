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
  title: "Dockerize Application Service | In-House DevOps Team",
  description:
    "Turn an application that isn't containerised into one that is, Dockerfile, Compose, and local-to-prod consistency. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Dockerfile authoring",
    line: "A Dockerfile written specifically for your application and its dependencies.",
  },
  {
    title: "Docker Compose",
    line: "Local development environment matched as closely as possible to production.",
  },
  {
    title: "Environment configuration",
    line: "Environment variables, ports, and volumes handled properly.",
  },
  {
    title: "Database & dependency handling",
    line: "Databases and external dependencies wired in correctly for local and production use.",
  },
];

const DELIVERABLES = [
  "Dockerfile",
  "Docker Compose configuration",
  "Environment configuration",
  "Documentation",
];

const OUTCOMES = [
  "An application that runs consistently across environments",
  "Fewer \"works on my machine\" issues",
  "A foundation for deployment automation",
  "A clear next step if Kubernetes eventually makes sense",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Our app was never designed to be containerised, can you still do this?",
    answer: "In almost all cases, yes, some applications need more adaptation than others, which we'll flag upfront.",
  },
  {
    question: "Is this the same as your Docker Deployment Services?",
    answer:
      "This page is about the initial containerisation step; Docker Deployment Services covers the ongoing deployment pipeline once that's done.",
  },
  {
    question: "Do we own the Dockerfile and configuration you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Docker Consulting & Containerization Services", href: "/docker-consulting-services/" },
  { label: "Docker Deployment Services", href: "/docker-deployment-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dockerize Application Service",
  serviceType: "Application Containerization",
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

export default function DockerizeApplicationServicePage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Dockerize Application Service"
        title="Dockerize Application Service"
        subtitle="Turn an application that isn't containerised into one that is, Dockerfile, Compose, and local-to-prod consistency. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When it's time to containerise your app"
        points={[
          "Your app isn't containerised yet, and setup varies between machines.",
          "\"It works on my machine\" is a real, recurring problem.",
          "Onboarding a new developer means a long, fragile setup process.",
          "You want to eventually move to a proper deployment pipeline.",
        ]}
        closingLine="We containerise the application properly, a foundation for everything that comes after."
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

      <ServiceFAQ id="faq" heading="Questions about containerising your application" faqs={FAQS} />

      <RelatedLinks heading="Related containerization resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
