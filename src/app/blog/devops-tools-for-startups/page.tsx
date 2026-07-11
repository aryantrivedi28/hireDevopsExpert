import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "DevOps Tools for Startups: A Practical Stack by Stage",
  description:
    "A practical, stage-based look at DevOps tooling for startups, CI/CD, infrastructure as code, monitoring, and containers.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do we need all these tools from day one?",
    answer: "No, most startups add tools as specific problems appear, not all at once.",
  },
  {
    question: "Should tool choice be driven by popularity?",
    answer: "Not primarily, team familiarity, your existing stack, and the specific problem you're solving matter more.",
  },
  {
    question: "Is it expensive to change tools later?",
    answer: "It has a cost, but it's usually manageable if the underlying practices (automation, IaC, monitoring) are already in place, the tool is often more replaceable than the practice.",
  },
];

const RELATED_LINKS = [
  { label: "Managed DevOps Services", href: "/managed-devops-services/" },
  { label: "CI/CD Pipeline Setup Services", href: "/ci-cd-pipeline-setup-services/" },
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

export default function DevOpsToolsForStartupsPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Tooling Guide"
        title="DevOps Tools for Startups: A Practical Stack by Stage"
        intro="Tool choice matters less than most lists suggest. Here's a practical, stage-based way to think about DevOps tooling instead of a checklist to copy blindly."
      />

      <ArticleBody>
        <ArticleSection heading="Early stage: CI/CD and basics">
          <p>
            A simple pipeline (GitHub Actions, GitLab CI, or Jenkins), basic monitoring, and
            automated backups cover most early needs. The specific tool matters less than having
            these in place at all.
          </p>
        </ArticleSection>

        <ArticleSection heading="Growing stage: infrastructure as code">
          <p>
            As infrastructure grows past what&rsquo;s manageable by hand, Terraform or CloudFormation
            becomes worth adopting, turning infrastructure into something reviewable and
            repeatable.
          </p>
        </ArticleSection>

        <ArticleSection heading="Scaling stage: containers and orchestration">
          <p>
            Docker, and eventually Kubernetes if you&rsquo;ve genuinely outgrown simpler
            deployment models, become relevant once you&rsquo;re running many services at
            meaningful scale.
          </p>
        </ArticleSection>

        <ArticleSection heading="Ongoing: monitoring and security">
          <p>
            Prometheus/Grafana, Datadog, or CloudWatch for observability, and secret scanning or
            vulnerability scanning for security, become more valuable as the cost of an incident
            grows with your user base.
          </p>
        </ArticleSection>

        <ArticleSection heading="The pattern worth noticing">
          <p>
            Tools get added in response to real, current problems, not adopted preemptively for
            problems you might have someday. That&rsquo;s a more reliable guide than any fixed list.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure what your stage actually needs?"
        body="Tell us where you are and we'll give you an honest read on what's worth adopting now."
        pillarLabel="See Managed DevOps Services"
        pillarHref="/managed-devops-services/"
      />
    </>
  );
}
