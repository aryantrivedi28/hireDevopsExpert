import type { Metadata } from "next";
import ArticleHero from "@/components/article/ArticleHero";
import ArticleBody from "@/components/article/ArticleBody";
import ArticleSection from "@/components/article/ArticleSection";
import ArticleCta from "@/components/article/ArticleCta";
import ServiceFAQ, { type ServiceFaqItem } from "@/components/service/ServiceFAQ";
import RelatedLinks from "@/components/service/RelatedLinks";
import { jsonLdScript } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Docker vs Kubernetes: What's the Difference?",
  description:
    "Docker and Kubernetes solve different problems, containerisation and orchestration. Here's how they fit together and when you need each.",
};

const FAQS: ServiceFaqItem[] = [
  {
    question: "Do I need Kubernetes if I'm already using Docker?",
    answer:
      "Not necessarily, many applications run reliably on Docker alone or with simpler orchestration. Kubernetes solves problems that appear at a certain scale, not before.",
  },
  {
    question: "Can Docker and Kubernetes be used together?",
    answer: "Yes, Kubernetes orchestrates containers, which are commonly built using Docker or a compatible tool.",
  },
  {
    question: "What's the risk of adopting Kubernetes too early?",
    answer:
      "Unnecessary operational complexity, Kubernetes has a real learning curve and maintenance burden that isn't worth it until you actually need what it offers.",
  },
];

const RELATED_LINKS = [
  { label: "Docker Consulting & Containerization Services", href: "/docker-consulting-services/" },
  { label: "Kubernetes Consulting Services", href: "/kubernetes-consulting-services/" },
  { label: "Dockerize Application Service", href: "/dockerize-application-service/" },
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

export default function DockerVsKubernetesPage() {
  return (
    <>
      {jsonLdScript("faq-jsonld", FAQ_JSON_LD)}

      <ArticleHero
        eyebrow="Explainer"
        title="Docker vs Kubernetes: What's the Difference?"
        intro="Docker and Kubernetes aren't really competitors, they solve different problems. Docker packages applications into containers; Kubernetes orchestrates many containers across many machines."
      />

      <ArticleBody>
        <ArticleSection heading="What Docker does">
          <p>
            Docker packages an application and its dependencies into a container, a
            self-contained unit that runs consistently across different environments. It also
            provides the tooling to build, run, and share these containers.
          </p>
        </ArticleSection>

        <ArticleSection heading="What Kubernetes does">
          <p>
            Kubernetes orchestrates containers at scale, deciding where they run, restarting
            them when they fail, scaling them up or down, and managing networking between them
            across a cluster of machines.
          </p>
        </ArticleSection>

        <ArticleSection heading="When you need Docker alone">
          <p>
            A single application, or a small number of services, running on one or a few
            servers, often doesn&rsquo;t need orchestration at all. Docker (or Docker Compose for
            multiple services) is frequently enough.
          </p>
        </ArticleSection>

        <ArticleSection heading="When you need Kubernetes too">
          <p>
            Once you&rsquo;re running many services across many machines, need automated scaling and
            self-healing, or want a consistent deployment model across a larger infrastructure,
            Kubernetes starts to pay for its added complexity.
          </p>
        </ArticleSection>

        <ArticleSection heading="Our take">
          <p>
            Start with what your current scale actually needs. Adding Kubernetes before you need
            it adds operational overhead without a corresponding benefit, we&rsquo;ll give you
            an honest read on whether you&rsquo;re at that point yet.
          </p>
        </ArticleSection>

        <ServiceFAQ heading="Common questions" faqs={FAQS} />
      </ArticleBody>

      <RelatedLinks heading="Related reading & services" links={RELATED_LINKS} />

      <ArticleCta
        heading="Not sure which you need?"
        body="Tell us about your setup and we'll give you a straight recommendation, not a default answer."
        pillarLabel="See Kubernetes Consulting Services"
        pillarHref="/kubernetes-consulting-services/"
      />
    </>
  );
}
