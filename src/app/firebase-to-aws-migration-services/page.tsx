import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import ProblemValue from "@/components/service/ProblemValue";
import WhatWeDo from "@/components/service/WhatWeDo";
import EngagementModels from "@/components/service/EngagementModels";
import Deliverables from "@/components/service/Deliverables";
import Outcomes from "@/components/service/Outcomes";
import SocialProof from "@/components/home/SocialProof";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import CtaBand from "@/components/service/CtaBand";
import { ENGAGEMENT_MODELS } from "@/lib/engagementModels";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Firebase to AWS Migration Services | In-House DevOps Team",
  description:
    "Move a Firebase backend to AWS, auth, Firestore data, and serverless functions migrated with a tested plan. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Migration assessment",
    line: "A review of your Firebase usage, Auth, Firestore, Functions, Storage, before planning the move.",
  },
  {
    title: "Auth migration",
    line: "Move authentication to Amazon Cognito or another AWS-compatible approach.",
  },
  {
    title: "Data migration",
    line: "Move Firestore/Realtime Database data to DynamoDB, RDS, or another AWS data store.",
  },
  {
    title: "Functions migration",
    line: "Move Cloud Functions to Lambda or another AWS compute option.",
  },
];

const DELIVERABLES = [
  "Migration assessment & plan",
  "Auth migration plan",
  "Data migration (Firestore to AWS)",
  "Functions migrated to AWS compute",
  "Cutover & rollback plan",
];

const OUTCOMES = [
  "A documented, tested migration plan",
  "More infrastructure control than Firebase's platform offers",
  "AWS-native services suited to your application",
  "A migration plan built around minimising disruption",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Why move off Firebase?",
    answer:
      "Common reasons include cost at scale, needing more control over data and infrastructure, or wanting AWS-specific services, we'll help confirm it's the right move for you.",
  },
  {
    question: "Is Firestore data migration risky?",
    answer:
      "Data migration always carries some risk, which is why we plan and test the migration path before touching production data.",
  },
  {
    question: "Can you guarantee zero downtime during the migration?",
    answer:
      "We plan every migration to minimise disruption, but we won't promise a guarantee we can't back up, the right approach depends on your specific setup.",
  },
  {
    question: "Can you support us on AWS after the migration?",
    answer: "Yes, as a managed retainer once the migration is complete.",
  },
];

const RELATED_LINKS = [
  { label: "Cloud Migration & DevOps Migration Services", href: "/cloud-migration-devops-services/" },
  { label: "AWS Migration Services", href: "/aws-migration-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
// PLACEHOLDER: real migration case studies / downtime figures, do not invent. None claimed here.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Firebase to AWS Migration Services",
  serviceType: "Firebase to AWS Migration",
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

export default function FirebaseToAwsMigrationServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Firebase to AWS Migration Services"
        title="Firebase to AWS Migration Services"
        subtitle="Move a Firebase backend to AWS, auth, Firestore data, and serverless functions migrated with a tested plan. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What migration involves", href: "#what" }}
        showMotif={false}
      />

      <ProblemValue
        heading="When you've outgrown Firebase"
        points={[
          "Firebase costs have grown faster than expected at scale.",
          "You need more control over data and infrastructure than Firebase allows.",
          "You need AWS-specific services that Firebase doesn't offer.",
          "You want a documented, tested plan, not a risky, improvised move.",
        ]}
        closingLine="We plan the migration path, especially the data migration, before touching production."
      />

      <WhatWeDo id="what" heading="What migration involves" items={WHAT_WE_DO_ITEMS} />

      <EngagementModels
        heading="Ways to work with us"
        subLine="Not sure which fits? Tell us the problem on a free call and we'll recommend one."
        models={ENGAGEMENT_MODELS}
        className="bg-mist"
      />

      <Deliverables
        heading="What you actually receive"
        items={DELIVERABLES}
        note="Exactly which of these you get depends on the engagement, we scope it on the call."
      />

      <Outcomes
        heading="What changes for your business"
        outcomes={OUTCOMES}
        className="bg-mist"
      />

      <SocialProof />

      <ServiceFAQ id="faq" heading="Questions about migrating from Firebase to AWS" faqs={FAQS} />

      <RelatedLinks heading="Related migration resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
