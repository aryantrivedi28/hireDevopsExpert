import type { Metadata } from "next";
import ServiceHero from "@/components/service/ServiceHero";
import ProblemValue from "@/components/service/ProblemValue";
import WhatWeDo from "@/components/service/WhatWeDo";
import EngagementModels from "@/components/service/EngagementModels";
import ToolsRow from "@/components/service/ToolsRow";
import Deliverables from "@/components/service/Deliverables";
import Outcomes from "@/components/service/Outcomes";
import CostNote from "@/components/service/CostNote";
import SocialProof from "@/components/home/SocialProof";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import CtaBand from "@/components/service/CtaBand";
import { ENGAGEMENT_MODELS } from "@/lib/engagementModels";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "AWS DevOps Services | In-House AWS DevOps Team",
  description:
    "AWS infrastructure, CI/CD, EKS, security, and cost optimisation, managed by an in-house DevOps team, not a marketplace. Book a free AWS DevOps consultation.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Terraform AWS Services",
    line: "Terraform or CloudFormation-managed AWS infrastructure, version-controlled from day one.",
    href: "/terraform-aws-services/",
  },
  {
    title: "Compute (EC2, ECS, EKS, Lambda)",
    line: "The right compute model for your workload, EC2, ECS, EKS, Lambda, plus managed databases like RDS.",
  },
  {
    title: "AWS EKS Setup",
    line: "Production-grade EKS clusters, or ECS if that fits your workload better.",
    href: "/eks-setup-services/",
  },
  {
    title: "CI/CD on AWS",
    line: "Pipelines built with CodePipeline, CodeBuild, or GitHub Actions, your choice.",
    href: "/ci-cd-pipeline-setup-services/",
  },
  {
    title: "Networking & security",
    line: "VPC design, IAM least-privilege access, secrets management, and CloudFront for content delivery.",
  },
  {
    title: "Scaling & reliability",
    line: "Auto Scaling, load balancing, and high availability across zones.",
  },
  {
    title: "Monitoring",
    line: "CloudWatch dashboards and alerts, or Prometheus/Grafana/Datadog if you prefer.",
    href: "/devops-monitoring-observability-services/",
  },
  {
    title: "Cost optimisation",
    line: "Right-sizing, savings plans, waste cleanup, and AWS Well-Architected reviews.",
    href: "/aws-cost-optimization-services/",
  },
  {
    title: "Migration to AWS",
    line: "Move workloads onto AWS, or between AWS accounts and regions, without a chaotic cutover.",
    href: "/aws-migration-services/",
  },
];

const DELIVERABLES = [
  "AWS architecture diagram",
  "Terraform/CloudFormation scripts",
  "CI/CD pipeline",
  "Staging + production environments",
  "IAM/security cleanup",
  "Auto Scaling configuration",
  "CloudWatch dashboards & alerts",
  "AWS cost optimisation report",
  "Documentation & runbooks",
  "Ongoing support plan",
];

const OUTCOMES = [
  "Faster, safer deployments",
  "Lower, more predictable AWS spend",
  "Less downtime",
  "Smoother scaling",
  "A maintainable setup",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do you work with AWS only, or Azure and GCP too?",
    answer:
      "We work with AWS, Azure, and GCP. If you're on AWS, that's where we focus for this engagement, but we're not locked into one cloud.",
  },
  {
    question: "Can you clean up our existing AWS account?",
    answer:
      "Yes, auditing and cleaning up an existing, undocumented, or insecure AWS setup is one of the most common ways engagements start.",
  },
  {
    question: "Can you reduce our AWS bill?",
    answer:
      "Usually, yes, most AWS accounts have some right-sizing or cleanup opportunity. We look at your actual usage before recommending anything, and we don't promise a specific percentage upfront.",
  },
  {
    question: "Can you set up CI/CD specifically for AWS?",
    answer:
      "Yes, using CodePipeline, CodeBuild, GitHub Actions, or whatever fits your workflow, targeting your AWS environment.",
  },
  {
    question: "Do we own the Terraform or infrastructure code you write?",
    answer:
      "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "AWS cost optimization services", href: "/aws-cost-optimization-services/" },
  { label: "AWS EKS setup", href: "/eks-setup-services/" },
  { label: "Terraform AWS services", href: "/terraform-aws-services/" },
  { label: "AWS DevOps consulting services", href: "/aws-devops-consulting-services/" },
  { label: "AWS migration services", href: "/aws-migration-services/" },
  { label: "AWS ECS vs EKS", href: "/blog/aws-ecs-vs-eks/" },
  { label: "How to reduce AWS cloud costs", href: "/blog/how-to-reduce-aws-cloud-costs/" },
  { label: "CI/CD Pipeline Setup Services", href: "/ci-cd-pipeline-setup-services/" },
  { label: "Kubernetes Consulting Services", href: "/kubernetes-consulting-services/" },
  { label: "Managed DevOps Services", href: "/managed-devops-services/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AWS DevOps Services",
  serviceType: "AWS DevOps",
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


export default function AwsDevOpsServicesPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="AWS DevOps Services"
        title="AWS DevOps Services"
        subtitle="We design, automate, and manage your AWS infrastructure, CI/CD, containers, networking, monitoring, and cost control, so your app stays fast, stable, and affordable as it grows. Done-for-you by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do on AWS", href: "#what" }}
      />

      <ProblemValue
        heading="When your AWS setup becomes a problem"
        points={[
          "Your AWS account is messy, insecure, or nobody fully understands it anymore.",
          "The AWS bill keeps climbing and nobody's sure why.",
          "Deployments to AWS are still manual and risky.",
          "The app struggles to scale under load on AWS.",
        ]}
        closingLine="We audit what you have, fix what's fragile, and automate what's manual."
      />

      <WhatWeDo
        id="what"
        heading="What we do on AWS"
        items={WHAT_WE_DO_ITEMS}
        className="bg-mist"
      />

      <EngagementModels
        heading="Ways to work with us"
        subLine="Not sure which fits? Tell us the problem on a free call and we'll recommend one."
        models={ENGAGEMENT_MODELS}
      />

      <ToolsRow
        heading="Tools & AWS services we work with"
        tools={[
          "EC2",
          "ECS",
          "EKS",
          "Lambda",
          "S3",
          "RDS",
          "CloudFront",
          "CloudFormation",
          "CodePipeline",
          "CloudWatch",
          "IAM",
          "VPC",
          "Auto Scaling",
          "Terraform",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
          "Prometheus",
          "Grafana",
          "Datadog",
        ]}
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
        doraNote="DevOps performance is commonly measured with DORA metrics, deployment frequency, lead time for changes, change failure rate, and time to restore service."
        className="bg-mist"
      />

      <CostNote
        heading="Worried about your AWS bill?"
        body="Savings depend entirely on your current setup, right-sizing, unused resources, and reserved or savings-plan coverage all play a part. We look at your actual usage before recommending anything, and we don't promise a number upfront."
        placeholderNote="Specific savings figures are only shared after a real audit of your account."
        linkLabel="See AWS cost optimization services"
        linkHref="/aws-cost-optimization-services/"
      />

      <SocialProof />

      <ServiceFAQ id="faq" heading="Questions about our AWS DevOps services" faqs={FAQS} />

      <RelatedLinks
        heading="Related AWS resources & services"
        links={RELATED_LINKS}
        className="bg-mist"
      />

      <CtaBand
        heading="Want your AWS setup audited before you spend more on it?"
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
