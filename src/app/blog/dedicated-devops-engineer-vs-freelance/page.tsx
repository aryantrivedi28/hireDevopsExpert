import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Dedicated DevOps Engineer vs. Freelance vs. Agency",
  description:
    "How a dedicated engagement, a freelancer, an agency, and an in-house hire actually compare on cost, risk, and ownership.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Which model is cheapest?",
    answer:
      "It depends on your volume and duration of need, a freelancer can look cheaper hourly but cost more once you account for management time and risk.",
  },
  {
    question: "What's the biggest risk with a single freelancer?",
    answer:
      "A single point of failure, if they're unavailable or move on, the knowledge often goes with them.",
  },
  {
    question: "Is a dedicated engineer the same as hiring in-house?",
    answer:
      "No, a dedicated engineer works through an engagement with a team behind them, rather than being a direct employee.",
  },
];

const RELATED_LINKS = [
  { label: "hire a DevOps engineer", href: "/hire-devops-engineer/" },
  {
    label: "DevOps agency vs in-house vs fractional",
    href: "/blog/devops-agency-vs-in-house-vs-fractional/",
  },
  { label: "DevOps engineer hourly rate & cost", href: "/blog/devops-engineer-hourly-rate-cost/" },
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

export default function DedicatedDevOpsEngineerVsFreelancePage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Comparison"
        title="Dedicated DevOps Engineer vs. Freelance vs. Agency"
        intro="Each model, freelancer, dedicated engineer, agency, or in-house hire, comes with real tradeoffs in cost, risk, and ownership. Here's how to think about the choice."
      />

      <ArticleBody>
        <ArticleSection heading="Freelancer">
          <p>
            Flexible and often fast to start, but usually a single point of failure. Quality and
            reliability vary by individual, and there&rsquo;s typically no backup if they become
            unavailable.
          </p>
        </ArticleSection>

        <ArticleSection heading="Dedicated engineer (from a team)">
          <p>
            An engineer focused on your account, backed by a team who share context. This
            reduces single-point-of-failure risk compared to a lone freelancer, while staying
            more flexible than a full-time hire.
          </p>
        </ArticleSection>

        <ArticleSection heading="Agency / managed engagement">
          <p>
            You get a team rather than an individual, with delivery standards and continuity
            built in. This usually costs more than an hourly freelancer but reduces management
            overhead and risk.
          </p>
        </ArticleSection>

        <ArticleSection heading="In-house hire">
          <p>
            Makes the most sense when DevOps is a permanent, substantial need. Comes with the
            full cost and time of recruiting, onboarding, and retaining an employee.
          </p>
        </ArticleSection>

        <ArticleSection heading="How to decide">
          <p>
            The right choice depends on how permanent and substantial your DevOps need is, not
            just the sticker price. See our breakdown of{" "}
            <a
              href="/blog/devops-agency-vs-in-house-vs-fractional/"
              className="text-teal-deep underline"
            >
              DevOps agency vs. in-house vs. fractional
            </a>{" "}
            for a fuller comparison.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure which model fits your situation?"
        body="Tell us what you need and we'll give you an honest read on which model makes sense."
        pillarLabel="See how hiring a DevOps engineer works with us"
        pillarHref="/hire-devops-engineer/"
      />
    </>
  );
}
