import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "DevOps Roadmap for Startups: From MVP to Scale",
  description:
    "A general maturity model for how DevOps practices typically evolve from an early-stage MVP through to a scaling product.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do all startups follow this roadmap in order?",
    answer: "Not exactly, it's a general pattern, not a fixed sequence. Your actual path depends on your product and constraints.",
  },
  {
    question: "Is it a problem to be 'behind' on this roadmap?",
    answer: "Not inherently, plenty of successful products run lean on DevOps maturity for a long time. What matters is whether the gaps are actually costing you.",
  },
  {
    question: "When should we get outside help instead of doing this ourselves?",
    answer: "When the gap between what you need and what your team has time for keeps growing, that's usually the signal.",
  },
];

const RELATED_LINKS = [
  { label: "hire a DevOps engineer", href: "/hire-devops-engineer/" },
  { label: "minimum viable DevOps checklist", href: "/blog/minimum-viable-devops-for-startups/" },
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

export default function DevOpsRoadmapForStartupsPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Maturity Model"
        title="DevOps Roadmap for Startups: From MVP to Scale"
        intro="DevOps maturity tends to follow a general pattern as a startup grows, not a fixed checklist, but a useful way to think about what typically matters next."
      />

      <ArticleBody>
        <ArticleSection heading="MVP stage: ship reliably">
          <p>
            The priority is a basic CI/CD pipeline and simple monitoring, enough to deploy
            without fear and know when something breaks.
          </p>
        </ArticleSection>

        <ArticleSection heading="Early growth: bring infrastructure under control">
          <p>
            As infrastructure grows beyond a couple of manually-managed resources, infrastructure
            as code and a documented deployment process become worth the investment.
          </p>
        </ArticleSection>

        <ArticleSection heading="Scaling: reliability and security become non-negotiable">
          <p>
            Real observability, incident response processes, and security practices (access
            control, secret management, vulnerability scanning) start mattering more as the cost
            of getting them wrong grows.
          </p>
        </ArticleSection>

        <ArticleSection heading="Maturity: DevOps becomes invisible infrastructure">
          <p>
            At this stage, DevOps work is largely proactive rather than reactive, cost
            optimisation, capacity planning, and continuous improvement rather than firefighting.
          </p>
        </ArticleSection>

        <ArticleSection heading="How to use this roadmap">
          <p>
            Use it to identify where you actually are, not where you think you should be. Most
            of the value comes from closing the gap that&rsquo;s costing you right now, not from
            completing every stage in order.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Want an honest read on where you stand?"
        body="Tell us about your setup and we'll help you figure out what actually matters next."
        pillarLabel="See how hiring a DevOps engineer works with us"
        pillarHref="/hire-devops-engineer/"
      />
    </>
  );
}
