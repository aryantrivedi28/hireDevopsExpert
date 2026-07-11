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
  title: "Cloud Migration & DevOps Migration Services | In-House DevOps Team",
  description:
    "Move to the cloud, between clouds, or off a platform you've outgrown, with a clear cutover plan, delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "AWS migration",
    line: "Move applications and infrastructure onto AWS.",
    href: "/aws-migration-services/",
  },
  {
    title: "Azure migration",
    line: "Move applications and infrastructure onto Azure.",
    href: "/azure-migration-services/",
  },
  {
    title: "Replatforming & modernisation",
    line: "Not just a lift-and-shift, modernise where it makes sense.",
  },
  {
    title: "Containerisation",
    line: "Move workloads into containers as part of the migration.",
  },
  {
    title: "Database migration",
    line: "Move databases with a plan for data integrity and minimal disruption.",
  },
  {
    title: "Cutover planning",
    line: "A clear, tested cutover plan, not a leap of faith.",
  },
];

const DELIVERABLES = [
  "Migration plan & architecture diagram",
  "Cutover plan",
  "Infrastructure as Code for the new environment",
  "Database migration plan",
  "Rollback plan",
  "Documentation & runbooks",
  "Ongoing support plan",
];

const OUTCOMES = [
  "A documented, tested migration plan",
  "Modernised infrastructure post-migration",
  "A clear rollback path if something goes wrong",
  "A migration plan built around minimising disruption",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Can you guarantee zero downtime during migration?",
    answer:
      "We plan every migration to minimise disruption, but we won't promise a guarantee we can't back up, the right approach depends on your specific setup.",
  },
  {
    question: "Which clouds do you migrate to?",
    answer: "AWS and Azure primarily, and GCP where that's the right fit.",
  },
  {
    question: "Can you migrate us off a platform we've outgrown, like Heroku?",
    answer: "Yes, moving off a platform you've outgrown onto AWS or Azure is a common engagement.",
  },
  {
    question: "Do you modernise the architecture during migration, or just move it as-is?",
    answer:
      "Both are options, we'll recommend based on your timeline and goals, not push modernisation by default.",
  },
  {
    question: "Can you support us after the migration is complete?",
    answer: "Yes, as a managed retainer once the migration is done.",
  },
];

const RELATED_LINKS = [
  { label: "AWS Migration Services", href: "/aws-migration-services/" },
  { label: "Azure Migration Services", href: "/azure-migration-services/" },
  { label: "Heroku to AWS Migration Services", href: "/heroku-to-aws-migration-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
// PLACEHOLDER: real migration case studies / downtime figures, do not invent. None claimed here.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloud Migration & DevOps Migration Services",
  serviceType: "Cloud Migration",
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

export default function CloudMigrationDevOpsServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Cloud Migration Services"
        title="Cloud Migration & DevOps Migration Services"
        subtitle="Move to the cloud, between clouds, or off a platform you've outgrown, with a clear plan for cutover and downtime, not guesswork. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What migration involves", href: "#what" }}
      />

      <ProblemValue
        heading="When cloud migration becomes necessary"
        points={[
          "You've outgrown your current hosting platform.",
          "You need to move between clouds, or to a specific one for cost or compliance reasons.",
          "The app or database needs to move without an extended outage.",
          "Legacy infrastructure needs modernising, not just relocating.",
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

      <ServiceFAQ id="faq" heading="Questions about cloud migration" faqs={FAQS} />

      <RelatedLinks
        heading="Related migration services"
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
