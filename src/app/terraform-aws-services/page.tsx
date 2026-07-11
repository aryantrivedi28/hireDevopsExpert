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
  title: "Terraform AWS Services | In-House DevOps Team",
  description:
    "AWS infrastructure managed end-to-end with the Terraform AWS provider, VPC, IAM, EKS, RDS, and CI/CD-driven applies, by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Terraform AWS provider",
    line: "AWS resources managed through the Terraform AWS provider, not the console.",
  },
  {
    title: "VPC & networking",
    line: "Network infrastructure defined and version-controlled as code.",
  },
  {
    title: "IAM as code",
    line: "IAM roles and policies defined in Terraform, not clicked together manually.",
  },
  {
    title: "EKS & RDS modules",
    line: "Reusable Terraform modules for EKS clusters, RDS databases, and other core AWS services.",
  },
  {
    title: "Remote state on AWS",
    line: "S3 and DynamoDB-backed remote state, set up securely.",
  },
];

const DELIVERABLES = [
  "Terraform codebase for AWS",
  "VPC & networking modules",
  "IAM-as-code",
  "Remote state setup",
  "CI/CD-driven Terraform apply process",
  "Documentation",
];

const OUTCOMES = [
  "AWS infrastructure you can recreate from code",
  "Fewer manual console changes",
  "Reviewable, auditable AWS infrastructure changes",
  "A foundation for future AWS growth",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Can you convert our existing, manually-configured AWS account into Terraform?",
    answer: "Yes, this is one of the most common ways this engagement starts.",
  },
  {
    question: "Do you use Terraform Cloud, or self-managed state?",
    answer: "Either, we'll recommend based on your team size and existing tooling.",
  },
  {
    question: "Can you also cover the CI/CD side, not just the Terraform code?",
    answer: "Yes, see our CI/CD Pipeline Setup Services page for how that fits together.",
  },
  {
    question: "Do we own the Terraform code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "Terraform Consulting Services", href: "/terraform-consulting-services/" },
  { label: "AWS DevOps Services", href: "/aws-devops-services/" },
  { label: "infrastructure as code services", href: "/infrastructure-as-code-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Terraform AWS Services",
  serviceType: "Terraform AWS Infrastructure",
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

export default function TerraformAwsServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Terraform AWS Services"
        title="Terraform AWS Services"
        subtitle="AWS infrastructure managed end-to-end with the Terraform AWS provider, VPC, IAM, EKS, RDS, and CI/CD-driven applies. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When AWS needs to become Terraform-managed"
        points={[
          "Your AWS account was built up manually over time.",
          "There's no way to reliably recreate your AWS environment from scratch.",
          "IAM permissions were clicked together and never reviewed as a whole.",
          "You want AWS changes reviewed like code, not applied directly in the console.",
        ]}
        closingLine="We bring practical Terraform experience specifically on AWS, not just generic IaC knowledge."
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

      <ServiceFAQ id="faq" heading="Questions about Terraform on AWS" faqs={FAQS} />

      <RelatedLinks heading="Related infrastructure resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
