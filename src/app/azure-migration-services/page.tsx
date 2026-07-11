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
  title: "Azure Migration Services | In-House DevOps Team",
  description:
    "Move applications, databases, and infrastructure onto Azure, with a documented plan for cutover, not guesswork. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Migration planning",
    line: "An architecture and cutover plan built before anything moves.",
  },
  {
    title: "Application migration",
    line: "Move applications onto Azure App Service or AKS.",
    href: "/azure-devops-consulting-services/",
  },
  {
    title: "Database migration",
    line: "Move databases with a plan for data integrity and minimal disruption.",
  },
  {
    title: "Infrastructure as Code",
    line: "The new Azure environment defined as code from day one.",
  },
  {
    title: "Cutover & rollback planning",
    line: "A tested cutover plan, with a rollback path if something goes wrong.",
  },
];

const DELIVERABLES = [
  "Migration plan & architecture diagram",
  "Cutover plan",
  "Infrastructure as Code for Azure",
  "Database migration plan",
  "Rollback plan",
  "Documentation & runbooks",
];

const OUTCOMES = [
  "A documented, tested migration plan",
  "Infrastructure defined as code from day one on Azure",
  "A clear rollback path if something goes wrong",
  "A migration plan built around minimising disruption",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Can you guarantee zero downtime during the migration?",
    answer:
      "We plan every migration to minimise disruption, but we won't promise a guarantee we can't back up, the right approach depends on your specific setup.",
  },
  {
    question: "Do you migrate to AKS, App Service, or both?",
    answer: "Either, depending on your workload, we'll recommend based on your application architecture.",
  },
  {
    question: "Do you modernise the architecture during migration?",
    answer:
      "That's an option, we'll recommend based on your timeline and goals, not push modernisation by default.",
  },
  {
    question: "Can you support us after the migration is complete?",
    answer: "Yes, as a managed retainer once the migration is done.",
  },
];

const RELATED_LINKS = [
  { label: "Cloud Migration & DevOps Migration Services", href: "/cloud-migration-devops-services/" },
  { label: "Azure DevOps Consulting Services", href: "/azure-devops-consulting-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
// PLACEHOLDER: real migration case studies / downtime figures, do not invent. None claimed here.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Azure Migration Services",
  serviceType: "Azure Migration",
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

export default function AzureMigrationServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Azure Migration Services"
        title="Azure Migration Services"
        subtitle="Move applications, databases, and infrastructure onto Azure, with a documented plan for cutover, not guesswork. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What migration involves", href: "#what" }}
      />

      <ProblemValue
        heading="When you need to migrate to Azure"
        points={[
          "You've outgrown your current hosting platform.",
          "You need Azure specifically, for ecosystem, compliance, or organisational reasons.",
          "The app or database needs to move without an extended outage.",
          "You want the new environment defined as code, not built by hand.",
        ]}
        closingLine="We plan the cutover before we touch anything in production."
      />

      <WhatWeDo id="what" heading="What migration involves" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about Azure migration" faqs={FAQS} />

      <RelatedLinks heading="Related migration resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
