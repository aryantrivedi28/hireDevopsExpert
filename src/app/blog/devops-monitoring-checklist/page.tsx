import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "DevOps Monitoring Checklist: What Every SaaS Team Should Track",
  description:
    "The core things worth monitoring for a SaaS product, uptime, latency, errors, and saturation, without drowning in alerts.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "What's the minimum worth monitoring?",
    answer: "Uptime, error rate, and latency on your critical paths cover most of the early-stage risk.",
  },
  {
    question: "How do we avoid alert fatigue?",
    answer: "Alert only on things that require action, route everything else to a dashboard instead of a notification.",
  },
  {
    question: "Should we define SLOs before or after setting up monitoring?",
    answer: "Rough SLOs can guide what you monitor first, then refine them once you have real data.",
  },
];

const RELATED_LINKS = [
  { label: "Monitoring & Observability Services", href: "/devops-monitoring-observability-services/" },
  { label: "Prometheus and Grafana setup", href: "/prometheus-grafana-setup-services/" },
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

export default function DevOpsMonitoringChecklistPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Monitoring Checklist"
        title="DevOps Monitoring Checklist: What Every SaaS Team Should Track"
        intro="Good monitoring isn't about tracking everything, it's about tracking the right things and avoiding alert fatigue. Here's a practical starting checklist."
      />

      <ArticleBody>
        <ArticleSection heading="Uptime">
          <p>
            Track uptime on your critical user-facing paths, not just whether the server
            responds to a health check.
          </p>
        </ArticleSection>

        <ArticleSection heading="Latency">
          <p>
            Track response time on key endpoints, ideally with percentiles (p95, p99) rather
            than just an average, which can hide real problems.
          </p>
        </ArticleSection>

        <ArticleSection heading="Errors">
          <p>
            Error rate on critical paths, tracked over time, usually catches problems before
            customers report them.
          </p>
        </ArticleSection>

        <ArticleSection heading="Saturation">
          <p>
            CPU, memory, disk, and connection pool usage, knowing you&rsquo;re approaching a
            limit before you hit it is far better than finding out during an incident.
          </p>
        </ArticleSection>

        <ArticleSection heading="Dashboards vs. alerts">
          <p>
            Not everything worth tracking is worth an alert. Reserve alerts for things that
            genuinely require someone to act, everything else belongs on a dashboard, not in a
            notification.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Want help setting this up properly?"
        body="We'll set up monitoring that's actually useful, not just technically present."
        pillarLabel="See Monitoring & Observability Services"
        pillarHref="/devops-monitoring-observability-services/"
      />
    </>
  );
}
