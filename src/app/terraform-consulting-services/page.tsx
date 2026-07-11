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
  title: "Terraform Consulting Services | In-House DevOps Team",
  description:
    "Practical, modular Terraform implementation, state, workspaces, and drift detection done right, by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Terraform on AWS",
    line: "AWS infrastructure managed end-to-end with the Terraform AWS provider.",
    href: "/terraform-aws-services/",
  },
  {
    title: "Modules & workspaces",
    line: "Reusable modules and workspaces structured for multiple environments.",
  },
  {
    title: "Remote state management",
    line: "Secure, locked remote state, no more local state file surprises.",
  },
  {
    title: "Terragrunt",
    line: "Terragrunt for teams managing multiple Terraform configurations at scale.",
  },
  {
    title: "Drift detection",
    line: "Know when live infrastructure no longer matches your Terraform code.",
  },
  {
    title: "GitOps automation",
    line: "Terraform changes applied through CI/CD, not from someone's laptop.",
  },
];

const DELIVERABLES = [
  "Terraform codebase",
  "Module & workspace structure",
  "Remote state setup",
  "Drift detection process",
  "CI/CD-driven apply process",
  "Documentation & runbooks",
];

const OUTCOMES = [
  "Infrastructure changes you can trust",
  "Faster, safer infrastructure updates",
  "Consistent environments",
  "Less manual console work",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Can you take over an existing, messy Terraform setup?",
    answer:
      "Yes, cleaning up and restructuring an existing Terraform codebase is one of the most common ways this engagement starts.",
  },
  {
    question: "Do you work with Terragrunt as well as plain Terraform?",
    answer:
      "Yes, where it fits, for teams managing many environments or accounts, Terragrunt often makes sense.",
  },
  {
    question: "Which clouds do you write Terraform for?",
    answer: "AWS, Azure, and GCP, Terraform is cloud-agnostic, and so are we.",
  },
  {
    question: "Do we own the Terraform code you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
  {
    question: "Can you support us after the initial Terraform setup?",
    answer: "Yes, as a managed retainer once the initial setup is in place.",
  },
];

const RELATED_LINKS = [
  { label: "infrastructure as code services", href: "/infrastructure-as-code-services/" },
  { label: "Terraform AWS Services", href: "/terraform-aws-services/" },
  { label: "Terraform vs CloudFormation", href: "/blog/terraform-vs-cloudformation/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Terraform Consulting Services",
  serviceType: "Terraform Consulting",
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

export default function TerraformConsultingServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Terraform Consulting Services"
        title="Terraform & Infrastructure as Code Services"
        subtitle="Practical, modular Terraform implementation, state management, workspaces, and drift detection done right. Delivered by our in-house team, not a one-off freelancer."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we build", href: "#what" }}
      />

      <ProblemValue
        heading="When Terraform needs expert help"
        points={[
          "Terraform state is a mess, or managed inconsistently across environments.",
          "Modules are copy-pasted instead of reused.",
          "Nobody's confident running terraform apply in production.",
          "Infrastructure was hand-built and needs to be brought under Terraform.",
        ]}
        closingLine="We bring practical Terraform experience, not just tutorial-level knowledge."
      />

      <WhatWeDo id="what" heading="What we build with Terraform" items={WHAT_WE_DO_ITEMS} className="bg-mist" />

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

      <ServiceFAQ id="faq" heading="Questions about our Terraform consulting" faqs={FAQS} />

      <RelatedLinks
        heading="Related infrastructure resources"
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
