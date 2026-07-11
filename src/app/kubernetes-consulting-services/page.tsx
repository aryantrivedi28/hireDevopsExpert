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
  title: "Kubernetes Consulting Services | In-House DevOps Team",
  description:
    "Production-grade Kubernetes clusters, Helm, ingress, and autoscaling, set up and managed by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Cluster setup",
    line: "Production-grade clusters on EKS, AKS, GKE, or self-managed.",
    href: "/kubernetes-cluster-setup-services/",
  },
  {
    title: "AWS EKS Setup",
    line: "Kubernetes on AWS, set up and hardened correctly.",
    href: "/eks-setup-services/",
  },
  {
    title: "Helm & deployments",
    line: "Application deployments packaged and managed with Helm.",
  },
  {
    title: "Ingress & networking",
    line: "Ingress, namespaces, and networking configured for your workloads.",
  },
  {
    title: "Autoscaling",
    line: "Clusters and workloads that scale automatically under load.",
  },
  {
    title: "Service mesh",
    line: "Service mesh where it genuinely adds value, not by default.",
  },
  {
    title: "Kubernetes migration",
    line: "Move from Docker Compose, ECS, or another platform onto Kubernetes.",
    href: "/kubernetes-migration-services/",
  },
];

const DELIVERABLES = [
  "Kubernetes cluster setup",
  "Helm charts",
  "Ingress & networking configuration",
  "Autoscaling configuration",
  "Monitoring for cluster & workloads",
  "Documentation & runbooks",
];

const OUTCOMES = [
  "Apps that scale reliably under load",
  "A cluster the team can actually manage",
  "Fewer Kubernetes-related incidents",
  "A clear path for future migrations",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do you work with EKS, AKS, and GKE?",
    answer: "Yes, all three, plus self-managed Kubernetes where that's the right fit.",
  },
  {
    question: "Can you take over an existing, fragile Kubernetes setup?",
    answer:
      "Yes, hardening and stabilising an existing cluster is one of the most common ways this engagement starts.",
  },
  {
    question: "Should we use Kubernetes, or is ECS/something simpler enough for us?",
    answer:
      "We'll give you an honest answer, Kubernetes isn't always the right choice, and we'd rather tell you that than oversell it.",
  },
  {
    question: "Do you help migrate from Docker Compose or another platform?",
    answer: "Yes, see our Kubernetes migration services for how that engagement works.",
  },
  {
    question: "Can you support the cluster on an ongoing basis?",
    answer: "Yes, as a managed retainer once the initial setup is in place.",
  },
];

const RELATED_LINKS = [
  { label: "Kubernetes Cluster Setup Services", href: "/kubernetes-cluster-setup-services/" },
  { label: "AWS EKS setup", href: "/eks-setup-services/" },
  { label: "Kubernetes Migration Services", href: "/kubernetes-migration-services/" },
  { label: "AWS ECS vs EKS", href: "/blog/aws-ecs-vs-eks/" },
  { label: "Docker vs Kubernetes", href: "/blog/docker-vs-kubernetes/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kubernetes Consulting Services",
  serviceType: "Kubernetes Consulting",
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

export default function KubernetesConsultingServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Kubernetes Consulting Services"
        title="Kubernetes Consulting Services"
        subtitle="Production-grade Kubernetes, clusters, Helm, ingress, and autoscaling, set up and managed by our in-house team, on EKS, AKS, GKE, or self-managed."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When Kubernetes needs expert help"
        points={[
          "Your cluster was set up quickly and never properly hardened.",
          "Deployments and scaling feel fragile or unpredictable.",
          "Nobody on the team is fully confident managing Kubernetes.",
          "You're moving from Docker Compose or a single server to real orchestration.",
        ]}
        closingLine="We keep Kubernetes practical, focused on your actual use case, not tutorials."
      />

      <WhatWeDo id="what" heading="What we do with Kubernetes" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about Kubernetes consulting" faqs={FAQS} />

      <RelatedLinks
        heading="Related Kubernetes resources & services"
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
