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
  title: "Jenkins Pipeline Setup | In-House DevOps Team",
  description:
    "CI/CD pipelines built and maintained in Jenkins, Jenkinsfiles, agents, and deployment stages done right, by our in-house DevOps team.",
};

const WHAT_WE_DO_ITEMS = [
  {
    title: "Jenkinsfile authoring",
    line: "Declarative or scripted pipelines, version-controlled alongside your code.",
  },
  {
    title: "Agents & infrastructure",
    line: "Jenkins agents configured to build and deploy reliably.",
  },
  {
    title: "Secrets management",
    line: "Credentials handled properly, not hard-coded into the pipeline.",
  },
  {
    title: "Test automation integration",
    line: "Automated tests wired into the pipeline before anything deploys.",
  },
  {
    title: "Deployment stages & rollback",
    line: "Clear staging and production stages, with a real rollback path.",
  },
];

const DELIVERABLES = [
  "Jenkinsfile(s)",
  "Configured Jenkins agents",
  "Secrets management setup",
  "Staging + production deployment stages",
  "Documentation",
];

const OUTCOMES = [
  "A maintainable, version-controlled Jenkins pipeline",
  "Fewer manual deployment steps",
  "A real rollback path",
  "A pipeline the team can actually maintain",
];

const FAQS: ServiceFaqItem[] = [
  {
    question: "Can you take over an existing, messy Jenkins setup?",
    answer: "Yes, cleaning up and restructuring an existing Jenkins pipeline is a common starting point.",
  },
  {
    question: "Do you self-host Jenkins or use a managed version?",
    answer: "Either, we'll work with whichever setup fits your infrastructure and preferences.",
  },
  {
    question: "Is Jenkins still a good choice, or should we move to something else?",
    answer:
      "It depends on your team and existing setup, we'll give you an honest recommendation rather than pushing a switch by default.",
  },
  {
    question: "Do we own the Jenkinsfiles and configuration you write?",
    answer: "Yes. We sign an NDA before any work starts, and you own everything we build for you.",
  },
];

const RELATED_LINKS = [
  { label: "CI/CD Pipeline Setup Services", href: "/ci-cd-pipeline-setup-services/" },
  { label: "GitHub Actions setup service", href: "/github-actions-setup-service/" },
  { label: "Jenkins vs GitHub Actions", href: "/blog/jenkins-vs-github-actions/" },
];

// PLACEHOLDER: confirm real Organization details (legal name, contact, sameAs URLs)
// before enabling Organization schema site-wide in a later part.
const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jenkins Pipeline Setup",
  serviceType: "Jenkins CI/CD Setup",
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

export default function JenkinsPipelineSetupPage() {
  return (
    <>
      {jsonLdScript("service-jsonld", SERVICE_JSON_LD)}
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ServiceHero
        eyebrow="Jenkins Pipeline Setup"
        title="Jenkins Pipeline Setup"
        subtitle="CI/CD pipelines built and maintained in Jenkins, Jenkinsfiles, agents, secrets, and deployment stages done right. Delivered by our in-house team."
        primaryCta={{ label: "Book a DevOps consultation", href: "/contact/" }}
        secondaryCta={{ label: "What we do", href: "#what" }}
      />

      <ProblemValue
        heading="When your Jenkins setup needs work"
        points={[
          "Jenkins jobs were configured manually and never version-controlled.",
          "Pipeline configuration lives in the Jenkins UI, not in code.",
          "Credentials are hard-coded or handled inconsistently.",
          "Nobody's fully confident maintaining the current setup.",
        ]}
        closingLine="We bring your Jenkins pipeline under version control and make it maintainable."
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

      <ServiceFAQ id="faq" heading="Questions about Jenkins pipeline setup" faqs={FAQS} />

      <RelatedLinks heading="Related CI/CD resources" links={RELATED_LINKS} className="bg-mist" />

      <CtaBand
        heading="Tell us what's breaking. We'll tell you how we'd fix it."
        ctaLabel="Book a DevOps consultation"
        ctaHref="/contact/"
      />
    </>
  );
}
