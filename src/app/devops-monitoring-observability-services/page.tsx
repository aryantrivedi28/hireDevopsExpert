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
  title: "Monitoring & Observability Services | In-House DevOps Team",
  description:
    "Continuous monitoring, alerting, and observability, Prometheus, Grafana, Datadog, or CloudWatch, set up and managed by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Prometheus & Grafana",
    line: "Metrics and dashboards set up with Prometheus and Grafana.",
    href: "/prometheus-grafana-setup-services/",
  },
  {
    title: "Datadog",
    line: "Full-stack observability with Datadog, where that's the right fit.",
    href: "/datadog-implementation-services/",
  },
  {
    title: "CloudWatch",
    line: "Native AWS monitoring and alerting with CloudWatch.",
  },
  {
    title: "Logs, metrics & traces",
    line: "A single, correlated view across logs, metrics, and distributed traces.",
  },
  {
    title: "Alerting",
    line: "Alerts tuned to matter, not noise that gets ignored.",
  },
  {
    title: "SLOs & uptime",
    line: "Clear service-level objectives so \"reliable\" has an actual definition.",
  },
  {
    title: "Incident response",
    line: "A process for what happens the moment something breaks.",
  },
];

const DELIVERABLES = [
  "Monitoring & alerting setup",
  "Dashboards",
  "SLO definitions",
  "Incident response process",
  "Runbooks & documentation",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Problems caught before users notice",
  "Faster incident response",
  "Clear uptime targets",
  "Less alert noise",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Which monitoring tools do you use?",
    answer: "Prometheus and Grafana, Datadog, or CloudWatch, whichever fits your stack and budget.",
  },
  {
    question: "Can you fix noisy or missing alerts in our existing setup?",
    answer: "Yes, tuning an existing, noisy alerting setup is a common starting point.",
  },
  {
    question: "Do you help define SLOs?",
    answer: "Yes, we help you set realistic service-level objectives rather than guessing at uptime targets.",
  },
  {
    question: "Can you support incident response, not just monitoring?",
    answer: "Yes, as part of a managed retainer once monitoring is in place.",
  },
  {
    question: "Do we own the dashboards and configuration you build?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Prometheus and Grafana setup", href: "/prometheus-grafana-setup-services/" },
  { label: "Datadog Implementation Services", href: "/datadog-implementation-services/" },
  { label: "DevOps monitoring checklist", href: "/blog/monitoring-checklist/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Monitoring & Observability Services",
  serviceType: "DevOps Monitoring & Observability",
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

export default function MonitoringObservabilityServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Monitoring & Observability Services"
        title="Monitoring & Observability Services"
        subtitle="Continuous monitoring, alerting, and observability, so you know when something's wrong before your users do. Set up and managed by our in-house team, using Prometheus, Grafana, Datadog, or CloudWatch."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we set up", href: "#what" }}
      />

      <ProblemValue
        heading="Signs your monitoring isn't working"
        points={[
          "You find out about outages from your users, not your monitoring.",
          "There's no clear SLO or uptime target to measure against.",
          "Alerts are noisy, ignored, or missing entirely.",
          "Logs, metrics, and traces live in different places with no single view.",
        ]}
        closingLine="Good observability means you see problems before they become incidents."
      />

      <WhatWeDo id="what" heading="What we set up" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about monitoring & observability" faqs={FAQS} />

      <RelatedLinks
        heading="Related monitoring resources & services"
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
