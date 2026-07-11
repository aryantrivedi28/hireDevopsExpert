import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "When Should You Hire a DevOps Engineer? | Guide",
  description:
    "The signs that mean it's time to hire a DevOps engineer, deploy pain, rising cloud costs, uptime risk, and scaling pressure.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Is there a specific team size where DevOps becomes necessary?",
    answer:
      "Not a fixed number, it depends more on deployment frequency, infrastructure complexity, and how much time engineers already spend on operational work.",
  },
  {
    question: "Can we wait until after a major incident to hire?",
    answer:
      "You can, but most teams find it cheaper to address the signs before an incident forces the decision.",
  },
  {
    question: "Do we need a full-time hire, or can we start smaller?",
    answer:
      "Many teams start with a fixed-scope engagement or managed support before committing to a full-time hire.",
  },
];

const RELATED_LINKS = [
  { label: "hire a DevOps engineer", href: "/hire-devops-engineer/" },
  { label: "DevOps for Startups & SaaS", href: "/devops-for-startups/" },
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

export default function WhenToHireADevOpsEngineerPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Hiring Guide"
        title="When Should You Hire a DevOps Engineer?"
        intro="There's no fixed headcount or revenue number that triggers a DevOps hire, but there are clear operational signs. Here's what to watch for."
      />

      <ArticleBody>
        <ArticleSection heading="Deployments are slowing you down">
          <p>
            If releases are manual, risky, or require one specific person to be online,
            that&rsquo;s usually the first sign. Deployment pain tends to compound as the team
            and codebase grow.
          </p>
        </ArticleSection>

        <ArticleSection heading="Cloud costs are climbing without a clear reason">
          <p>
            Unpredictable or rising cloud bills, without anyone confident explaining why, is a
            common trigger, especially once infrastructure has grown organically without review.
          </p>
        </ArticleSection>

        <ArticleSection heading="Uptime and scaling are becoming risky">
          <p>
            If the app struggles under load, or an outage would catch the team off guard,
            that&rsquo;s a sign the current setup hasn&rsquo;t kept pace with the product.
          </p>
        </ArticleSection>

        <ArticleSection heading="Engineers are covering DevOps on the side">
          <p>
            When product engineers are spending meaningful time on infrastructure and deployment
            work instead of building the product, that cost is real even if it&rsquo;s not on a
            dedicated line item.
          </p>
        </ArticleSection>

        <ArticleSection heading="You don't need to go straight to a full-time hire">
          <p>
            Many teams address these signs with a fixed-scope project or managed support before
            committing to a full-time hire, see{" "}
            <a href="/devops-for-startups/" className="text-teal-deep underline">
              DevOps for Startups &amp; SaaS
            </a>{" "}
            for how that usually works in practice.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure if now's the right time?"
        body="Tell us where things stand and we'll give you an honest read on whether it's time to bring in help."
        pillarLabel="See how hiring a DevOps engineer works with us"
        pillarHref="/hire-devops-engineer/"
      />
    </>
  );
}
