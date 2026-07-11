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
  title: "Kubernetes Cluster Setup Services | In-House DevOps Team",
  description:
    "Production-grade Kubernetes clusters, nodes, namespaces, ingress, and autoscaling, set up correctly by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Cluster provisioning",
    line: "A production-ready cluster on EKS, AKS, GKE, or self-managed.",
  },
  {
    title: "Namespaces & access control",
    line: "Namespaces and RBAC structured for your teams and environments.",
  },
  {
    title: "Ingress & networking",
    line: "Ingress and networking configured for your applications.",
  },
  {
    title: "Autoscaling",
    line: "Cluster and workload autoscaling configured for real traffic patterns.",
  },
  {
    title: "Monitoring",
    line: "Monitoring for the cluster itself, not just the applications on it.",
    href: "/devops-monitoring-observability-services/",
  },
];

const DELIVERABLES = [
  "Kubernetes cluster",
  "Namespace & RBAC structure",
  "Ingress & networking configuration",
  "Autoscaling configuration",
  "Cluster monitoring setup",
  "Documentation & runbooks",
];

const OUTCOMES = [
  "A production-ready cluster from day one",
  "Clear namespace and access boundaries",
  "Apps that scale reliably",
  "A cluster the team can actually operate",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Which Kubernetes platform do you set up clusters on?",
    answer: "EKS, AKS, GKE, or self-managed, whichever fits your cloud and requirements.",
  },
  {
    question: "Do we need Kubernetes, or would something simpler work?",
    answer:
      "We'll give you an honest answer, Kubernetes isn't always the right first step, and we'd rather tell you that than oversell it.",
  },
  {
    question: "Can you set this up alongside our existing infrastructure?",
    answer: "Yes, most cluster setups integrate with existing networking and infrastructure.",
  },
  {
    question: "Do we own the cluster configuration you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Kubernetes Consulting Services", href: "/kubernetes-consulting-services/" },
  { label: "AWS EKS setup", href: "/eks-setup-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kubernetes Cluster Setup Services",
  serviceType: "Kubernetes Cluster Setup",
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

export default function KubernetesClusterSetupServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Kubernetes Cluster Setup Services"
        title="Kubernetes Cluster Setup Services"
        subtitle="Production-grade Kubernetes clusters, nodes, namespaces, ingress, and autoscaling, set up correctly from the start. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When you need a real Kubernetes cluster setup"
        points={[
          "You're moving off a single server or Docker Compose to real orchestration.",
          "A quick, tutorial-based cluster setup needs to become production-ready.",
          "Namespaces, access control, and networking were never properly planned.",
          "Nobody's confident the cluster would hold up under real load.",
        ]}
        closingLine="We set clusters up the way we'd want to operate them ourselves."
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

      <ServiceFAQ id="faq" heading="Questions about Kubernetes cluster setup" faqs={FAQS} />

      <RelatedLinks heading="Related Kubernetes resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
