// app/blog/what-is-ci-cd/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Mail,
  ChevronRight,
  BookOpen,
  CheckCircle,
  Zap,
  Shield,
  Cloud,
  Code,
  Server,
  GitBranch,
  Layers,
  BarChart,
  TrendingUp,
  Target,
  User2,
  Rocket,
  GitPullRequest,
  Box,
  TestTube,
  Upload,
  Monitor,
  Cpu,
  Users
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { TableOfContents } from "../what-is-devops/components/TableOfContents";

export const metadata: Metadata = {
  title: "What Is CI/CD? Continuous Integration & Delivery (2026)",
  description: "CI/CD automates building, testing, and releasing code so your team ships faster without breaking production. Here's what it means and how to start.",
  keywords: "CI/CD, continuous integration, continuous delivery, devops pipelines, deployment, continuous deployment, ci cd pipeline",
  openGraph: {
    title: "What Is CI/CD? Continuous Integration & Delivery (2026)",
    description: "CI/CD automates building, testing, and releasing code so your team ships faster without breaking production. Here's what it means and how to start.",
    url: "https://www.hiredevopsexpert.com/blog/what-is-ci-cd",
    type: "article",
    publishedTime: "2024-01-15",
    authors: ["Hire DevOps Expert Team"],
    tags: ["CI/CD", "Continuous Integration", "Continuous Delivery", "DevOps Pipelines", "Deployment"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is CI/CD? Continuous Integration & Delivery (2026)",
    description: "CI/CD automates building, testing, and releasing code so your team ships faster without breaking production. Here's what it means and how to start.",
  },
};

// Table of Contents data
const TABLE_OF_CONTENTS = [
  { id: "what-problem-does-ci-cd-solve", label: "What problem does CI/CD solve?" },
  { id: "what-does-ci-cd-actually-mean", label: "What does CI/CD actually mean?" },
  { id: "ci-vs-continuous-delivery-vs-continuous-deployment", label: "CI vs continuous delivery vs continuous deployment" },
  { id: "how-does-a-ci-cd-pipeline-work", label: "How does a CI/CD pipeline work?" },
  { id: "benefits-of-ci-cd", label: "What are the benefits of CI/CD?" },
  { id: "ci-cd-tools", label: "What tools do you need for CI/CD?" },
  { id: "ci-cd-in-2026", label: "What does CI/CD look like in 2026?" },
  { id: "do-you-need-ci-cd", label: "Do you need CI/CD, and how do you start?" },
];

// FAQ data
const FAQS = [
  {
    question: "What does CI/CD stand for?",
    answer: "Continuous integration and continuous delivery. The 'CD' sometimes also means continuous deployment, which is a further step."
  },
  {
    question: "What is the difference between CI and CD?",
    answer: "CI (continuous integration) automatically merges, builds, and tests every code change. CD automatically gets those validated changes toward production, either up to a human approval (delivery) or all the way live (deployment)."
  },
  {
    question: "What is the difference between continuous delivery and continuous deployment?",
    answer: "Both automate the path to production. Continuous delivery stops at a final manual approval, so a person decides when to release. Continuous deployment removes that step, and every change that passes the tests goes live automatically."
  },
  {
    question: "Is CI/CD part of DevOps?",
    answer: "Yes. CI/CD is one of the core practices that make DevOps work in practice."
  },
  {
    question: "What is a CI/CD pipeline?",
    answer: "An automated sequence that carries a code change from commit through build, test, release, and deploy, with monitoring feeding back into the next change."
  },
  {
    question: "Do small teams need CI/CD?",
    answer: "Most do, at least the basics. Even a simple pipeline that builds, tests, and deploys on every push removes the biggest source of release risk. Start small and expand it over time."
  },
  {
    question: "What tools do you need for CI/CD?",
    answer: "At minimum, a version control host like GitHub or GitLab and a pipeline engine like GitHub Actions, GitLab CI, or Jenkins. The rest depends on your stack and where you deploy."
  }
];

// Pipeline stages data
const PIPELINE_STAGES = [
  {
    stage: "Commit",
    description: "A developer pushes a change to shared version control, which triggers the pipeline",
    tools: "Git, GitHub, GitLab",
    icon: GitBranch
  },
  {
    stage: "Build",
    description: "The code is compiled and packaged into an artifact, built once so the same artifact deploys everywhere",
    tools: "Docker, Maven, Gradle",
    icon: Box
  },
  {
    stage: "Test",
    description: "Automated unit, integration, and end-to-end tests run against the change",
    tools: "PyTest, Jest, Selenium",
    icon: TestTube
  },
  {
    stage: "Release",
    description: "The validated, versioned artifact is prepared for production",
    tools: "GitHub Actions, GitLab CI, Jenkins",
    icon: GitPullRequest
  },
  {
    stage: "Deploy",
    description: "The change goes to staging, then to production",
    tools: "Argo CD, Helm, Spinnaker",
    icon: Upload
  },
  {
    stage: "Monitor",
    description: "Production is watched, and what is learned feeds the next change",
    tools: "Prometheus, Grafana, Datadog",
    icon: Monitor
  }
];

// CI/CD Comparison data
const CD_COMPARISON = [
  {
    type: "Continuous Integration (CI)",
    automates: "Merging, building, and testing every change",
    releases: "Not this stage",
    dependsOn: "The foundation for everything after",
    bestWhen: "Always. This is table stakes"
  },
  {
    type: "Continuous Delivery (CD)",
    automates: "Getting a validated change release-ready and into staging or production",
    releases: "A human approves the final push",
    dependsOn: "Requires CI first",
    bestWhen: "You want control over the exact moment you release"
  },
  {
    type: "Continuous Deployment (CD)",
    automates: "Releasing every passing change straight to production",
    releases: "Fully automatic, no manual gate",
    dependsOn: "Requires CI and continuous delivery first",
    bestWhen: "You have strong tests and want maximum speed"
  }
];

// Table headers for comparison
const COMPARISON_HEADERS = ["", "Continuous Integration (CI)", "Continuous Delivery (CD)", "Continuous Deployment (CD)"];
const COMPARISON_ROWS = [
  { label: "What it automates", key: "automates" },
  { label: "Who releases to production", key: "releases" },
  { label: "Depends on", key: "dependsOn" },
  { label: "Best when", key: "bestWhen" }
];

export default function WhatIsCICDPage() {
  return (
    <main className="min-h-screen bg-off">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-deep/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
            <div className="flex-1 max-w-[68ch]">
              <nav className="flex items-center gap-2 text-sm text-gray/70" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/blog" className="hover:text-teal transition-colors">Blog</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">What Is CI/CD?</span>
              </nav>

              <div className="mt-6">
                <span className="inline-block rounded-full bg-teal-deep/20 px-4 py-1.5 text-xs font-medium text-teal">
                  DevOps Fundamentals
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-5xl">
                What Is CI/CD? Continuous Integration and Delivery Explained
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-teal" />
                  <span>Hire DevOps Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-teal" />
                  <time dateTime="2024-01-15">January 15, 2024</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal text-xs font-medium">Updated July 2026</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-gray">Share:</span>
                <div className="flex gap-1">
                  {[
                    { icon: FaTwitter, href: "https://twitter.com/intent/tweet?text=What%20Is%20CI%2FCD%3F%20Continuous%20Integration%20%26%20Delivery%20(2026)&url=https://www.hiredevopsexpert.com/blog/what-is-ci-cd", color: "hover:text-[#1DA1F2]" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.hiredevopsexpert.com/blog/what-is-ci-cd", color: "hover:text-[#0A66C2]" },
                    { icon: Mail, href: "mailto:?subject=What%20Is%20CI%2FCD%3F%20Continuous%20Integration%20%26%20Delivery%20(2026)&body=Check%20out%20this%20article%3A%20https%3A%2F%2Fwww.hiredevopsexpert.com%2Fblog%2Fwhat-is-ci-cd", color: "hover:text-teal" }
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`rounded-lg p-2 text-gray transition-colors ${social.color}`}
                        aria-label={`Share on ${social.icon.name}`}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-64">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-teal" />
                  <div>
                    <p className="text-sm text-gray">Reading Time</p>
                    <p className="text-lg font-semibold text-white">8 minutes</p>
                  </div>
                </div>
                <div className="mt-4 h-px bg-white/10" />
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-gray">Topics covered:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["CI/CD", "Continuous Integration", "Continuous Delivery", "DevOps Pipelines", "Deployment"].map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sticky TOC */}
      <Section className="py-8 md:py-12">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Article Content */}
            <div className="flex-1 min-w-0">

              {/* Article Content */}
              <div className="max-w-[68ch]">
                {/* Direct Answer Box */}
                <div className="rounded-xl border-l-4 border-teal-deep bg-mist/50 p-4 md:p-6 mb-8">
                  <p className="text-sm font-semibold text-teal-deep mb-2">Direct answer, read this first</p>
                  <p className="text-base md:text-lg leading-relaxed text-ink">
                    <strong>CI/CD automates how code moves from a developer&apos;s commit to production.</strong> Continuous integration (CI) automatically merges, builds, and tests every change. Continuous delivery (CD) keeps that tested code ready to release with one click, while continuous deployment goes further and releases every passing change automatically. Together they let teams ship faster with fewer bugs and less downtime. You can run CI on its own, but you cannot do CD without CI first.
                  </p>
                </div>

                {/* Section 1 */}
                <h2 id="what-problem-does-ci-cd-solve" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">01</span>
                  What problem does CI/CD solve?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Picture a small team without it. A developer finishes a feature and it sits for two weeks, because releasing means someone manually pulling the latest code, running the build steps in the right order, testing by hand, and pushing to the server after hours so customers don&apos;t see the fallout if it goes wrong.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Changes pile up between releases, so when something does break, there are two weeks of changes to search through to find the cause. Engineers call this &quot;integration hell&quot;: the longer code sits unmerged and untested, the more painful it is to combine. CI/CD does the opposite of waiting. It integrates, tests, and releases small changes constantly, so nothing has a chance to pile up.
                </p>

                {/* Section 2 */}
                <h2 id="what-does-ci-cd-actually-mean" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">02</span>
                  What does CI/CD actually mean?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The two letters cover related but distinct ideas, and this is where most explanations get muddy. Kept simple:
                </p>
                <div className="space-y-4 my-4">
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-teal-deep" />
                      CI, continuous integration, is about the code coming together.
                    </h4>
                    <p className="mt-1 text-sm text-slate">Every time a developer pushes a change, it is automatically merged into a shared repository, built, and tested. You find out within minutes whether the change is safe.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-teal-deep" />
                      CD, continuous delivery or deployment, is about the code going out.
                    </h4>
                    <p className="mt-1 text-sm text-slate">Once a change passes CI, it is automatically prepared and moved toward production, either up to a final human approval (delivery) or all the way to live users (deployment).</p>
                  </div>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  You can do CI on its own. You cannot really do CD without CI first, because releasing on demand only works when every change is already built and tested automatically.
                </p>

                {/* Section 3 */}
                <h2 id="ci-vs-continuous-delivery-vs-continuous-deployment" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">03</span>
                  CI vs continuous delivery vs continuous deployment
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  This is the distinction worth getting right, because the two &quot;CD&quot;s are not the same thing. Mixing them up leads to teams thinking they have automated more, or less, than they actually have.
                </p>

                {/* Table - Mobile responsive */}
                <div className="my-6 md:my-8 overflow-x-auto -mx-4 md:mx-0">
                  <div className="min-w-[640px] md:min-w-full px-4 md:px-0">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-mist/50">
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm"></th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Continuous Integration (CI)</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Continuous Delivery (CD)</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Continuous Deployment (CD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {COMPARISON_ROWS.map((row, index) => (
                          <tr key={index} className="hover:bg-mist/30 transition-colors">
                            <td className="border border-mist px-3 py-3 font-medium text-ink text-xs md:text-sm">{row.label}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">
                              {CD_COMPARISON[0][row.key as keyof typeof CD_COMPARISON[0]]}
                            </td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">
                              {CD_COMPARISON[1][row.key as keyof typeof CD_COMPARISON[1]]}
                            </td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">
                              {CD_COMPARISON[2][row.key as keyof typeof CD_COMPARISON[2]]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-xl bg-mist p-4 md:p-6 my-4">
                  <p className="text-sm md:text-base text-slate leading-relaxed">
                    <span className="font-medium text-ink">In plain terms:</span> continuous delivery keeps you always ready to release with one click, but a person still chooses when. Continuous deployment removes even that click, so every change that passes the tests goes live on its own. Deployment is faster; delivery gives you a moment of human control. Many teams run continuous delivery for a while before they trust their tests enough for full continuous deployment.
                  </p>
                </div>

                {/* Section 4 */}
                <h2 id="how-does-a-ci-cd-pipeline-work" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">04</span>
                  How does a CI/CD pipeline work?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The whole thing runs as a pipeline: an automated sequence that carries a change from a developer&apos;s commit to production. Most pipelines follow the same stages.
                </p>

                {/* CI/CD Pipeline Image */}
                <div className="my-6 md:my-8 overflow-hidden rounded-xl border border-mist bg-white p-3 md:p-6 shadow-sm">
                  <div className="relative w-full" style={{ aspectRatio: "16/5" }}>
                    <Image
                      src="/ci-cd-pipeline.png"
                      alt="A CI/CD pipeline diagram showing the flow from commit through build, test, release, deploy, and monitor stages, with CI covering commit, build, and test, and CD covering release and deploy, with monitoring feeding back."
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-slate/70">
                    A CI/CD pipeline: CI covers commit, build, and test; CD covers release and deploy, with monitoring feeding back.
                  </p>
                </div>

                {/* Pipeline Stages Table */}
                <div className="my-6 md:my-8 overflow-x-auto -mx-4 md:mx-0">
                  <div className="min-w-[640px] md:min-w-full px-4 md:px-0">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-mist/50">
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Stage</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">What happens</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Common tools</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PIPELINE_STAGES.map((stage, index) => (
                          <tr key={index} className="hover:bg-mist/30 transition-colors">
                            <td className="border border-mist px-3 py-3 font-medium text-ink text-xs md:text-sm">
                              <div className="flex items-center gap-2">
                                <stage.icon className="h-4 w-4 text-teal-deep" />
                                {stage.stage}
                              </div>
                            </td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{stage.description}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{stage.tools}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  A useful principle here is &quot;build once, deploy anywhere&quot;: the same tested artifact moves through staging and production, so you are never rebuilding and hoping the result matches.
                </p>

                {/* Section 5 */}
                <h2 id="benefits-of-ci-cd" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">05</span>
                  What are the benefits of CI/CD?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Done well, CI/CD changes how a team ships:
                </p>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Rocket className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">You release faster.</p>
                      <p className="text-sm text-slate">Small automated releases mean features reach users in days, not weeks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">You catch bugs early.</p>
                      <p className="text-sm text-slate">Tests run on every change, so problems surface while they are small and easy to trace, not two weeks later buried under other changes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Releases stop being scary.</p>
                      <p className="text-sm text-slate">With automated tests and a repeatable path to production, deploying stops being an after-hours event.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Recovery is faster.</p>
                      <p className="text-sm text-slate">When something does slip through, small changes are easy to roll back.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">The team sees everything.</p>
                      <p className="text-sm text-slate">Everyone can see the status of every build, test, and deployment, which cuts the &quot;works on my machine&quot; friction.</p>
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  This is also measurable. Two of the industry-standard <Link href="/blog/what-is-devops#dora-metrics" className="text-teal-deep hover:underline">DORA metrics</Link>, deployment frequency and lead time for changes, are essentially a scorecard for how well your CI/CD is working.
                </p>

                {/* Section 6 */}
                <h2 id="ci-cd-tools" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">06</span>
                  What tools do you need for CI/CD?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  You do not need every tool to understand CI/CD, and you certainly do not need all of them. The common building blocks are a version control host (GitHub, GitLab), a pipeline engine (GitHub Actions, GitLab CI, Jenkins, CircleCI), and, for GitOps-style delivery, a tool like Argo CD. The right stack depends on where your code already lives and where it runs. Setting the pipeline up properly is what our <Link href="/ci-cd-pipeline-setup-services" className="text-teal-deep hover:underline">CI/CD pipeline setup</Link> work focuses on.
                </p>

                {/* Section 7 */}
                <h2 id="ci-cd-in-2026" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">07</span>
                  What does CI/CD look like in 2026?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  A few shifts are worth knowing about, because they change what a modern pipeline looks like:
                </p>

                <div className="space-y-4 my-4">
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Shield className="h-5 w-5 text-teal-deep" />
                      Security moved into the pipeline.
                    </h4>
                    <p className="mt-1 text-sm text-slate">Scanning code, dependencies, containers, and secrets is now a standard step rather than a separate audit at the end. The practice is called DevSecOps, and the idea is to catch issues while they are cheap to fix.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-teal-deep" />
                      GitOps.
                    </h4>
                    <p className="mt-1 text-sm text-slate">More teams manage deployments through Git itself, so the state of production is defined in a repository and a tool reconciles reality to match it.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Cloud className="h-5 w-5 text-teal-deep" />
                      Infrastructure in the pipeline.
                    </h4>
                    <p className="mt-1 text-sm text-slate">Infrastructure-as-code changes now flow through the same CI/CD process as application code, tested and reviewed the same way.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-teal-deep" />
                      AI assistance.
                    </h4>
                    <p className="mt-1 text-sm text-slate">Pipelines are starting to use AI to flag risky changes, pick which tests to run, and speed up diagnosis when a build fails. It is useful for cutting noise, though a human still owns the call on what ships.</p>
                  </div>
                </div>

                {/* Section 8 */}
                <h2 id="do-you-need-ci-cd" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">08</span>
                  Do you need CI/CD, and how do you start?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Almost any team shipping software regularly benefits from at least basic CI/CD. The mistake startups make is the opposite of skipping it: they try to build an elaborate, multi-stage pipeline on day one and get bogged down.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Start simple. A minimal but real pipeline that builds, runs your tests, and deploys on every push to your main branch is worth more than a sophisticated one you never finish. You add stages, security scans, staging environments, and automated rollbacks as the product and team grow. The goal on day one is just to stop releasing by hand.
                </p>

                <div className="rounded-xl border border-teal-deep/20 bg-teal-deep/5 p-4 md:p-6 text-center my-6">
                  <p className="text-base md:text-lg font-medium text-ink">
                    Get it set up right
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    Want CI/CD set up correctly from the start without pulling your engineers off product? That is exactly what our <Link href="/ci-cd-pipeline-setup-services" className="text-teal-deep hover:underline">CI/CD pipeline setup</Link> and <Link href="/managed-devops-services" className="text-teal-deep hover:underline">managed DevOps</Link> work are for.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
                  >
                    Book a free technical call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="mt-2 text-xs text-slate/70">We will tell you what is worth doing now and what can wait.</p>
                </div>
              </div>
            </div>

            {/* Sticky Table of Contents - Desktop */}
            <div className="hidden lg:block">
              <TableOfContents items={TABLE_OF_CONTENTS} />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="border-y border-mist bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-[68ch]">
            <div className="text-center">
              <Eyebrow tone="teal-deep">Frequently Asked Questions</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold text-ink md:text-3xl">
                Common questions about CI/CD
              </h2>
              <p className="mt-2 text-slate">Quick answers to the most common CI/CD questions.</p>
            </div>

            <div className="mt-8 space-y-3">
              {FAQS.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-lg border border-mist bg-off transition-all hover:shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-4 py-3 md:px-6 md:py-4 text-left font-medium text-ink transition-colors hover:text-teal-deep">
                    <span className="flex items-center gap-3 text-sm md:text-base">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-xs font-bold text-teal-deep">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                    <svg
                      className="ml-4 h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-6 md:pb-4 text-sm text-slate">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Content */}
      <Section className="border-b border-mist bg-mist/30 py-12 md:py-16">
        <Container>
          <div className="text-center">
            <Eyebrow tone="teal-deep">Keep Reading</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold text-ink md:text-3xl">
              More DevOps insights
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "What Is DevOps? A Practical Guide for Startups",
                href: "/blog/what-is-devops",
                icon: BookOpen
              },
              {
                title: "What Does a DevOps Engineer Do?",
                href: "/blog/what-does-a-devops-engineer-do",
                icon: User
              },
              {
                title: "Minimum Viable DevOps for Startups",
                href: "/blog/minimum-viable-devops-for-startups",
                icon: Target
              }
            ].map((post) => {
              const Icon = post.icon;
              return (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group rounded-xl border border-mist bg-white p-4 md:p-6 transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-ink group-hover:text-teal-deep transition-colors text-sm md:text-base">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-sm text-teal-deep">Read more →</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-ink py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
        </div>
        <Container>
          <div className="mx-auto max-w-[68ch] text-center text-white">
            <div className="inline-block rounded-full bg-teal-deep/20 px-4 py-1.5 text-sm font-medium text-teal">
              Get Expert Help
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
              Need help implementing CI/CD?
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray">
              Book a free technical call and we will tell you honestly what is worth doing now and what can wait.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
              >
                Book a Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                Browse More Articles
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray/70">
              No pressure. Just a conversation to see if we&apos;re a good fit.
            </p>
          </div>
        </Container>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What Is CI/CD? Continuous Integration and Delivery Explained",
            "description": "CI/CD automates building, testing, and releasing code so your team ships faster without breaking production. Here's what it means and how to start.",
            "author": {
              "@type": "Person",
              "name": "Hire DevOps Expert Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hire DevOps Expert",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.hiredevopsexpert.com/footerLogo.png"
              }
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-07-01",
            "mainEntityOfPage": "https://www.hiredevopsexpert.com/blog/what-is-ci-cd"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hiredevopsexpert.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.hiredevopsexpert.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "What Is CI/CD?", "item": "https://www.hiredevopsexpert.com/blog/what-is-ci-cd" }
            ]
          })
        }}
      />
    </main>
  );
}