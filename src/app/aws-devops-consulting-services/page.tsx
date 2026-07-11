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
  title: "AWS DevOps Consulting Services | In-House DevOps Team",
  description:
    "Hands-on AWS consulting, account setup, CI/CD, IaC, and security review, from our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "AWS account setup & review",
    line: "A clean, secure AWS account structure, or a review of your existing one.",
  },
  {
    title: "CI/CD on AWS",
    line: "Pipelines built to deploy into your AWS environment.",
    href: "/ci-cd-pipeline-setup-services/",
  },
  {
    title: "Infrastructure as Code",
    line: "AWS infrastructure managed with Terraform.",
    href: "/terraform-aws-services/",
  },
  {
    title: "Security & cost review",
    line: "A practical look at IAM, access, and where cost is being wasted.",
    href: "/aws-cost-optimization-services/",
  },
];

const DELIVERABLES = [
  "AWS account review",
  "CI/CD pipeline",
  "Terraform-managed infrastructure",
  "IAM/security findings",
  "Cost review findings",
  "Documentation & runbooks",
];

const OUTCOMES = [
  "A clearer, more secure AWS account",
  "Faster, safer AWS deployments",
  "Infrastructure you can recreate and audit",
  "A starting point for cost optimisation",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "How is this different from your AWS DevOps Services page?",
    answer:
      "This page is scoped to hands-on AWS consulting, reviews, setup, and specific implementation work. Our AWS DevOps Services page covers the fuller ongoing offering.",
  },
  {
    question: "Can you review an existing AWS account?",
    answer: "Yes, an AWS account and cost review is a common starting point.",
  },
  {
    question: "Do you help with AWS security specifically?",
    answer: "Yes, as part of the review, IAM, access, and common misconfigurations.",
  },
  {
    question: "Do we own the infrastructure code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "AWS DevOps Services", href: "/aws-devops-services/" },
  { label: "Terraform AWS Services", href: "/terraform-aws-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AWS DevOps Consulting Services",
  serviceType: "AWS DevOps Consulting",
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

export default function AwsDevOpsConsultingServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="AWS DevOps Consulting Services"
        title="AWS DevOps Consulting Services"
        subtitle="Hands-on AWS consulting, account setup, CI/CD, infrastructure as code, and a real security and cost review. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When you need AWS consulting help"
        points={[
          "Your AWS account has grown organically, without a clear structure.",
          "Nobody's fully reviewed IAM permissions or security settings.",
          "Deployments to AWS are manual or inconsistent.",
          "You suspect you're paying for more than you need.",
        ]}
        closingLine="We start with a review, then fix what's fragile and automate what's manual."
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

      <ServiceFAQ id="faq" heading="Questions about our AWS DevOps consulting" faqs={FAQS} />

      <RelatedLinks heading="Related AWS resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
