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
  title: "Prometheus & Grafana Setup Services | In-House DevOps Team",
  description:
    "Metrics collection and dashboards set up with Prometheus and Grafana, exporters, alert rules, and dashboards, by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Prometheus setup",
    line: "Metrics collection configured for your infrastructure and applications.",
  },
  {
    title: "Exporters",
    line: "The right exporters wired up so the metrics that matter are actually captured.",
  },
  {
    title: "Grafana dashboards",
    line: "Dashboards built around what your team actually needs to see.",
  },
  {
    title: "Alert rules",
    line: "Alerts tuned to matter, not noise that gets ignored.",
  },
];

const DELIVERABLES = [
  "Prometheus setup",
  "Exporter configuration",
  "Grafana dashboards",
  "Alert rules",
  "Documentation",
];

const OUTCOMES = [
  "Real visibility into infrastructure and application health",
  "Dashboards the team actually uses",
  "Alerts tuned to matter",
  "A foundation for defining SLOs",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do you self-host Prometheus and Grafana, or use a managed version?",
    answer: "Either, we'll recommend based on your infrastructure and operational preferences.",
  },
  {
    question: "Can you take over an existing, noisy alerting setup?",
    answer: "Yes, tuning an existing, noisy setup is a common starting point.",
  },
  {
    question: "How is this different from your general monitoring services page?",
    answer:
      "This page is scoped specifically to Prometheus and Grafana; our broader monitoring page also covers Datadog and CloudWatch.",
  },
  {
    question: "Do we own the dashboards and configuration you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Monitoring & Observability Services", href: "/devops-monitoring-observability-services/" },
  { label: "Datadog Implementation Services", href: "/datadog-implementation-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prometheus & Grafana Setup Services",
  serviceType: "Prometheus & Grafana Setup",
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

export default function PrometheusGrafanaSetupServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Prometheus & Grafana Setup Services"
        title="Prometheus & Grafana Setup Services"
        subtitle="Metrics collection and dashboards set up with Prometheus and Grafana, exporters, alert rules, and dashboards that the team actually uses. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When you need Prometheus and Grafana set up properly"
        points={[
          "There's no metrics collection in place yet.",
          "Dashboards exist but nobody looks at them.",
          "Alerts are noisy, missing, or ignored.",
          "You're not sure which exporters you even need.",
        ]}
        closingLine="We set up monitoring that's actually useful, not just technically present."
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

      <ServiceFAQ id="faq" heading="Questions about Prometheus & Grafana setup" faqs={FAQS} />

      <RelatedLinks heading="Related monitoring resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
