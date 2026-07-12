// app/process/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Shield, 
  Rocket, 
  Calendar,
  GitBranch,
  Cloud,
  Lock,
  BarChart,
  Code,
  Server,
  Search,
  Lightbulb,
  Handshake,
  ChevronDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our DevOps Process | How We Deliver Production-Grade Infrastructure",
  description: "A transparent, proven DevOps process that takes you from infrastructure chaos to production-grade systems in weeks. See how we work with startups and growing companies.",
  keywords: "DevOps process, infrastructure automation, CI/CD pipeline, cloud migration process, DevOps methodology",
  openGraph: {
    title: "Our DevOps Process - From Discovery to Production",
    description: "A transparent, proven process for delivering production-grade DevOps infrastructure.",
    url: "https://hiredevopsexpert.com/process",
    type: "article",
  },
};

// Process phases data
const PROCESS_PHASES = [
  {
    phase: "Phase 1",
    title: "Discovery & Assessment",
    icon: Search,
    description: "We start by deeply understanding your current infrastructure, team dynamics, and business objectives. This isn't a surface-level audit—it's a comprehensive assessment that identifies opportunities and risks.",
    duration: "1-2 weeks",
    activities: [
      "Infrastructure architecture review",
      "CI/CD pipeline assessment",
      "Security & compliance audit",
      "Team workflow analysis",
      "Cost optimization review",
      "Technical debt identification",
    ],
    deliverables: [
      "Infrastructure audit report",
      "Technical debt assessment",
      "Priority improvement roadmap",
      "Resource requirements estimation",
      "Risk assessment matrix",
    ],
  },
  {
    phase: "Phase 2",
    title: "Strategy & Architecture Design",
    icon: GitBranch,
    description: "We design a tailored DevOps architecture that aligns with your business goals. Whether you're on AWS, Azure, or GCP, we build a scalable, secure, and cost-optimized solution.",
    duration: "1-2 weeks",
    activities: [
      "Infrastructure architecture design",
      "Technology stack selection",
      "Security framework design",
      "Cost optimization strategy",
      "Scaling and redundancy planning",
      "Disaster recovery strategy",
    ],
    deliverables: [
      "Infrastructure architecture diagram",
      "Technology stack documentation",
      "Security & compliance framework",
      "Cost optimization plan",
      "Scaling and DR strategy",
    ],
  },
  {
    phase: "Phase 3",
    title: "Implementation & Automation",
    icon: Code,
    description: "We build your infrastructure using industry best practices and automation-first approach. Every line of code is versioned, tested, and documented.",
    duration: "4-8 weeks",
    activities: [
      "CI/CD pipeline implementation",
      "Infrastructure as Code development",
      "Monitoring & observability setup",
      "Security controls implementation",
      "Automation script development",
      "Configuration management",
    ],
    deliverables: [
      "Production-ready CI/CD pipeline",
      "Infrastructure as Code templates",
      "Monitoring & alerting stack",
      "Security controls implementation",
      "Automation scripts and modules",
      "Operational runbooks",
    ],
  },
  {
    phase: "Phase 4",
    title: "Testing & Validation",
    icon: Shield,
    description: "We rigorously test every component in a staging environment that mirrors production. This is where we catch issues, validate performance, and ensure reliability.",
    duration: "1-2 weeks",
    activities: [
      "Performance and load testing",
      "Security penetration testing",
      "Disaster recovery testing",
      "Integration testing",
      "User acceptance testing",
      "Documentation review",
    ],
    deliverables: [
      "Performance test results",
      "Security audit report",
      "DR validation results",
      "Integration test results",
      "UAT sign-off",
      "Final documentation",
    ],
  },
  {
    phase: "Phase 5",
    title: "Deployment & Handover",
    icon: Rocket,
    description: "We deploy to production with zero downtime and comprehensive monitoring. Then we transfer full ownership—code, infrastructure, and knowledge—to your team.",
    duration: "1-2 weeks",
    activities: [
      "Production deployment",
      "Team training sessions",
      "Knowledge transfer workshops",
      "Operational handover",
      "Post-deployment monitoring",
      "Transition planning",
    ],
    deliverables: [
      "Production deployment",
      "Team training completion",
      "Operational documentation",
      "Knowledge transfer records",
      "Transition plan",
      "Ongoing support options",
    ],
  },
];

// Key principles
const PRINCIPLES = [
  {
    icon: Cloud,
    title: "Automation First",
    description: "We automate everything that can be automated. Manual processes are error-prone and don't scale.",
  },
  {
    icon: Lock,
    title: "Security by Design",
    description: "Security isn't an afterthought—it's built into every layer of your infrastructure from the start.",
  },
  {
    icon: BarChart,
    title: "Data-Driven Decisions",
    description: "We use real metrics and monitoring to make decisions, not guesses or assumptions.",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Everything is versioned, tested, and reproducible. No manual changes, no configuration drift.",
  },
];

// Engagement options with lucide-react icons
const ENGAGEMENT_OPTIONS = [
  {
    title: "Full Project Delivery",
    description: "We handle everything from discovery to deployment. You get a complete, production-ready infrastructure.",
    icon: Rocket,
    bestFor: "Startups and companies building from scratch",
  },
  {
    title: "Consulting & Advisory",
    description: "We provide expert guidance and review your existing infrastructure. Perfect for teams that want to upskill.",
    icon: Lightbulb,
    bestFor: "Teams that want to learn and improve",
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous support and maintenance for your DevOps infrastructure. We're always available.",
    icon: Handshake,
    bestFor: "Companies that want peace of mind",
  },
];

// FAQ data
const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most projects take 4-8 weeks from discovery to production deployment. This timeline varies based on complexity, existing infrastructure, and specific requirements."
  },
  {
    q: "Do you work with startups?",
    a: "Yes! We specialize in helping startups build production-grade DevOps infrastructure. We understand the constraints and challenges of early-stage companies."
  },
  {
    q: "What cloud providers do you support?",
    a: "We work with all major cloud providers including AWS, Azure, Google Cloud Platform, and hybrid environments."
  },
  {
    q: "What happens after the project is complete?",
    a: "We provide comprehensive documentation, team training, and knowledge transfer. We also offer ongoing support and maintenance options."
  },
  {
    q: "How is the process different from other agencies?",
    a: "We assign senior engineers only, maintain complete transparency, and deliver results in weeks, not months. We become part of your team."
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-off">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-deep/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="max-w-[68ch]">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-teal">
              Our Process
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              A Proven Process for <span className="text-teal">DevOps Excellence</span>
            </h1>
            <p className="mt-6 text-lg text-gray md:text-xl">
              From discovery to production—we follow a transparent, repeatable process 
              that delivers production-grade infrastructure in weeks, not months.
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
                href="/how-we-work"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                Learn How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview - Timeline */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="text-center">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-slate">
              Our 5-Phase Process
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              From Discovery to Production
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-lg text-slate">
              Every engagement follows the same proven process—designed to deliver results 
              quickly while building lasting infrastructure.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative mt-12 md:mt-16">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 h-full w-0.5 bg-mist md:left-1/2 md:-ml-[1px]" />

            {PROCESS_PHASES.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className={`relative mb-12 flex flex-col md:mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Phase number circle */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-deep text-sm font-bold text-white shadow-lg md:relative md:left-auto md:top-auto md:h-14 md:w-14 md:text-base">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 flex-1 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div className="rounded-xl border border-mist bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-sm font-mono text-teal-deep">
                              {phase.phase}
                            </span>
                            <h3 className="text-xl font-semibold text-ink md:text-2xl">
                              {phase.title}
                            </h3>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-sm text-slate">
                          <Clock className="h-4 w-4" />
                          {phase.duration}
                        </div>
                      </div>

                      <p className="mt-3 text-base text-slate md:text-lg">
                        {phase.description}
                      </p>

                      <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-medium text-ink">Activities:</p>
                          <ul className="mt-2 space-y-1.5">
                            {phase.activities.map((activity) => (
                              <li key={activity} className="flex items-start gap-2 text-sm text-slate">
                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-deep" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-ink">Deliverables:</p>
                          <ul className="mt-2 space-y-1.5">
                            {phase.deliverables.map((deliverable) => (
                              <li key={deliverable} className="flex items-start gap-2 text-sm text-slate">
                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-deep" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-mist bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="text-center">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-slate">
              Our Principles
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              How We Approach Every Project
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-lg text-slate">
              These principles guide everything we do—from the first discovery call 
              to the final deployment.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="rounded-xl border border-mist bg-off p-6 text-center transition-shadow hover:shadow-md md:p-8"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{principle.title}</h3>
                  <p className="mt-2 text-sm text-slate">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
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
            {ENGAGEMENT_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.title}
                  className="flex flex-col rounded-xl border border-mist bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{option.title}</h3>
                  <p className="mt-2 text-sm text-slate">{option.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-sm text-slate">
                      <Users className="h-4 w-4" />
                      {option.bestFor}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-mist bg-off px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-teal-deep hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
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

      {/* FAQ Section */}
      <section className="border-b border-mist bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="text-center">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-slate">
              Common Questions
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-mist bg-off transition-shadow hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-ink transition-colors hover:text-teal-deep">
                  {faq.q}
                  <ChevronDown className="ml-4 h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-4 text-sm text-slate">
                  {faq.a}
                </div>
              </details>
            ))}
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
                href="/how-we-work"
                className="inline-flex items-center gap-2 rounded-lg border border-mist px-6 py-3 font-medium text-ink transition-colors hover:bg-mist"
              >
                Learn How We Work
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