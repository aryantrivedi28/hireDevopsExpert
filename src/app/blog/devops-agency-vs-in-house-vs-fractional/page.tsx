import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "DevOps Agency vs In-House vs Fractional DevOps: Which Is Better?",
  description:
    "How an agency engagement, an in-house hire, and fractional DevOps support actually compare on cost, risk, and ownership.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "What does 'fractional DevOps' mean?",
    answer: "Part-time or ongoing support from an engineer or team, without a full-time commitment, similar to a managed retainer.",
  },
  {
    question: "Is an agency the same as fractional support?",
    answer: "They overlap, an agency can deliver fractional support as one of several engagement models.",
  },
  {
    question: "When does in-house make the most sense?",
    answer: "When DevOps is a permanent, substantial, ongoing need that justifies the cost and time of hiring.",
  },
];

const RELATED_LINKS = [
  { label: "hire a DevOps engineer", href: "/hire-devops-engineer/" },
  { label: "Managed DevOps Services", href: "/managed-devops-services/" },
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

export default function DevOpsAgencyVsInHouseVsFractionalPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Comparison"
        title="DevOps Agency vs In-House vs Fractional DevOps: Which Is Better?"
        intro="There's no universally 'better' model, agency, in-house, and fractional DevOps each fit different stages and needs. Here's how to think about the choice."
      />

      <ArticleBody>
        <ArticleSection heading="Agency / managed engagement">
          <p>
            You get a team with delivery standards and continuity built in, without the cost and
            time of hiring. Works well when you want ownership of the outcome without owning the
            headcount.
          </p>
        </ArticleSection>

        <ArticleSection heading="In-house hire">
          <p>
            Makes sense when DevOps is a permanent, substantial need, deep product context and
            full-time availability, at the cost and time investment of recruiting and retaining
            an employee.
          </p>
        </ArticleSection>

        <ArticleSection heading="Fractional DevOps">
          <p>
            Ongoing, part-time support, often delivered through a retainer, without a
            full-time commitment on either side. A middle ground between a one-off project and a
            full hire.
          </p>
        </ArticleSection>

        <ArticleSection heading="How to decide">
          <p>
            Think about how permanent and substantial the need is, not just the near-term cost.
            A team you can start working with in days looks different from a headcount
            you&rsquo;ll manage for years.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure which model fits?"
        body="Tell us about your situation and we'll give you an honest read on which model makes sense."
        pillarLabel="See Managed DevOps Services"
        pillarHref="/managed-devops-services/"
      />
    </>
  );
}
