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
  title: "DevOps for Startups & SaaS | In-House DevOps Team",
  description:
    "DevOps support for SaaS companies and startups, CI/CD, monitoring, and AWS cost control, sized to your stage, delivered by our in-house team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "MVP DevOps",
    line: "The minimum viable DevOps setup for an early-stage product, nothing more, nothing less.",
  },
  {
    title: "CI/CD for SaaS",
    line: "Automated pipelines built for how SaaS teams actually release.",
    href: "/ci-cd-pipeline-setup-services/",
  },
  {
    title: "AWS cost control",
    line: "Keep cloud costs predictable as usage grows.",
    href: "/aws-devops-services/",
  },
  {
    title: "Monitoring & uptime",
    line: "Know when something's wrong before your users do.",
    href: "/devops-monitoring-observability-services/",
  },
  {
    title: "Security basics",
    line: "Sensible security defaults without slowing the team down.",
    href: "/devsecops-services/",
  },
  {
    title: "Scaling support",
    line: "Infrastructure that holds up as usage and traffic grow.",
  },
];

const DELIVERABLES = [
  "MVP DevOps setup",
  "CI/CD pipeline",
  "AWS cost review",
  "Monitoring & alerting setup",
  "Security baseline",
  "Scaling plan",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Faster, safer releases",
  "Predictable AWS costs",
  "Better uptime",
  "Room to scale without a rebuild",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do I need DevOps yet, or is it too early?",
    answer:
      "It depends on your stage. If deployments are getting risky, costs are unpredictable, or uptime is a concern, that's usually the signal.",
  },
  {
    question: "What's the minimum DevOps setup we actually need?",
    answer:
      "CI/CD, basic monitoring, and a documented deployment process cover most early-stage needs, we can help you figure out exactly what's missing.",
  },
  {
    question: "Can you work with a small, early-stage team?",
    answer: "Yes, many of our engagements start with startups at exactly this stage.",
  },
  {
    question: "Will this slow our engineers down?",
    answer: "No, the goal is the opposite: less manual work for your engineering team, not more process.",
  },
  {
    question: "Can we start small before committing to ongoing support?",
    answer: "Yes. Many clients start with a fixed-scope project before moving to a managed retainer.",
  },
];

const RELATED_LINKS = [
  { label: "Do I need DevOps for my SaaS?", href: "/blog/do-i-need-devops-for-my-saas/" },
  { label: "minimum viable DevOps checklist", href: "/blog/minimum-viable-devops-for-startups/" },
  { label: "CI/CD pipeline setup for SaaS", href: "/ci-cd-pipeline-setup-services/" },
  { label: "Managed DevOps Services", href: "/managed-devops-services/" },
  { label: "DevOps support for SaaS companies", href: "/devops-support-for-saas-companies/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DevOps for Startups & SaaS",
  serviceType: "Startup & SaaS DevOps",
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

export default function DevOpsForStartupsPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="DevOps for Startups & SaaS"
        title="DevOps for Startups & SaaS"
        subtitle="DevOps support for SaaS companies and startups alike, CI/CD, monitoring, security, and AWS cost control, sized to an MVP or a scaling product. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="Signs your startup needs DevOps support"
        points={[
          "You're not sure if you actually need DevOps yet, or when.",
          "Releases slow down as the team and codebase grow.",
          "AWS costs are creeping up without a clear reason.",
          "Uptime and scaling become risky as usage grows.",
          "There's no dedicated DevOps person, engineers cover it on the side.",
        ]}
        closingLine="Most startups don't need a full DevOps team on day one, they need the right minimum viable setup, applied at the right time."
      />

      <WhatWeDo id="what" heading="DevOps for startups, sized right" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions from startup founders & CTOs" faqs={FAQS} />

      <RelatedLinks heading="Related guides & services" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
