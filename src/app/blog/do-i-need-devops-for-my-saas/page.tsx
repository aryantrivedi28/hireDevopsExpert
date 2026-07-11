import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Do I Need DevOps for My SaaS Product?",
  description:
    "A few concrete signals, not headcount or funding stage, that actually indicate whether your SaaS product needs DevOps support.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Does team size determine whether we need DevOps?",
    answer:
      "Not directly, deployment frequency, infrastructure complexity, and uptime risk matter more than headcount alone.",
  },
  {
    question: "Can our engineers just keep covering this themselves?",
    answer:
      "They can, but it has a real cost in time not spent on the product, worth weighing explicitly rather than ignoring.",
  },
  {
    question: "What's the smallest way to start?",
    answer: "Many teams start with a fixed-scope project or minimum viable DevOps setup before anything larger.",
  },
];

const RELATED_LINKS = [
  { label: "DevOps for Startups & SaaS", href: "/devops-for-startups/" },
  { label: "hire a DevOps engineer", href: "/hire-devops-engineer/" },
  { label: "minimum viable DevOps checklist", href: "/blog/minimum-viable-devops-for-startups/" },
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

export default function DoINeedDevOpsForMySaasPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="SaaS Guide"
        title="Do I Need DevOps for My SaaS Product?"
        intro="The honest answer depends on a few concrete signals, not your headcount or funding stage alone. Here's what actually matters."
      />

      <ArticleBody>
        <ArticleSection heading="How often, and how safely, are you deploying?">
          <p>
            If releases are infrequent, manual, or nerve-wracking, that&rsquo;s a stronger signal
            than any team-size threshold.
          </p>
        </ArticleSection>

        <ArticleSection heading="What happens when something breaks?">
          <p>
            If an outage would catch the team off guard, with no monitoring or clear response
            process, that&rsquo;s worth addressing before it becomes a real incident.
          </p>
        </ArticleSection>

        <ArticleSection heading="Are cloud costs predictable?">
          <p>
            Unpredictable, unexplained cloud bills are a common sign that infrastructure has
            grown without anyone reviewing it holistically.
          </p>
        </ArticleSection>

        <ArticleSection heading="Is DevOps quietly costing you engineering time?">
          <p>
            If product engineers are regularly pulled into infrastructure and deployment work,
            that&rsquo;s a real cost, even if it doesn&rsquo;t show up as a line item.
          </p>
        </ArticleSection>

        <ArticleSection heading="If the answer is yes">
          <p>
            You don&rsquo;t need to jump straight to a full-time hire. Many teams start with a{" "}
            <a
              href="/blog/minimum-viable-devops-for-startups/"
              className="text-teal-deep underline"
            >
              minimum viable DevOps checklist
            </a>{" "}
            or a fixed-scope project before deciding what&rsquo;s next.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure where you stand?"
        body="Tell us about your setup and we'll give you an honest read on whether it's time to bring in help."
        pillarLabel="See DevOps for Startups & SaaS"
        pillarHref="/devops-for-startups/"
      />
    </>
  );
}
