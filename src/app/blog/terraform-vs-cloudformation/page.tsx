import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Terraform vs CloudFormation: Which IaC Tool Should You Choose?",
  description:
    "How Terraform and CloudFormation compare on portability, state management, and ecosystem, and how to think about the choice.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Is Terraform better than CloudFormation?",
    answer:
      "Neither is universally better, Terraform is cloud-agnostic and has a larger ecosystem; CloudFormation is AWS-native with no separate state file to manage.",
  },
  {
    question: "Can we use both?",
    answer: "Some teams do, though mixing tools adds complexity, most teams are better served picking one.",
  },
  {
    question: "Does Terraform work well with multi-cloud setups?",
    answer: "Yes, that's one of its main advantages, the same tool and workflow across AWS, Azure, and GCP.",
  },
];

const RELATED_LINKS = [
  { label: "Terraform Consulting Services", href: "/terraform-consulting-services/" },
  { label: "infrastructure as code services", href: "/infrastructure-as-code-services/" },
  { label: "Terraform AWS Services", href: "/terraform-aws-services/" },
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

export default function TerraformVsCloudFormationPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Comparison"
        title="Terraform vs CloudFormation: Which IaC Tool Should You Choose?"
        intro="Both manage infrastructure as code, the real difference is in portability, state management, and how each fits into a multi-cloud or AWS-only strategy."
      />

      <ArticleBody>
        <ArticleSection heading="Portability">
          <p>
            Terraform works across AWS, Azure, GCP, and many other providers with the same
            workflow. CloudFormation is AWS-only by design.
          </p>
        </ArticleSection>

        <ArticleSection heading="State management">
          <p>
            Terraform maintains a separate state file that has to be stored and managed
            (typically remotely, with locking). CloudFormation manages state internally as part
            of the AWS service itself.
          </p>
        </ArticleSection>

        <ArticleSection heading="Ecosystem and modules">
          <p>
            Terraform has a large public registry of community and provider modules. CloudFormation
            has its own set of AWS-maintained templates and increasingly, higher-level abstractions
            like the AWS CDK.
          </p>
        </ArticleSection>

        <ArticleSection heading="Governance">
          <p>
            {/* [VERIFY current]: both ecosystems evolve their governance/policy tooling over time */}
            Both ecosystems have policy-as-code and governance tooling that has evolved
            significantly over time, verify current capabilities directly against each
            tool&rsquo;s documentation rather than relying on older comparisons.
          </p>
        </ArticleSection>

        <ArticleSection heading="Our take">
          <p>
            If you&rsquo;re AWS-only and want tight native integration, CloudFormation is a
            reasonable default. If you&rsquo;re multi-cloud, or want the larger ecosystem,
            Terraform is usually the better fit. See our{" "}
            <a href="/terraform-consulting-services/" className="text-teal-deep underline">
              Terraform Consulting Services
            </a>{" "}
            page for how we approach implementation either way.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure which tool fits your setup?"
        body="Tell us about your infrastructure and we'll give you a straight recommendation."
        pillarLabel="See our infrastructure as code services"
        pillarHref="/infrastructure-as-code-services/"
      />
    </>
  );
}
