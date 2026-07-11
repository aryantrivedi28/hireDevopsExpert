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
  title: "Heroku to AWS Migration Services | In-House DevOps Team",
  description:
    "Move off Heroku onto AWS, containers, managed databases, CI/CD, and a tested cutover plan. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Migration assessment",
    line: "A review of your current Heroku setup, dynos, add-ons, and configuration, before planning the move.",
  },
  {
    title: "Containerisation",
    line: "Your app packaged into containers for ECS, EKS, or another AWS compute option.",
  },
  {
    title: "Database migration",
    line: "Move from Heroku Postgres (or other add-ons) to RDS or another managed AWS database.",
  },
  {
    title: "CI/CD rebuild",
    line: "Replace Heroku's build/deploy flow with a CI/CD pipeline suited to AWS.",
  },
  {
    title: "DNS & cutover",
    line: "A tested cutover plan, including DNS changes, with a rollback path.",
  },
];

const DELIVERABLES = [
  "Migration assessment & plan",
  "Containerised application",
  "AWS infrastructure (Terraform)",
  "Database migration",
  "CI/CD pipeline for AWS",
  "Cutover & rollback plan",
];

const OUTCOMES = [
  "A documented, tested migration plan",
  "More control over infrastructure and cost than Heroku offers",
  "A CI/CD process suited to AWS",
  "A migration plan built around minimising disruption",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Why move off Heroku?",
    answer:
      "Common reasons include cost at scale, wanting more infrastructure control, or needing AWS-specific services, we'll help you confirm it's the right move for your situation.",
  },
  {
    question: "Can you guarantee zero downtime during the migration?",
    answer:
      "We plan every migration to minimise disruption, but we won't promise a guarantee we can't back up, the right approach depends on your specific setup.",
  },
  {
    question: "What happens to our Heroku add-ons?",
    answer: "Each add-on needs an AWS equivalent, we map these out as part of the migration plan.",
  },
  {
    question: "Can you support us on AWS after the migration?",
    answer: "Yes, as a managed retainer once the migration is complete.",
  },
];

const RELATED_LINKS = [
  { label: "Cloud Migration & DevOps Migration Services", href: "/cloud-migration-devops-services/" },
  { label: "AWS Migration Services", href: "/aws-migration-services/" },
  { label: "AWS DevOps Services", href: "/aws-devops-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
// PLACEHOLDER: real migration case studies / downtime figures, do not invent. None claimed here.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Heroku to AWS Migration Services",
  serviceType: "Heroku to AWS Migration",
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

export default function HerokuToAwsMigrationServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Heroku to AWS Migration Services"
        title="Heroku to AWS Migration Services"
        subtitle="Move off Heroku onto AWS, containers, managed databases, CI/CD, and a tested cutover plan. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What migration involves", href: "#what" }}
      />

      <ProblemValue
        heading="When you've outgrown Heroku"
        points={[
          "Heroku costs have grown faster than expected at scale.",
          "You need more control over infrastructure than Heroku's platform allows.",
          "You need AWS-specific services that Heroku doesn't offer.",
          "You want a documented plan, not a risky, improvised move.",
        ]}
        closingLine="We plan the migration path before touching your production Heroku app."
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

      <ServiceFAQ id="faq" heading="Questions about migrating from Heroku to AWS" faqs={FAQS} />

      <RelatedLinks heading="Related migration resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
