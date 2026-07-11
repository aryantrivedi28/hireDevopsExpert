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
  title: "Kubernetes Migration Services | In-House DevOps Team",
  description:
    "Move from Docker Compose, ECS, or another platform onto Kubernetes, with a tested rollout and rollback plan. Delivered by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Migration planning",
    line: "An assessment of your current setup and a realistic plan for moving to Kubernetes.",
  },
  {
    title: "Containerisation",
    line: "Applications packaged into containers where they aren't already.",
    href: "/docker-consulting-services/",
  },
  {
    title: "Cluster setup",
    line: "A production-ready cluster to migrate onto.",
    href: "/kubernetes-cluster-setup-services/",
  },
  {
    title: "Rollout & rollback plan",
    line: "A staged migration with a tested path back if something goes wrong.",
  },
];

const DELIVERABLES = [
  "Migration assessment & plan",
  "Kubernetes cluster",
  "Helm charts / manifests",
  "Rollout & rollback plan",
  "Documentation & runbooks",
];

const OUTCOMES = [
  "A documented, tested migration plan",
  "Apps running reliably on Kubernetes",
  "A clear rollback path if something goes wrong",
  "A team that understands the new setup",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "What are we migrating from?",
    answer: "Docker Compose, ECS, a single server, or another orchestration platform, the plan adapts to your starting point.",
  },
  {
    question: "Do we need Kubernetes, or would something simpler work?",
    answer:
      "We'll give you an honest answer before recommending a migration, Kubernetes isn't always the right next step.",
  },
  {
    question: "Can you guarantee zero downtime during migration?",
    answer:
      "We plan every migration to minimise disruption, but we won't promise a guarantee we can't back up, the right approach depends on your specific setup.",
  },
  {
    question: "Can you support the cluster after migration?",
    answer: "Yes, as a managed retainer once the migration is complete.",
  },
];

const RELATED_LINKS = [
  { label: "Kubernetes Consulting Services", href: "/kubernetes-consulting-services/" },
  { label: "Docker vs Kubernetes", href: "/blog/docker-vs-kubernetes/" },
  { label: "Cloud Migration & DevOps Migration Services", href: "/cloud-migration-devops-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kubernetes Migration Services",
  serviceType: "Kubernetes Migration",
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

export default function KubernetesMigrationServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Kubernetes Migration Services"
        title="Kubernetes Migration Services"
        subtitle="Move from Docker Compose, ECS, or another platform onto Kubernetes, with a tested rollout and rollback plan. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What migration involves", href: "#what" }}
      />

      <ProblemValue
        heading="When it's time to migrate to Kubernetes"
        points={[
          "You've outgrown Docker Compose or a single-server setup.",
          "Your current orchestration platform no longer fits your needs.",
          "Scaling and deployment consistency are becoming real problems.",
          "You want a tested plan, not a risky one-shot cutover.",
        ]}
        closingLine="We assess whether Kubernetes is actually the right move before planning the migration itself."
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

      <ServiceFAQ id="faq" heading="Questions about Kubernetes migration" faqs={FAQS} />

      <RelatedLinks heading="Related Kubernetes resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
