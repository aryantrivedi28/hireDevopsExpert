import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "AWS ECS vs EKS: Which Should Your Startup Choose?",
  description:
    "How ECS and EKS compare on operational complexity, ecosystem, and cost, and how to think about the choice for your team.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Which is simpler to operate, ECS or EKS?",
    answer:
      "ECS is generally considered simpler to operate day-to-day, since it's a more opinionated, AWS-native service with less to configure.",
  },
  {
    question: "Is EKS more expensive than ECS?",
    answer:
      "EKS typically has an additional control-plane cost that ECS doesn't, though total cost depends heavily on your workload, verify current pricing directly with AWS before deciding.",
  },
  {
    question: "Can we start on ECS and move to EKS later?",
    answer: "Yes, many teams start simpler and move to Kubernetes once they have a concrete reason to.",
  },
];

const RELATED_LINKS = [
  { label: "AWS DevOps Services", href: "/aws-devops-services/" },
  { label: "Kubernetes Consulting Services", href: "/kubernetes-consulting-services/" },
  { label: "AWS EKS setup", href: "/eks-setup-services/" },
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

export default function AwsEcsVsEksPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Comparison"
        title="AWS ECS vs EKS: Which Should Your Startup Choose?"
        intro="ECS and EKS solve the same broad problem, running containers on AWS, with different tradeoffs in complexity, ecosystem, and operational overhead."
      />

      <ArticleBody>
        <ArticleSection heading="Operational complexity">
          <p>
            ECS is AWS-native and more opinionated, which generally means less to configure and
            operate. EKS gives you the full Kubernetes ecosystem, with the operational
            complexity that comes with it.
          </p>
        </ArticleSection>

        <ArticleSection heading="Ecosystem and portability">
          <p>
            EKS gives you access to the broader Kubernetes ecosystem, Helm charts, operators,
            and tooling that works the same way across clouds. ECS is AWS-specific by design.
          </p>
        </ArticleSection>

        <ArticleSection heading="Team experience matters">
          <p>
            If your team already knows Kubernetes, EKS may be the faster path. If not, ECS often
            has a gentler learning curve for a team new to container orchestration.
          </p>
        </ArticleSection>

        <ArticleSection heading="Cost considerations">
          <p>
            {/* [VERIFY current]: AWS pricing and control-plane costs for both services change over time */}
            EKS has historically carried an additional control-plane cost that ECS doesn&rsquo;t.
            Exact pricing changes over time, verify current figures directly with AWS before
            making a decision based on cost alone.
          </p>
        </ArticleSection>

        <ArticleSection heading="Our take">
          <p>
            Neither is universally &ldquo;better&rdquo;, it depends on your team&rsquo;s
            experience, your portability needs, and how much operational complexity you&rsquo;re
            ready to take on. We&rsquo;ll give you an honest recommendation based on your actual
            situation, not a default answer.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure which fits your team?"
        body="Tell us about your workload and team, and we'll give you a straight recommendation."
        pillarLabel="See AWS DevOps Services"
        pillarHref="/aws-devops-services/"
      />
    </>
  );
}
