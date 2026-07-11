import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "How to Set Up a CI/CD Pipeline for SaaS Products",
  description:
    "The core pieces of a CI/CD pipeline for a SaaS product, staging, testing, rollback, and deployment, explained plainly.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do I need a staging environment before production?",
    answer:
      "Almost always, yes, it's the single highest-value environment for catching issues before customers see them.",
  },
  {
    question: "What should trigger a deployment?",
    answer:
      "Most SaaS teams deploy on merge to a main branch after tests pass, though the exact trigger depends on your release process.",
  },
  {
    question: "Do database migrations need special handling in the pipeline?",
    answer:
      "Yes, migrations typically need to run as a distinct, ordered step, with a rollback plan considered separately from the application code.",
  },
];

const RELATED_LINKS = [
  { label: "CI/CD Pipeline Setup Services", href: "/ci-cd-pipeline-setup-services/" },
  { label: "DevOps for Startups & SaaS", href: "/devops-for-startups/" },
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

export default function HowToSetUpCiCdPipelineForSaasPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="CI/CD Guide"
        title="How to Set Up a CI/CD Pipeline for SaaS Products"
        intro="A SaaS CI/CD pipeline needs to cover a few core pieces well: automated tests, staging and production environments, database migrations, and a real rollback path. Here's how the pieces fit together."
      />

      <ArticleBody>
        <ArticleSection heading="Start with the environments">
          <p>
            Most SaaS teams need at least staging and production environments that mirror each
            other closely enough that &ldquo;it worked in staging&rdquo; actually means
            something. Some teams add a preview environment per pull request; that&rsquo;s a
            refinement, not a starting requirement.
          </p>
        </ArticleSection>

        <ArticleSection heading="Automated testing in the pipeline">
          <p>
            Tests should run automatically on every change, before anything deploys. Where tests
            don&rsquo;t exist yet, establishing even a basic suite is usually higher-value than
            perfecting the pipeline around an empty test folder.
          </p>
        </ArticleSection>

        <ArticleSection heading="Handling database migrations">
          <p>
            Migrations need to run as an explicit, ordered step, usually before the new
            application code goes live, with a clear plan for what happens if a migration fails
            partway through.
          </p>
        </ArticleSection>

        <ArticleSection heading="Deployment and rollback">
          <p>
            Deployment should be the same, repeatable process every time, not a set of manual
            steps someone remembers. Rollback should be a routine action, not a crisis response
            improvised under pressure.
          </p>
        </ArticleSection>

        <ArticleSection heading="Tool choice matters less than the process">
          <p>
            Jenkins, GitHub Actions, GitLab CI, or Bitbucket Pipelines can all support this
            structure well. The process, environments, tests, migrations, rollback, matters
            more than which tool runs it. See our{" "}
            <a href="/ci-cd-pipeline-setup-services/" className="text-teal-deep underline">
              CI/CD Pipeline Setup Services
            </a>{" "}
            page for how we approach this end to end.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Want a second opinion on your pipeline?"
        body="We'll review your existing CI/CD setup and tell you honestly what's working and what isn't."
        pillarLabel="See our CI/CD Pipeline Setup Services"
        pillarHref="/ci-cd-pipeline-setup-services/"
      />
    </>
  );
}
