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
  title: "DevOps Automation Services | In-House DevOps Team",
  description:
    "Deployment, infrastructure, and release automation, delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Deployment automation",
    line: "Deployments that run the same way every time, without manual steps.",
    href: "/ci-cd-pipeline-setup-services/",
  },
  {
    title: "Infrastructure automation",
    line: "Infrastructure provisioned and changed through code, not by hand.",
    href: "/infrastructure-automation-services/",
  },
  {
    title: "Cloud automation",
    line: "Cloud operations, scaling, backups, cleanup, automated end to end.",
    href: "/cloud-automation-services/",
  },
  {
    title: "Release automation",
    line: "Consistent, repeatable release processes instead of manual runbooks.",
  },
  {
    title: "Script consolidation",
    line: "Turn scattered scripts into maintainable, documented automation.",
  },
  {
    title: "IaC-driven pipelines",
    line: "Infrastructure as Code wired directly into your deployment pipelines.",
  },
];

const DELIVERABLES = [
  "Automated deployment pipeline",
  "Infrastructure automation scripts",
  "Release automation process",
  "Documentation for all automation",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Less manual, repetitive work",
  "Fewer human-error incidents",
  "Faster, more consistent releases",
  "Infrastructure changes that are easy to repeat",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "What kind of manual work can actually be automated?",
    answer:
      "Most repetitive deployment, infrastructure, and release tasks can be automated, we'll tell you honestly if something doesn't make sense to automate yet.",
  },
  {
    question: "We already have some automation scripts, can you build on them?",
    answer: "Yes, consolidating and improving existing scripts is a common starting point.",
  },
  {
    question: "Is this the same as CI/CD setup?",
    answer:
      "CI/CD is part of it, automation also covers infrastructure changes, releases, and operational tasks beyond the pipeline itself.",
  },
  {
    question: "Do we own the automation code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
  {
    question: "Can you maintain the automation afterwards?",
    answer: "Yes, as a managed retainer once the initial automation is in place.",
  },
];

const RELATED_LINKS = [
  { label: "Infrastructure Automation Services", href: "/infrastructure-automation-services/" },
  { label: "Cloud Automation Services", href: "/cloud-automation-services/" },
  { label: "CI/CD Pipeline Setup Services", href: "/ci-cd-pipeline-setup-services/" },
  { label: "Terraform Consulting Services", href: "/terraform-consulting-services/" },
  { label: "AWS DevOps Services", href: "/aws-devops-services/" },
  { label: "Kubernetes Consulting Services", href: "/kubernetes-consulting-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DevOps Automation Services",
  serviceType: "DevOps Automation",
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

export default function DevOpsAutomationServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="DevOps Automation Services"
        title="DevOps Automation Services"
        subtitle="Replace manual scripts and repetitive steps with real automation, deployment, infrastructure, and release automation, tied together by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we automate", href: "#what" }}
      />

      <ProblemValue
        heading="When manual work needs to become automation"
        points={[
          "The same manual steps get repeated for every deployment.",
          "Infrastructure changes are made by hand, one at a time.",
          "Releases depend on someone remembering the right sequence of steps.",
          "Automation exists, but it's a patchwork of scripts nobody fully understands.",
        ]}
        closingLine="We connect the pieces, CI/CD, infrastructure, and releases, into automation that actually holds up."
      />

      <WhatWeDo id="what" heading="What we automate" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about DevOps automation" faqs={FAQS} />

      <RelatedLinks
        heading="Related automation services"
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
