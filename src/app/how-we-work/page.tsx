// app/how-we-work/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Clock, Users, Shield, Rocket, ArrowRight, Phone, Mail, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | Our DevOps Engagement Process",
  description: "Learn how we help startups and growing companies build production-grade DevOps infrastructure. Our transparent, collaborative process delivers results in weeks, not months.",
  keywords: "DevOps process, how we work, DevOps engagement, DevOps for startups, infrastructure automation process",
  openGraph: {
    title: "How We Work - Our DevOps Engagement Process",
    description: "From discovery to production - our proven process for delivering DevOps excellence.",
    url: "https://hiredevopsexpert.com/how-we-work",
    type: "article",
  },
};

// Process steps data
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Assessment",
    icon: "🔍",
    description: "We start by understanding your current infrastructure, team structure, and business goals. This isn't a sales call—it's a technical audit to identify what's working and what's holding you back.",
    duration: "1-2 weeks",
    deliverables: [
      "Infrastructure audit report",
      "Technical debt assessment",
      "Priority improvement roadmap",
      "Resource requirements estimation",
    ],
  },
  {
    step: "02",
    title: "Strategy & Architecture Design",
    icon: "📐",
    description: "We design a tailored DevOps architecture that fits your specific needs. Whether you're on AWS, Azure, or GCP, we build a solution that scales with your business.",
    duration: "1-2 weeks",
    deliverables: [
      "Infrastructure architecture diagram",
      "Tooling and technology selection",
      "Cost optimization strategy",
      "Security and compliance framework",
    ],
  },
  {
    step: "03",
    title: "Implementation & Automation",
    icon: "⚙️",
    description: "We roll up our sleeves and build. From CI/CD pipelines to infrastructure as code, we automate everything that can be automated. No fluff—just working systems.",
    duration: "4-8 weeks",
    deliverables: [
      "CI/CD pipeline setup",
      "Infrastructure as Code implementation",
      "Monitoring & observability stack",
      "Security & compliance controls",
    ],
  },
  {
    step: "04",
    title: "Testing & Validation",
    icon: "✅",
    description: "We rigorously test everything in a staging environment before it touches production. This is where we catch issues and ensure everything works as expected.",
    duration: "1-2 weeks",
    deliverables: [
      "Performance testing results",
      "Security audit report",
      "Disaster recovery validation",
      "Documentation and runbooks",
    ],
  },
  {
    step: "05",
    title: "Deployment & Handover",
    icon: "🚀",
    description: "We deploy to production with zero downtime and comprehensive monitoring. Then we hand over everything—code, documentation, and knowledge—so your team can operate independently.",
    duration: "1-2 weeks",
    deliverables: [
      "Production deployment",
      "Team training and knowledge transfer",
      "Operational documentation",
      "Transition plan and ongoing support options",
    ],
  },
];

// Why choose us data
const WHY_CHOOSE_US = [
  {
    icon: "👨‍💻",
    title: "Senior Engineers Only",
    description: "You work directly with senior DevOps engineers who have run production systems at scale. No junior developers, no outsourcing.",
  },
  {
    icon: "⏱️",
    title: "Results in Weeks, Not Months",
    description: "We deliver working infrastructure in 4-8 weeks, not 6-12 months. We move fast without cutting corners.",
  },
  {
    icon: "📋",
    title: "Complete Transparency",
    description: "You see everything. Code, infrastructure, costs, and progress. We share everything we're doing in real-time.",
  },
  {
    icon: "🔒",
    title: "Security-First Approach",
    description: "Every solution we build follows industry security best practices. Your infrastructure is secure from day one.",
  },
  {
    icon: "📈",
    title: "Scale Ready",
    description: "We build infrastructure that scales with your business. No re-architecting when you hit 100x growth.",
  },
  {
    icon: "🤝",
    title: "Partnership, Not Just a Project",
    description: "We become part of your team. Even after the project ends, we're available when you need us.",
  },
];

// Engagement models
const ENGAGEMENT_MODELS = [
  {
    title: "Project-Based",
    description: "Perfect for specific initiatives like CI/CD setup, cloud migration, or infrastructure automation.",
    bestFor: ["Defined scope", "Fixed timeline", "Clear deliverables"],
    timeline: "4-12 weeks",
  },
  {
    title: "Fractional DevOps",
    description: "Ongoing support with a dedicated senior engineer who works as part of your team on a monthly basis.",
    bestFor: ["Ongoing needs", "Flexible scope", "Team augmentation"],
    timeline: "Monthly",
  },
  {
    title: "Managed DevOps",
    description: "Full management of your DevOps infrastructure with a dedicated team handling everything.",
    bestFor: ["Complete management", "Startups", "Scale-ups"],
    timeline: "Monthly",
  },
];

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-off">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="max-w-[68ch]">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-teal">
              Our Process
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              How We Build Production-Grade DevOps
            </h1>
            <p className="mt-6 text-lg text-gray md:text-xl">
              A proven, transparent process that takes you from infrastructure chaos to 
              production-grade DevOps in weeks, not months.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#faq"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="text-center">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-slate">
              Our 5-Step Process
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              From Discovery to Production
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-lg text-slate">
              Every engagement follows the same proven process—designed to deliver results 
              quickly while building lasting infrastructure.
            </p>
          </div>

          {/* Process Steps Timeline */}
          <div className="relative mt-12 md:mt-16">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-[30px] top-0 h-full w-0.5 bg-mist md:left-1/2 md:-ml-[1px]" />

            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.step}
                className={`relative mb-12 flex flex-col md:mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number circle */}
                <div className="absolute left-0 top-0 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-deep text-lg font-bold text-white shadow-lg md:relative md:left-auto md:top-auto md:h-16 md:w-16 md:text-xl">
                  {step.step}
                </div>

                {/* Content */}
                <div
                  className={`ml-20 flex-1 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="rounded-xl border border-mist bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{step.icon}</span>
                      <h3 className="text-xl font-semibold text-ink md:text-2xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-base text-slate md:text-lg">
                      {step.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-slate">
                        <Clock className="h-4 w-4" />
                        {step.duration}
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-ink">Deliverables:</p>
                      <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                        {step.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-deep" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-mist bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="text-center">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-slate">
              Why Work With Us
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Built Different. Built Better.
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-lg text-slate">
              We're not an agency that throws junior engineers at your problem. 
              We're senior engineers who take ownership.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-mist bg-off p-6 transition-shadow hover:shadow-md md:p-8"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="text-center">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-slate">
              Flexible Engagement
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Choose How We Work Together
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-lg text-slate">
              Every engagement is tailored to your needs. Pick the model that works best for your situation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.title}
                className="flex flex-col rounded-xl border border-mist bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
              >
                <h3 className="text-xl font-semibold text-ink">{model.title}</h3>
                <p className="mt-2 text-sm text-slate">{model.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-sm text-slate">
                    <Clock className="h-4 w-4" />
                    {model.timeline}
                  </span>
                </div>
                <div className="mt-4 flex-1">
                  <p className="text-sm font-medium text-ink">Best for:</p>
                  <ul className="mt-2 space-y-1.5">
                    {model.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-deep" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-mist bg-off px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-teal-deep hover:text-white"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-mist bg-ink py-16 text-white md:py-20">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-teal md:text-4xl">50+</div>
              <p className="mt-1 text-sm text-gray">Projects Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal md:text-4xl">4-8</div>
              <p className="mt-1 text-sm text-gray">Weeks to Production</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal md:text-4xl">100%</div>
              <p className="mt-1 text-sm text-gray">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal md:text-4xl">24/7</div>
              <p className="mt-1 text-sm text-gray">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1120px] px-4 text-center md:px-6">
          <div className="mx-auto max-w-[68ch]">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-teal-deep">
              Ready to Get Started?
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Let's Build Your DevOps Infrastructure
            </h2>
            <p className="mt-4 text-lg text-slate">
              Book a free consultation and see how we can help you ship faster, 
              scale confidently, and stop fighting infrastructure fires.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
              >
                <Calendar className="h-4 w-4" />
                Book a Free Call
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-mist px-6 py-3 font-medium text-ink transition-colors hover:bg-mist"
              >
                Read Our Blog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate">
              No commitment. Just a conversation to see if we're a good fit.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}