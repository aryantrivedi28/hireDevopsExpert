import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Minimum Viable DevOps for Startups: What to Set Up First",
  description:
    "You don't need a full DevOps team on day one. Here's the minimum setup that actually matters for an early-stage product.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do we need Kubernetes from the start?",
    answer: "Almost never, most early-stage products don't need Kubernetes yet, and adding it too early adds complexity without benefit.",
  },
  {
    question: "What's the very first thing to set up?",
    answer: "A basic CI/CD pipeline, even a simple one, tends to have the highest early payoff.",
  },
  {
    question: "When should we revisit this checklist?",
    answer: "When deployments start feeling risky, or when uptime and scale become real business concerns.",
  },
];

const RELATED_LINKS = [
  { label: "DevOps for Startups & SaaS", href: "/devops-for-startups/" },
  { label: "Do I need DevOps for my SaaS?", href: "/blog/do-i-need-devops-for-my-saas/" },
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

export default function MinimumViableDevOpsForStartupsPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Startup Checklist"
        title="Minimum Viable DevOps for Startups: What to Set Up First"
        intro="You don't need a full DevOps team on day one. Here's the minimum setup that actually matters for an early-stage product, and what can reasonably wait."
      />

      <ArticleBody>
        <ArticleSection heading="CI/CD basics">
          <p>
            A simple, automated deploy pipeline, even without extensive tests, beats manual
            deployment almost every time. Start here.
          </p>
        </ArticleSection>

        <ArticleSection heading="Monitoring basics">
          <p>
            Basic uptime and error monitoring is cheap to set up and gives you an early warning
            before a small issue becomes a customer-facing outage.
          </p>
        </ArticleSection>

        <ArticleSection heading="Backups">
          <p>
            Automated, tested backups of your database are non-negotiable, even for a very
            early-stage product. Untested backups are not real backups.
          </p>
        </ArticleSection>

        <ArticleSection heading="Security basics">
          <p>
            Basic access control, secrets management, and dependency scanning cover most of the
            early-stage risk without slowing the team down.
          </p>
        </ArticleSection>

        <ArticleSection heading="What can wait">
          <p>
            Kubernetes, service mesh, multi-region infrastructure, and elaborate observability
            stacks can almost always wait until they&rsquo;re solving a real, current problem -
            not a hypothetical future one.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure what your stage actually needs?"
        body="Tell us where you are and we'll give you an honest read on what's worth setting up now."
        pillarLabel="See DevOps for Startups & SaaS"
        pillarHref="/devops-for-startups/"
      />
    </>
  );
}
