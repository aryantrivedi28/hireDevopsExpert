import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Jenkins vs GitHub Actions: Which CI/CD Tool Should You Use?",
  description:
    "How Jenkins and GitHub Actions compare on cost, maintainability, and ecosystem, and how to think about the choice for your team.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Is GitHub Actions easier to maintain than Jenkins?",
    answer:
      "Generally yes, GitHub Actions requires less infrastructure management since it's hosted, while Jenkins typically needs a self-managed server.",
  },
  {
    question: "Is Jenkins still worth using?",
    answer:
      "Yes, especially for teams with existing Jenkins expertise or complex, highly customised pipeline needs that benefit from its plugin ecosystem.",
  },
  {
    question: "Can we migrate from Jenkins to GitHub Actions?",
    answer: "Yes, this is a common migration, though the effort depends on how complex your existing Jenkins pipelines are.",
  },
];

const RELATED_LINKS = [
  { label: "CI/CD Pipeline Setup Services", href: "/ci-cd-pipeline-setup-services/" },
  { label: "Jenkins pipeline setup", href: "/jenkins-pipeline-setup/" },
  { label: "GitHub Actions setup service", href: "/github-actions-setup-service/" },
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

export default function JenkinsVsGitHubActionsPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Comparison"
        title="Jenkins vs GitHub Actions: Which CI/CD Tool Should You Use?"
        intro="Jenkins and GitHub Actions solve the same core problem, automating build, test, and deploy, with different tradeoffs in hosting, maintainability, and ecosystem."
      />

      <ArticleBody>
        <ArticleSection heading="Hosting and maintenance">
          <p>
            GitHub Actions is hosted by GitHub, so there&rsquo;s no server to maintain unless you
            choose self-hosted runners. Jenkins typically runs on infrastructure you manage
            yourself, which means more control but more upkeep.
          </p>
        </ArticleSection>

        <ArticleSection heading="Ecosystem and plugins">
          <p>
            Jenkins has a long-established plugin ecosystem covering nearly any integration.
            GitHub Actions has a growing marketplace of actions and tighter native integration
            if your code already lives on GitHub.
          </p>
        </ArticleSection>

        <ArticleSection heading="Learning curve">
          <p>
            GitHub Actions&rsquo; YAML-based workflows are often quicker to pick up for teams
            already using GitHub. Jenkins has more depth and flexibility, which comes with a
            steeper learning curve.
          </p>
        </ArticleSection>

        <ArticleSection heading="Cost considerations">
          <p>
            {/* [VERIFY current]: hosted runner pricing and self-hosted infra costs change over time */}
            GitHub Actions bills based on usage for hosted runners; Jenkins costs come from the
            infrastructure you run it on. Exact pricing details change over time, verify
            current figures directly rather than relying on older comparisons.
          </p>
        </ArticleSection>

        <ArticleSection heading="Our take">
          <p>
            If you&rsquo;re already on GitHub and want less infrastructure to manage, GitHub
            Actions is a strong default. If you need Jenkins&rsquo; plugin depth or already have
            Jenkins expertise in-house, it remains a solid choice.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure which fits your team?"
        body="Tell us about your workflow and we'll give you a straight recommendation."
        pillarLabel="See CI/CD Pipeline Setup Services"
        pillarHref="/ci-cd-pipeline-setup-services/"
      />
    </>
  );
}
