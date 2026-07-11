import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "How to Hire a DevOps Engineer | Hiring Guide",
  description:
    "What to look for, what to ask, and what to avoid when hiring a DevOps engineer, a practical guide for founders and CTOs.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "What's the single most important skill to check for?",
    answer:
      "Hands-on experience with CI/CD and cloud infrastructure, demonstrated with real examples, not just familiarity with tool names.",
  },
  {
    question: "Should I hire one engineer or work with a team?",
    answer:
      "Depends on your stage and workload. A single hire can be a single point of failure; a team (in-house or through a managed engagement) spreads that risk.",
  },
  {
    question: "How long does a good DevOps hire usually take?",
    answer:
      "It varies by market and role seniority, there's no fixed number we'll state as fact here.",
  },
];

const RELATED_LINKS = [
  { label: "hire a DevOps engineer", href: "/hire-devops-engineer/" },
  { label: "When should you hire a DevOps engineer?", href: "/blog/when-to-hire-a-devops-engineer/" },
  {
    label: "DevOps engineer hourly rate & cost",
    href: "/blog/devops-engineer-hourly-rate-cost/",
  },
  {
    label: "Dedicated DevOps engineer vs. freelance",
    href: "/blog/dedicated-devops-engineer-vs-freelance/",
  },
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

export default function HowToHireADevOpsEngineerPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Hiring Guide"
        title="How to Hire a DevOps Engineer"
        intro="Hiring a DevOps engineer means evaluating a mix of cloud, automation, and reliability skills, not just years of experience. Here's what to look for, what to ask, and the mistakes that make this hire go wrong."
      />

      <ArticleBody>
        <ArticleSection heading="What does a DevOps engineer actually do?">
          <p>
            A DevOps engineer builds and maintains the systems that get code from a commit to
            production safely, CI/CD pipelines, cloud infrastructure, containers, monitoring,
            and the automation that ties it together. The exact mix of responsibilities varies
            by company and by how mature the existing setup already is.
          </p>
        </ArticleSection>

        <ArticleSection heading="Core skills to look for">
          <ul className="flex flex-col gap-2">
            <li>• CI/CD pipeline setup and maintenance (Jenkins, GitHub Actions, GitLab CI, etc.)</li>
            <li>• Cloud platform experience (AWS, Azure, or GCP, ideally the one you use)</li>
            <li>• Infrastructure as Code (Terraform or CloudFormation)</li>
            <li>• Containers and orchestration (Docker, Kubernetes) where relevant to your stack</li>
            <li>• Monitoring and incident response experience</li>
            <li>• Scripting ability, not just tool configuration</li>
          </ul>
        </ArticleSection>

        <ArticleSection heading="Interview questions that actually reveal skill">
          <p>
            Ask candidates to walk through a real incident they&rsquo;ve handled, a pipeline
            they&rsquo;ve built end-to-end, or a piece of infrastructure they&rsquo;ve had to
            debug under pressure. Vague, tool-name-dropping answers without a concrete story are
            a signal to dig deeper.
          </p>
        </ArticleSection>

        <ArticleSection heading="Red flags to watch for">
          <ul className="flex flex-col gap-2">
            <li>• No hands-on examples, only certifications or course completions</li>
            <li>• Can&rsquo;t explain a decision they made, only what tool they used</li>
            <li>• No experience with incidents or production ownership</li>
            <li>• Discomfort discussing rollback or failure scenarios</li>
          </ul>
        </ArticleSection>

        <ArticleSection heading="Full-time hire, freelancer, or a team?">
          <p>
            Each model has real tradeoffs, see our comparison of a{" "}
            <a
              href="/blog/dedicated-devops-engineer-vs-freelance/"
              className="text-teal-deep underline"
            >
              dedicated DevOps engineer vs. freelance
            </a>{" "}
            for a fuller breakdown. On cost specifically, see our note on{" "}
            <a
              href="/blog/devops-engineer-hourly-rate-cost/"
              className="text-teal-deep underline"
            >
              DevOps engineer hourly rate & cost
            </a>
            {" "}rather than relying on a single number here.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure this is the right hiring model for you?"
        body="Tell us what you need and we'll tell you honestly whether a hire, a retainer, or a fixed-scope project fits best."
        pillarLabel="See how hiring a DevOps engineer works with us"
        pillarHref="/hire-devops-engineer/"
      />
    </>
  );
}
