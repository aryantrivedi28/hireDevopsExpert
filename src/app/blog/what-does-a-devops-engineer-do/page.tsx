// app/blog/what-does-a-devops-engineer-do/page.tsx
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
  DollarSign,
  Briefcase,
  AlertCircle,
  Database,
  Terminal,
  Network
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { TableOfContents } from "../what-is-devops/components/TableOfContents";

export const metadata: Metadata = {
  title: "What Does a DevOps Engineer Do? Role, Skills & Cost (2026)",
  description: "A DevOps engineer owns the path from a developer's laptop to production. Here's what they do, the skills they use, what they cost, and if your startup needs one.",
  keywords: "devops engineer, devops role, devops skills, devops cost, devops hiring, devops engineer salary, devops for startups, devops engineer responsibilities",
  openGraph: {
    title: "What Does a DevOps Engineer Do? Role, Skills & Cost (2026)",
    description: "A DevOps engineer owns the path from a developer's laptop to production. Here's what they do, the skills they use, what they cost, and if your startup needs one.",
    url: "https://www.hiredevopsexpert.com/blog/what-does-a-devops-engineer-do",
    type: "article",
    publishedTime: "2024-01-15",
    authors: ["Hire DevOps Expert Team"],
    tags: ["DevOps Engineer", "DevOps Hiring", "Role & Skills", "DevOps Cost", "Startups 2026"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Does a DevOps Engineer Do? Role, Skills & Cost (2026)",
    description: "A DevOps engineer owns the path from a developer's laptop to production. Here's what they do, the skills they use, what they cost, and if your startup needs one.",
  },
};

// Table of Contents data
const TABLE_OF_CONTENTS = [
  { id: "what-problem-does-a-devops-engineer-solve", label: "What problem does a DevOps engineer solve?" },
  { id: "what-does-a-devops-engineer-actually-own", label: "What does a DevOps engineer actually own?" },
  { id: "day-in-the-life", label: "What does a day in the life look like?" },
  { id: "skills-and-tools", label: "What skills and tools does a DevOps engineer use?" },
  { id: "devops-vs-sre-vs-platform-vs-software", label: "DevOps engineer vs SRE vs platform engineer vs software engineer" },
  { id: "what-does-a-devops-engineer-cost", label: "What does a DevOps engineer cost?" },
  { id: "do-you-actually-need-a-devops-engineer", label: "Do you actually need a DevOps engineer yet?" },
  { id: "how-do-you-get-devops-help", label: "How do you get DevOps help: full-time, fractional, or managed?" },
];

// FAQ data
const FAQS = [
  {
    question: "What does a DevOps engineer do day to day?",
    answer: "A mix of building and firefighting: creating and improving CI/CD pipelines, managing cloud infrastructure as code, automating deployments, responding to monitoring alerts and incidents, reviewing infrastructure changes, and keeping cloud costs under control."
  },
  {
    question: "Is a DevOps engineer a developer?",
    answer: "Partly. They write code, but mostly automation, infrastructure, and tooling code rather than product features. Think of them as engineers who specialize in how software is built, shipped, and run rather than in the application itself."
  },
  {
    question: "Do DevOps engineers need to code?",
    answer: "Yes. Not usually front-end product code, but scripting and automation in languages like Python, Bash, or Go, plus infrastructure as code with tools like Terraform. Coding is central to the role."
  },
  {
    question: "What is the difference between a DevOps engineer and an SRE?",
    answer: "A DevOps engineer focuses on the whole delivery pipeline: CI/CD, infrastructure, and automation. An SRE (site reliability engineer) focuses more narrowly on reliability: uptime, service-level objectives, on-call, and incident response. In small teams, one person often does both."
  },
  {
    question: "How much does a DevOps engineer cost?",
    answer: "In the US, roughly $80,000 to $120,000 for entry level and $140,000 to $200,000 or more for senior, with median total compensation around $140,000 to $150,000 in 2026. An India-based or managed team can cost significantly less. Figures are approximate and change quickly."
  },
  {
    question: "Does my startup need a DevOps engineer?",
    answer: "Not on day one. You need one when deploys are slowing you down, you have had avoidable downtime, cloud costs are unmanaged, or your developers are stuck doing infrastructure instead of product. Before a full-time hire, fractional or managed DevOps often fits better."
  },
  {
    question: "Is being a DevOps engineer stressful?",
    answer: "It can be. On-call rotations, production incidents, and balancing deployment speed against stability all add pressure. Good automation, clear ownership, and healthy on-call practices make a big difference."
  }
];

// Skills table data
const SKILLS_DATA = [
  {
    area: "Cloud platform",
    purpose: "Where everything runs",
    tools: "AWS, Azure, Google Cloud",
    icon: Cloud
  },
  {
    area: "CI/CD",
    purpose: "Automating build, test, and deploy",
    tools: "GitHub Actions, GitLab CI, Jenkins",
    icon: GitBranch
  },
  {
    area: "Infrastructure as Code",
    purpose: "Version-controlled infrastructure",
    tools: "Terraform, Pulumi, CloudFormation",
    icon: Layers
  },
  {
    area: "Containers and orchestration",
    purpose: "Packaging and running services",
    tools: "Docker, Kubernetes, Helm",
    icon: Server
  },
  {
    area: "Monitoring and observability",
    purpose: "Seeing what production is doing",
    tools: "Prometheus, Grafana, Datadog",
    icon: BarChart
  },
  {
    area: "Scripting",
    purpose: "Gluing automation together",
    tools: "Python, Bash, Go",
    icon: Terminal
  },
  {
    area: "Security (DevSecOps)",
    purpose: "Catching issues in the pipeline",
    tools: "Snyk, Trivy, secret scanners",
    icon: Shield
  }
];

// Cost data
const COST_DATA = [
  {
    experience: "Entry (0 to 2 years)",
    usCost: "$80,000 to $120,000",
    indiaCost: "₹3 to 6 LPA",
    color: "bg-blue-500/10 text-blue-700 border-blue-200"
  },
  {
    experience: "Mid (3 to 6 years)",
    usCost: "$110,000 to $150,000",
    indiaCost: "₹8 to 20 LPA",
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-200"
  },
  {
    experience: "Senior (7+ years)",
    usCost: "$140,000 to $200,000+",
    indiaCost: "₹20 to 40+ LPA",
    color: "bg-purple-500/10 text-purple-700 border-purple-200"
  }
];

const ROLE_COMPARISON = [
  {
    role: "DevOps Engineer",
    focus: "The whole delivery pipeline.",
    ships: "CI/CD, cloud infra, automation.",
    icon: GitBranch
  },
  {
    role: "SRE",
    focus: "Reliability and uptime.",
    ships: "SLOs, on-call, incident response.",
    icon: Shield
  },
  {
    role: "Platform Engineer",
    focus: "An internal developer platform.",
    ships: "Self-service tools, golden paths.",
    icon: Layers
  },
  {
    role: "Software Engineer",
    focus: "The product itself.",
    ships: "Application features and code.",
    icon: Code
  }
];

export default function WhatDoesADevOpsEngineerDoPage() {
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
                <span className="text-white">What Does a DevOps Engineer Do?</span>
              </nav>

              <div className="mt-6">
                <span className="inline-block rounded-full bg-teal-deep/20 px-4 py-1.5 text-xs font-medium text-teal">
                  DevOps Careers & Hiring
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-5xl">
                What Does a DevOps Engineer Actually Do? A Founder&apos;s Guide
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
                  <span>9 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal text-xs font-medium">Updated July 2026</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-gray">Share:</span>
                <div className="flex gap-1">
                  {[
                    { icon: FaTwitter, href: "https://twitter.com/intent/tweet?text=What%20Does%20a%20DevOps%20Engineer%20Do%3F%20Role%2C%20Skills%20%26%20Cost%20(2026)&url=https://www.hiredevopsexpert.com/blog/what-does-a-devops-engineer-do", color: "hover:text-[#1DA1F2]" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.hiredevopsexpert.com/blog/what-does-a-devops-engineer-do", color: "hover:text-[#0A66C2]" },
                    { icon: Mail, href: "mailto:?subject=What%20Does%20a%20DevOps%20Engineer%20Do%3F%20Role%2C%20Skills%20%26%20Cost%20(2026)&body=Check%20out%20this%20article%3A%20https%3A%2F%2Fwww.hiredevopsexpert.com%2Fblog%2Fwhat-does-a-devops-engineer-do", color: "hover:text-teal" }
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
                    <p className="text-lg font-semibold text-white">9 minutes</p>
                  </div>
                </div>
                <div className="mt-4 h-px bg-white/10" />
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-gray">Topics covered:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["DevOps Engineer", "DevOps Hiring", "Role & Skills", "DevOps Cost", "Startups 2026"].map((tag) => (
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
              {/* Mobile TOC */}
              {/* <TableOfContents items={TABLE_OF_CONTENTS} /> */}

              {/* Article Content */}
              <div className="max-w-[68ch]">
                {/* Direct Answer Box */}
                <div className="rounded-xl border-l-4 border-teal-deep bg-mist/50 p-4 md:p-6 mb-8">
                  <p className="text-sm font-semibold text-teal-deep mb-2">Direct answer, read this first</p>
                  <p className="text-base md:text-lg leading-relaxed text-ink">
                    <strong>A DevOps engineer builds and runs everything between a developer finishing code and a customer using it:</strong> CI/CD pipelines, cloud infrastructure and infrastructure as code, automation, monitoring, security, and increasingly cloud cost. In the US they typically earn around $80,000 to $200,000 or more depending on experience. You do not always need a full-time one; for many startups, fractional or managed DevOps is a better fit than a single expensive hire.
                  </p>
                </div>

                {/* Section 1 */}
                <h2 id="what-problem-does-a-devops-engineer-solve" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">01</span>
                  What problem does a DevOps engineer solve?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Picture where a lot of startups land around their first real growth. The product works. Your two or three developers are shipping features. But deploys take a whole afternoon, the staging environment broke again last week, and the site went down for an hour before anyone noticed. Your developers are spending more time fighting infrastructure than building the thing customers pay for.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Somewhere in there, you started hearing that you need to &quot;hire a DevOps engineer.&quot; The question is what that person would actually own once they arrived.
                </p>

                {/* Section 2 */}
                <h2 id="what-does-a-devops-engineer-actually-own" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">02</span>
                  What does a DevOps engineer actually own?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The simplest way to think about it: everything that happens between a developer finishing a piece of code and a customer using it, plus keeping it healthy afterward, is the DevOps engineer&apos;s territory.
                </p>

                {/* Ownership SVG */}
                <div className="my-6 md:my-8 overflow-hidden rounded-xl border border-mist bg-white p-3 md:p-6 shadow-sm">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/devops-engineer-ownership.svg"
                      alt="What a DevOps engineer owns: CI/CD pipelines, Cloud + IaC, Automation between Developer writes the code and Production real users, plus Monitoring, Security, Cost / FinOps with feedback loop."
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-slate/70">
                    What a DevOps engineer owns: the path from a developer to production, and the feedback loop back.
                  </p>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  In practice that breaks down into a handful of responsibilities:
                </p>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <GitBranch className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">CI/CD pipelines.</p>
                      <p className="text-sm text-slate">They build the automated path that takes a code change, tests it, and releases it, so shipping stops being a manual, nerve-wracking event. This is the core of the job, and what our <Link href="/ci-cd-pipeline-setup-services" className="text-teal-deep hover:underline">CI/CD setup</Link> work is built around.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Cloud className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Cloud infrastructure and IaC.</p>
                      <p className="text-sm text-slate">They set up and manage where your software runs (AWS, Azure, or Google Cloud) and define it as version-controlled <Link href="/infrastructure-as-code-services" className="text-teal-deep hover:underline">infrastructure as code</Link> rather than manual console clicks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Automation.</p>
                      <p className="text-sm text-slate">Anything done by hand twice becomes a script: provisioning, deployments, backups, rollbacks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <BarChart className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Monitoring and reliability.</p>
                      <p className="text-sm text-slate">They make sure you find out about problems before your customers do, with the <Link href="/devops-monitoring-observability-services" className="text-teal-deep hover:underline">monitoring and observability</Link> to see what production is doing and why.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Security.</p>
                      <p className="text-sm text-slate">They bake security checks into the pipeline instead of bolting them on later, the practice known as <Link href="/devsecops-services" className="text-teal-deep hover:underline">DevSecOps</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <DollarSign className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Cost.</p>
                      <p className="text-sm text-slate">Increasingly, they own cloud spend too, right-sizing infrastructure and catching the runaway bills that quietly eat a startup&apos;s runway.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <h2 id="day-in-the-life" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">03</span>
                  What does a day in the life look like?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  There is no standard day, which is part of the point, but a typical one blends building and firefighting.
                </p>
                <div className="rounded-xl bg-mist p-4 md:p-6 my-4">
                  <p className="text-sm md:text-base text-slate leading-relaxed">
                    A morning might go into building a new deployment pipeline for a service the team is launching. Then a monitoring alert fires: response times are creeping up on the checkout service. The DevOps engineer digs into the metrics and logs, traces it to a database running low on connections, and ships a fix. The afternoon goes to writing Terraform so a new environment can be created in minutes instead of a day, reviewing a pull request that touches infrastructure, and tightening a cloud budget alert so the next cost spike gets caught early. If they are on call that week, a 2am page is always possible.
                  </p>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The throughline is ownership. When a deploy fails or production goes down, it is their problem to solve, and their job to make sure it does not happen the same way twice.
                </p>

                {/* Section 4 */}
                <h2 id="skills-and-tools" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">04</span>
                  What skills and tools does a DevOps engineer use?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  A good DevOps engineer is less defined by any single tool than by how they think about systems. That said, most roles expect fluency across these areas:
                </p>

                <div className="my-6 md:my-8 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-mist/50">
                        <th className="border border-mist px-4 py-3 text-left font-semibold text-ink">Skill area</th>
                        <th className="border border-mist px-4 py-3 text-left font-semibold text-ink">What it is for</th>
                        <th className="border border-mist px-4 py-3 text-left font-semibold text-ink">Common tools</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SKILLS_DATA.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                          <tr key={index} className="hover:bg-mist/30 transition-colors">
                            <td className="border border-mist px-4 py-3">
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4 text-teal-deep" />
                                <span className="font-medium text-ink">{skill.area}</span>
                              </div>
                            </td>
                            <td className="border border-mist px-4 py-3 text-slate">{skill.purpose}</td>
                            <td className="border border-mist px-4 py-3 text-slate">{skill.tools}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The more important trait is systems thinking: understanding how the cloud, the pipeline, and the application behave together under load, failure, and change. In 2026, employers increasingly expect that architectural view plus a habit of automating with purpose, rather than a resume full of tool logos.
                </p>

                {/* Section 5 */}
                <h2 id="devops-vs-sre-vs-platform-vs-software" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">05</span>
                  DevOps engineer vs SRE vs platform engineer vs software engineer
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  These titles overlap, and in a small team one person often wears several hats, so the boundaries blur. Still, they focus on different things.
                </p>

                {/* Role Comparison SVG */}
                <div className="my-6 md:my-8 overflow-hidden rounded-xl border border-mist bg-white p-3 md:p-6 shadow-sm">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src="/devops-role-comparison.svg"
                      alt="Comparison of DevOps Engineer, SRE, Platform Engineer, and Software Engineer roles showing their different focus areas and what they ship."
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-slate/70">
                    The same work, split across four roles as a company grows.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                  {ROLE_COMPARISON.map((role) => {
                    const Icon = role.icon;
                    return (
                      <div key={role.role} className="rounded-lg border border-mist bg-white p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-5 w-5 text-teal-deep" />
                          <h4 className="font-semibold text-ink">{role.role}</h4>
                        </div>
                        <p className="text-sm text-slate"><span className="font-medium">Focus:</span> {role.focus}</p>
                        <p className="text-sm text-slate"><span className="font-medium">Ships:</span> {role.ships}</p>
                      </div>
                    );
                  })}
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  A software engineer builds the product. A DevOps engineer builds the road that gets the product safely to users. A site reliability engineer (SRE) concentrates on keeping it up: reliability targets, on-call, and incident response. A platform engineer builds an internal, self-service platform so product engineers can ship without becoming infrastructure experts. At a 10-person startup, one DevOps hire usually covers most of this. At a 500-person company, these become separate teams.
                </p>

                {/* Section 6 */}
                <h2 id="what-does-a-devops-engineer-cost" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">06</span>
                  What does a DevOps engineer cost?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  This is usually the real question behind &quot;do I need one.&quot; Compensation is significant, because the skill set is in high demand. The ranges below are approximate 2026 figures and vary widely by location, company size, and equity, so treat them as a starting point and verify against a current source before you budget.
                </p>

                <div className="my-6 md:my-8 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-mist/50">
                        <th className="border border-mist px-4 py-3 text-left font-semibold text-ink">Experience</th>
                        <th className="border border-mist px-4 py-3 text-left font-semibold text-ink">United States (annual)</th>
                        <th className="border border-mist px-4 py-3 text-left font-semibold text-ink">India (annual)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COST_DATA.map((item, index) => (
                        <tr key={index} className="hover:bg-mist/30 transition-colors">
                          <td className="border border-mist px-4 py-3 font-medium text-ink">{item.experience}</td>
                          <td className="border border-mist px-4 py-3 text-slate">{item.usCost}</td>
                          <td className="border border-mist px-4 py-3 text-slate">{item.indiaCost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 my-4">
                  <p className="text-xs text-amber-800">
                    <span className="font-semibold">Note:</span> US figures synthesized from Glassdoor, Built In, PayScale, and Coursera (2026). US median total comp commonly lands ~$140,000 to $150,000; senior all-in at large tech firms can exceed $200,000. India figures vary sharply by company type and city. All approximate; compensation data dates fast.
                  </p>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The gap between the two columns is why a lot of US startups work with an offshore or managed team instead of, or alongside, a full-time local hire. A mid-level engineer who would cost $130,000 in the US may cost a fraction of that through an India-based team, though the right comparison is total value and reliability, not just the headline rate. It is the model behind our <Link href="/managed-devops-services" className="text-teal-deep hover:underline">managed DevOps</Link> service.
                </p>

                {/* Section 7 */}
                <h2 id="do-you-actually-need-a-devops-engineer" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">07</span>
                  Do you actually need a DevOps engineer yet?
                </h2>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 md:p-6 my-6">
                  <p className="text-amber-800">
                    <span className="font-semibold">The honest answer:</span> Not every stage needs a full-time DevOps hire.
                  </p>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  If you are pre-launch with no users, you do not. Your developers can lean on managed platforms and simple deploys, and your time is better spent finding product-market fit. What you want early is the cheap, high-leverage basics: an automated deploy, version-controlled infrastructure, backups, and a little monitoring.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  You have likely reached the point of needing real DevOps help when a few of these are true: deploys are manual and slow enough that they are holding back releases, you have had avoidable downtime, cloud costs are climbing with no clear owner, your developers are spending significant time on infrastructure instead of product, or there is no one whose job it is to keep production healthy.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The catch for many startups is that they hit those signs before they can justify a $130,000 full-time hire, or before a single senior engineer would even stay busy and challenged. Which leads to the options.
                </p>

                {/* Section 8 */}
                <h2 id="how-do-you-get-devops-help" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">08</span>
                  How do you get DevOps help: full-time, fractional, or managed?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  There are three common ways to cover the work:
                </p>

                <div className="space-y-4 my-6">
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="h-5 w-5 text-teal-deep" />
                      <h4 className="font-semibold text-ink">Full-time hire</h4>
                    </div>
                    <p className="text-sm text-slate">The right move once DevOps is continuous, business-critical, and enough to fill a role. The cost and hiring difficulty are the trade-offs; mid-level engineers in the US often field multiple offers within days.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <User2 className="h-5 w-5 text-teal-deep" />
                      <h4 className="font-semibold text-ink">Fractional or contract</h4>
                    </div>
                    <p className="text-sm text-slate">A senior engineer part-time. Good when you need expertise and setup but not 40 hours a week of it.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="h-5 w-5 text-teal-deep" />
                      <h4 className="font-semibold text-ink">Managed DevOps</h4>
                    </div>
                    <p className="text-sm text-slate">An outside team that owns your pipelines, infrastructure, and monitoring on an ongoing basis. This suits startups that need senior capability and coverage without the cost and overhead of building an in-house team.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-teal-deep/20 bg-teal-deep/5 p-4 md:p-6 text-center my-6">
                  <p className="text-base md:text-lg font-medium text-ink">
                    Not sure which fits?
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    Our <Link href="/devops-for-startups" className="text-teal-deep hover:underline">DevOps for startups</Link> page covers how managed DevOps works, or you can <Link href="/hire-devops-engineer" className="text-teal-deep hover:underline">hire a DevOps engineer</Link> through us directly.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
                  >
                    Book a free technical call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <p className="mt-2 text-xs text-slate/70">We will tell you honestly which one fits.</p>
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
                Common questions about DevOps engineers
              </h2>
              <p className="mt-2 text-slate">Quick answers to the most common questions.</p>
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
                title: "How to Set Up CI/CD Pipeline for SaaS",
                href: "/blog/how-to-set-up-ci-cd-pipeline-for-saas",
                icon: GitBranch
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
              Need senior DevOps without the full-time hire?
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
            "headline": "What Does a DevOps Engineer Actually Do? A Founder's Guide",
            "description": "A DevOps engineer owns the path from a developer's laptop to production. Here's what they do, the skills they use, what they cost, and if your startup needs one.",
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
            "mainEntityOfPage": "https://www.hiredevopsexpert.com/blog/what-does-a-devops-engineer-do"
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
              { "@type": "ListItem", "position": 3, "name": "What Does a DevOps Engineer Do?", "item": "https://www.hiredevopsexpert.com/blog/what-does-a-devops-engineer-do" }
            ]
          })
        }}
      />
    </main>
  );
}