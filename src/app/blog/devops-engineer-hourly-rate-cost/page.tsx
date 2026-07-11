import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "DevOps Engineer Hourly Rate & Cost: What to Expect",
  description:
    "Why DevOps engineer rates vary so widely, and what actually drives cost, region, seniority, and engagement model.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Why don't you list a specific hourly rate?",
    answer:
      "Rates vary too much by region, seniority, and engagement model to publish a single honest number, we'd rather give you an accurate estimate based on your actual scope.",
  },
  {
    question: "Is a retainer cheaper than hourly?",
    answer:
      "It depends on your volume of work, retainers often make sense once ongoing work is predictable; hourly suits occasional, well-defined tasks.",
  },
  {
    question: "Are freelance rates lower than working with a team?",
    answer:
      "Not necessarily once you account for management overhead and risk, see our comparison of a dedicated engineer vs. freelance.",
  },
];

const RELATED_LINKS = [
  { label: "hire a DevOps engineer", href: "/hire-devops-engineer/" },
  {
    label: "Dedicated DevOps engineer vs. freelance",
    href: "/blog/dedicated-devops-engineer-vs-freelance/",
  },
  { label: "Managed DevOps Services", href: "/managed-devops-services/" },
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

export default function DevOpsEngineerHourlyRateCostPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Cost Guide"
        title="DevOps Engineer Hourly Rate & Cost: What to Expect"
        intro="DevOps engineer rates vary widely by region, seniority, and engagement model, hourly, retainer, or full-time. This guide explains what drives cost, rather than quoting a single number that goes stale."
      />

      <ArticleBody>
        <ArticleSection heading="Why there's no single 'DevOps rate'">
          <p>
            Rates differ substantially based on region, seniority, the specific skill set
            required, and whether you&rsquo;re hiring, contracting, or working with a team. Any
            single number quoted without that context is likely to be misleading either way.
          </p>
        </ArticleSection>

        <ArticleSection heading="Engagement models affect cost differently">
          <p>
            Hourly work suits short, well-defined tasks. Retainers make more sense once you have
            predictable, ongoing work. Full-time hiring makes sense when the need is permanent
            and substantial enough to justify the overhead of hiring. See our comparison of a{" "}
            <a
              href="/blog/dedicated-devops-engineer-vs-freelance/"
              className="text-teal-deep underline"
            >
              dedicated DevOps engineer vs. freelance
            </a>{" "}
            for how these tradeoffs play out.
          </p>
        </ArticleSection>

        <ArticleSection heading="Hidden costs to watch for">
          <ul className="flex flex-col gap-2">
            <li>• Onboarding and ramp-up time before someone is fully productive</li>
            <li>• Management overhead, especially with freelancers or contractors</li>
            <li>• The cost of a single point of failure if one person holds all the context</li>
            <li>• Tooling and infrastructure costs beyond the person&rsquo;s time</li>
          </ul>
        </ArticleSection>

        <ArticleSection heading="Where to get an accurate number">
          <p>
            {/* PLACEHOLDER: current, verified rate range + source, do not invent */}
            We don&rsquo;t publish a specific rate here, because any figure would be out of date
            or misleading without knowing your scope. If you want an accurate estimate, tell us
            what you need and we&rsquo;ll give you a real number.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Want an actual number, not a guess?"
        body="Tell us your scope and we'll give you a real estimate, not a rate pulled from an average."
        pillarLabel="See how hiring a DevOps engineer works with us"
        pillarHref="/hire-devops-engineer/"
      />
    </>
  );
}
