import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "What Does a DevOps Engineer Do?",
  description:
    "A plain-language breakdown of what a DevOps engineer actually works on, CI/CD, infrastructure, monitoring, security, and automation.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Is DevOps the same as system administration?",
    answer:
      "They overlap, but DevOps engineering puts more emphasis on automation, CI/CD, and treating infrastructure as code, rather than manual server management.",
  },
  {
    question: "Do DevOps engineers write application code?",
    answer: "Some do, but the primary focus is usually infrastructure, automation, and the systems that support application code, not the application itself.",
  },
  {
    question: "Is DevOps a specific job title or a broader practice?",
    answer: "Both, it's a set of practices, and also a common job title for engineers who focus on applying them.",
  },
];

const RELATED_LINKS = [
  { label: "hire a DevOps engineer", href: "/hire-devops-engineer/" },
  { label: "How to hire a DevOps engineer", href: "/blog/how-to-hire-a-devops-engineer/" },
];

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

export default function WhatDoesADevOpsEngineerDoPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Explainer"
        title="What Does a DevOps Engineer Do?"
        intro="A DevOps engineer builds and maintains the systems that get code from a commit to production safely. Here's what that actually covers day to day."
      />

      <ArticleBody>
        <ArticleSection heading="CI/CD pipelines">
          <p>
            Building and maintaining the automated pipelines that test, build, and deploy code
           , so releases don&rsquo;t depend on a person running manual steps.
          </p>
        </ArticleSection>

        <ArticleSection heading="Cloud infrastructure">
          <p>
            Setting up and managing infrastructure on AWS, Azure, or GCP, compute, networking,
            storage, and everything in between, usually defined as code rather than clicked
            together manually.
          </p>
        </ArticleSection>

        <ArticleSection heading="Containers and orchestration">
          <p>
            Packaging applications into containers and, at a certain scale, orchestrating them
            with tools like Kubernetes.
          </p>
        </ArticleSection>

        <ArticleSection heading="Monitoring and incident response">
          <p>
            Setting up monitoring and alerting so problems are caught early, and being part of
            the response when something breaks in production.
          </p>
        </ArticleSection>

        <ArticleSection heading="Security">
          <p>
            Managing access control, secrets, and vulnerability scanning as part of the
            infrastructure and deployment process, not as an afterthought.
          </p>
        </ArticleSection>

        <ArticleSection heading="Automation, broadly">
          <p>
            Replacing manual, repetitive operational work with scripts and systems that do it
            reliably and consistently instead.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Thinking about hiring for this role?"
        body="See what it actually looks like to bring in an experienced DevOps engineer from our in-house team."
        pillarLabel="See how hiring a DevOps engineer works with us"
        pillarHref="/hire-devops-engineer/"
      />
    </>
  );
}
