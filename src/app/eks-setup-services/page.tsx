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
  title: "AWS EKS Setup Services | In-House DevOps Team",
  description:
    "Kubernetes on AWS, EKS clusters, node groups, IAM roles, and networking set up and hardened correctly, by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "EKS cluster setup",
    line: "A production-ready EKS cluster, configured for your workload.",
  },
  {
    title: "Node groups & Fargate",
    line: "Managed node groups or Fargate, depending on what fits your workload.",
  },
  {
    title: "IAM roles for service accounts",
    line: "Least-privilege IAM configured correctly for Kubernetes workloads.",
  },
  {
    title: "VPC & networking",
    line: "Networking designed to keep the cluster secure and performant.",
  },
  {
    title: "Load balancing & ingress",
    line: "AWS load balancers wired to your ingress controller correctly.",
  },
];

const DELIVERABLES = [
  "EKS cluster",
  "Node group / Fargate configuration",
  "IAM roles for service accounts",
  "VPC & networking setup",
  "Load balancer & ingress configuration",
  "Documentation & runbooks",
];

const OUTCOMES = [
  "A properly hardened EKS setup",
  "Correctly scoped IAM permissions for workloads",
  "Reliable networking and load balancing",
  "A cluster your team can operate confidently",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Should we use EKS or ECS?",
    answer:
      "It depends on your team's experience and workload, see our comparison of AWS ECS vs EKS for a fuller breakdown.",
  },
  {
    question: "Can you take over an existing, under-hardened EKS cluster?",
    answer: "Yes, hardening an existing cluster is one of the most common ways this engagement starts.",
  },
  {
    question: "Do you use managed node groups or Fargate?",
    answer: "Either, we'll recommend based on your workload and operational preferences.",
  },
  {
    question: "Do we own the cluster configuration you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Kubernetes Consulting Services", href: "/kubernetes-consulting-services/" },
  { label: "AWS DevOps Services", href: "/aws-devops-services/" },
  { label: "AWS ECS vs EKS", href: "/blog/aws-ecs-vs-eks/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AWS EKS Setup Services",
  serviceType: "AWS EKS Setup",
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

export default function EksSetupServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="AWS EKS Setup Services"
        title="AWS EKS Setup Services"
        subtitle="Kubernetes on AWS, EKS clusters, node groups, IAM roles, and networking set up and hardened correctly. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When you need EKS set up properly"
        points={[
          "You're choosing between EKS and ECS and want an honest recommendation.",
          "An existing EKS cluster was set up quickly and never hardened.",
          "IAM permissions for workloads are broader than they should be.",
          "Networking and load balancing feel fragile or misconfigured.",
        ]}
        closingLine="We set EKS up the way we'd want to operate it ourselves."
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

      <ServiceFAQ id="faq" heading="Questions about AWS EKS setup" faqs={FAQS} />

      <RelatedLinks heading="Related Kubernetes & AWS resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
