import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "How to Reduce AWS Cloud Costs Without Breaking Production",
  description:
    "Practical, low-risk places to look first when your AWS bill needs to come down, right-sizing, storage, and idle resources.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "What's the fastest place to find savings?",
    answer: "Idle or forgotten resources, unattached EBS volumes, unused load balancers, old snapshots, are usually the quickest find.",
  },
  {
    question: "Is right-sizing risky?",
    answer: "Done carefully, based on actual usage data, it's one of the lower-risk changes you can make.",
  },
  {
    question: "Should we commit to reserved instances or savings plans right away?",
    answer: "Only once your usage is predictable enough to justify the commitment, committing too early can lock in waste.",
  },
];

const RELATED_LINKS = [
  { label: "AWS Cost Optimization Services", href: "/aws-cost-optimization-services/" },
  { label: "AWS DevOps Services", href: "/aws-devops-services/" },
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

export default function HowToReduceAwsCloudCostsPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="AWS Cost Guide"
        title="How to Reduce AWS Cloud Costs Without Breaking Production"
        intro="Cutting AWS costs doesn't have to mean risky changes. Here are the places to look first, roughly in order of how safe and how impactful they tend to be."
      />

      <ArticleBody>
        <ArticleSection heading="Find idle and forgotten resources">
          <p>
            Unattached EBS volumes, unused Elastic IPs, idle load balancers, and old snapshots
            quietly accumulate cost with zero production risk to remove.
          </p>
        </ArticleSection>

        <ArticleSection heading="Right-size based on actual usage">
          <p>
            Compare provisioned capacity against actual CPU, memory, and network usage over a
            meaningful window before downsizing, guessing is how outages happen.
          </p>
        </ArticleSection>

        <ArticleSection heading="Review storage classes">
          <p>
            Data that&rsquo;s rarely accessed often sits in a more expensive S3 storage class
            than it needs to. Lifecycle policies can shift this automatically over time.
          </p>
        </ArticleSection>

        <ArticleSection heading="Consider commitment-based pricing carefully">
          <p>
            Reserved instances and savings plans can meaningfully lower cost, but only once
            usage is predictable enough that the commitment doesn&rsquo;t lock in waste.
          </p>
        </ArticleSection>

        <ArticleSection heading="Watch for cost anomalies going forward">
          <p>
            A one-time cleanup helps, but ongoing visibility, alerts on unusual spend, is what
            keeps costs from creeping back up.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Want a real audit instead of guesswork?"
        body="We'll look at your actual usage and tell you honestly where the savings are, and aren't."
        pillarLabel="See AWS Cost Optimization Services"
        pillarHref="/aws-cost-optimization-services/"
      />
    </>
  );
}
