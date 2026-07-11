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
  title: "Datadog Implementation Services | In-House DevOps Team",
  description:
    "Datadog set up for real observability, APM, logs, metrics, and monitors that your team actually uses. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "APM setup",
    line: "Application performance monitoring configured for your services.",
  },
  {
    title: "Logs & metrics",
    line: "Logs and metrics pipelines set up and connected to the right dashboards.",
  },
  {
    title: "Monitors & alerts",
    line: "Alerts tuned to matter, not noise that gets ignored.",
  },
  {
    title: "Integrations",
    line: "Datadog wired into your cloud provider, CI/CD, and infrastructure.",
  },
];

const DELIVERABLES = [
  "Datadog APM setup",
  "Log & metric pipelines",
  "Dashboards",
  "Monitors & alert rules",
  "Documentation",
];

const OUTCOMES = [
  "Real visibility into application and infrastructure health",
  "Dashboards the team actually uses",
  "Alerts tuned to matter",
  "Faster root-cause analysis during incidents",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "We already have a Datadog account, can you improve it?",
    answer: "Yes, cleaning up and improving an existing, underused Datadog setup is a common starting point.",
  },
  {
    question: "How is this different from your Prometheus/Grafana service?",
    answer:
      "This page is scoped specifically to Datadog; our broader monitoring services page also covers Prometheus, Grafana, and CloudWatch.",
  },
  {
    question: "Do we own the dashboards and monitors you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Monitoring & Observability Services", href: "/devops-monitoring-observability-services/" },
  { label: "Prometheus and Grafana setup", href: "/prometheus-grafana-setup-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Datadog Implementation Services",
  serviceType: "Datadog Implementation",
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

export default function DatadogImplementationServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Datadog Implementation Services"
        title="Datadog Implementation Services"
        subtitle="Datadog set up for real observability, APM, logs, metrics, and monitors that your team actually uses. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When Datadog needs to be set up properly"
        points={[
          "Datadog is installed but barely configured beyond the defaults.",
          "Dashboards exist but nobody looks at them.",
          "Monitors are noisy, missing, or ignored.",
          "You're paying for Datadog without getting real value from it.",
        ]}
        closingLine="We set up Datadog so it's actually useful, not just technically present."
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

      <ServiceFAQ id="faq" heading="Questions about Datadog implementation" faqs={FAQS} />

      <RelatedLinks heading="Related monitoring resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
