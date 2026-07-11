import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

// HONESTY GUARD: this is a criteria-based buyer's guide, not a ranked "best of" list.
// We do not fabricate rankings, invent competitor names/stats, or claim to be "#1" -
// we're transparent that we're one of the providers a reader might evaluate.
export const metadata: Metadata = {
  title: "Best DevOps Services for Startups: What to Look For",
  description:
    "A criteria-based guide to evaluating managed DevOps providers for a startup, not a ranked list, since we're one of the options ourselves.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Why isn't this a ranked list of specific companies?",
    answer:
      "We're a DevOps provider ourselves, so a self-published ranking of competitors wouldn't be trustworthy. We'd rather give you criteria to evaluate any provider by, including us.",
  },
  {
    question: "What's the single most important thing to check?",
    answer: "Whether they'll be honest about what you actually need, rather than upselling the biggest possible engagement.",
  },
  {
    question: "Should we always choose the cheapest option?",
    answer: "Not necessarily, factor in reliability, communication, and whether you're working with a team or a single point of failure.",
  },
];

const RELATED_LINKS = [
  { label: "Managed DevOps Services", href: "/managed-devops-services/" },
  { label: "DevOps for Startups & SaaS", href: "/devops-for-startups/" },
  {
    label: "DevOps agency vs in-house vs fractional",
    href: "/blog/devops-agency-vs-in-house-vs-fractional/",
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

export default function BestDevOpsServicesForStartupsPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Buyer's Guide"
        title="Best DevOps Services for Startups: What to Look For"
        intro="We're a DevOps services provider ourselves, so instead of a self-serving ranked list, here's a criteria-based guide to evaluating any provider, including us."
      />

      <ArticleBody>
        <ArticleSection heading="Do they work as a team, or is it one person?">
          <p>
            A single freelancer is a single point of failure. Ask whether you&rsquo;d be working
            with one person or a team that shares context and can cover for each other.
          </p>
        </ArticleSection>

        <ArticleSection heading="Will they tell you what you don't need?">
          <p>
            A provider that recommends the smallest engagement that solves your actual problem
           , instead of the biggest one they can sell, is usually more trustworthy long-term.
          </p>
        </ArticleSection>

        <ArticleSection heading="What engagement models do they offer?">
          <p>
            Look for flexibility, fixed-scope projects, retainers, and dedicated engineers -
            rather than a single one-size-fits-all package.
          </p>
        </ArticleSection>

        <ArticleSection heading="Do you own what they build?">
          <p>
            Confirm upfront that you own the infrastructure code, configuration, and
            documentation they produce, not just the outcome.
          </p>
        </ArticleSection>

        <ArticleSection heading="Can they show real technical depth?">
          <p>
            Ask specific, technical questions about your actual stack. Vague, marketing-heavy
            answers are a signal to look elsewhere.
          </p>
        </ArticleSection>

        <ArticleSection heading="Where we fit">
          <p>
            {/* PLACEHOLDER: real client proof, do not invent */}
            We&rsquo;re an in-house DevOps team offering the engagement models above. Evaluate us
            against these same criteria, we&rsquo;d rather earn the comparison than avoid it.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Want to see how we hold up against this list?"
        body="Tell us what you need and judge us by the same criteria above."
        pillarLabel="See Managed DevOps Services"
        pillarHref="/managed-devops-services/"
      />
    </>
  );
}
