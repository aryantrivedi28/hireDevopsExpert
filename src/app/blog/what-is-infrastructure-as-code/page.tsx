// app/blog/what-is-infrastructure-as-code/page.tsx
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
  Terminal,
  Database,
  Network,
  FileCode,
  GitPullRequest,
  Monitor,
  Cpu
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { TableOfContents } from "../what-is-devops/components/TableOfContents";

export const metadata: Metadata = {
  title: "What Is Infrastructure as Code (IaC)? A 2026 Guide",
  description: "Infrastructure as code (IaC) lets you build and manage cloud infrastructure with version-controlled code instead of manual setup. Here's what it means and how to start.",
  keywords: "infrastructure as code, terraform, opentofu, iac, devops, cloud infrastructure, iac tools",
  openGraph: {
    title: "What Is Infrastructure as Code (IaC)? A 2026 Guide",
    description: "Infrastructure as code (IaC) lets you build and manage cloud infrastructure with version-controlled code instead of manual setup. Here's what it means and how to start.",
    url: "https://www.hiredevopsexpert.com/blog/what-is-infrastructure-as-code",
    type: "article",
    publishedTime: "2024-01-15",
    authors: ["Hire DevOps Expert Team"],
    tags: ["Infrastructure as Code", "Terraform", "OpenTofu", "IaC", "DevOps"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Infrastructure as Code (IaC)? A 2026 Guide",
    description: "Infrastructure as code (IaC) lets you build and manage cloud infrastructure with version-controlled code instead of manual setup. Here's what it means and how to start.",
  },
};

// Table of Contents data
const TABLE_OF_CONTENTS = [
  { id: "what-problem-does-iac-solve", label: "What problem does IaC solve?" },
  { id: "what-does-iac-actually-mean", label: "What does infrastructure as code actually mean?" },
  { id: "declarative-vs-imperative", label: "Declarative vs imperative, and mutable vs immutable" },
  { id: "iac-vs-iaas", label: "IaC vs IaaS: what is the difference?" },
  { id: "how-does-iac-work", label: "How does infrastructure as code work?" },
  { id: "benefits-of-iac", label: "What are the benefits of IaC?" },
  { id: "which-iac-tool", label: "Which IaC tool should you use in 2026?" },
  { id: "do-you-need-iac", label: "Do you need IaC, and how do you start?" },
];

// FAQ data
const FAQS = [
  {
    question: "What is infrastructure as code in simple terms?",
    answer: "It is writing your server and cloud setup as code, so a tool can build it for you automatically. Instead of clicking around a console, you describe what you want in a file, and the infrastructure gets created to match, the same way every time."
  },
  {
    question: "Is Terraform infrastructure as code?",
    answer: "Yes. Terraform is one of the most popular IaC tools. It reads code that describes your desired infrastructure and provisions it across cloud providers. OpenTofu, an open-source fork of Terraform, and Pulumi are common alternatives."
  },
  {
    question: "What is the difference between IaC and IaaS?",
    answer: "IaaS (infrastructure as a service) is a cloud model where you rent virtual servers, storage, and networking. IaC (infrastructure as code) is a practice for managing and provisioning that infrastructure through code. You often use IaC to manage IaaS resources, but they are different concepts."
  },
  {
    question: "What language is used for infrastructure as code?",
    answer: "It depends on the tool. Terraform and OpenTofu use HCL (HashiCorp Configuration Language). Pulumi uses general-purpose languages like Python, TypeScript, and Go. CloudFormation uses YAML or JSON."
  },
  {
    question: "What is configuration drift?",
    answer: "Configuration drift is when the real state of your infrastructure slowly diverges from its intended state, usually because of manual changes. IaC reduces drift by making the code the single source of truth and letting the tool detect differences."
  },
  {
    question: "Is infrastructure as code hard to learn?",
    answer: "The basics are approachable. You can provision a simple environment with a small amount of Terraform or OpenTofu code fairly quickly. The harder parts, like state management, module design, and testing, come later as your setup grows."
  },
  {
    question: "Do small teams need IaC?",
    answer: "Most do, once they have more than a couple of servers or more than one environment. Even a small amount of IaC removes the biggest source of 'it works in staging but not production' problems. Start small and expand."
  }
];

// Declarative vs Imperative data
const DECLARATIVE_IMPERATIVE_DATA = [
  {
    type: "Declarative",
    define: "The end state you want",
    tool: "Figures out how to reach it",
    examples: "Terraform, OpenTofu, Pulumi, CloudFormation",
    bestFor: "Most infrastructure, the common choice"
  },
  {
    type: "Imperative",
    define: "The exact steps to get there",
    tool: "Follows your steps in order",
    examples: "Chef, shell scripts (Ansible is mostly declarative)",
    bestFor: "Fine control over a specific process"
  }
];

// IaC Tools data
const IAC_TOOLS = [
  {
    tool: "Terraform",
    language: "HCL",
    license: "BSL, source-available (IBM/HashiCorp)",
    bestFor: "The largest ecosystem and talent pool",
    icon: Cloud
  },
  {
    tool: "OpenTofu",
    language: "HCL",
    license: "MPL 2.0, open source (Linux Foundation)",
    bestFor: "Teams that want an open, drop-in Terraform",
    icon: Shield
  },
  {
    tool: "Pulumi",
    language: "Python, TypeScript, Go",
    license: "Apache 2.0, open source",
    bestFor: "Teams who prefer real programming languages",
    icon: Code
  },
  {
    tool: "CloudFormation",
    language: "YAML or JSON",
    license: "Proprietary (AWS)",
    bestFor: "Teams committed fully to AWS",
    icon: Cloud
  }
];

const COMPARISON_ROWS = [
  { label: "You define", key: "define" },
  { label: "The tool", key: "tool" },
  { label: "Example tools", key: "examples" },
  { label: "Best for", key: "bestFor" }
];

export default function WhatIsInfrastructureAsCodePage() {
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
                <span className="text-white">What Is Infrastructure as Code?</span>
              </nav>

              <div className="mt-6">
                <span className="inline-block rounded-full bg-teal-deep/20 px-4 py-1.5 text-xs font-medium text-teal">
                  Cloud & Infrastructure
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-5xl">
                What Is Infrastructure as Code (IaC)? A Practical Guide
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
                    { icon: FaTwitter, href: "https://twitter.com/intent/tweet?text=What%20Is%20Infrastructure%20as%20Code%20(IaC)%3F%20A%202026%20Guide&url=https://www.hiredevopsexpert.com/blog/what-is-infrastructure-as-code", color: "hover:text-[#1DA1F2]" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.hiredevopsexpert.com/blog/what-is-infrastructure-as-code", color: "hover:text-[#0A66C2]" },
                    { icon: Mail, href: "mailto:?subject=What%20Is%20Infrastructure%20as%20Code%20(IaC)%3F%20A%202026%20Guide&body=Check%20out%20this%20article%3A%20https%3A%2F%2Fwww.hiredevopsexpert.com%2Fblog%2Fwhat-is-infrastructure-as-code", color: "hover:text-teal" }
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
                    {["Infrastructure as Code", "Terraform", "OpenTofu", "IaC", "DevOps"].map((tag) => (
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
                    <strong>Infrastructure as code means building and managing your servers, networks, and databases with version-controlled code instead of manual setup.</strong> You describe the infrastructure you want, and a tool like Terraform, OpenTofu, or Pulumi makes reality match it. The payoff is consistency, speed, and an end to configuration drift, the slow divergence that happens when infrastructure is changed by hand.
                  </p>
                </div>

                {/* Section 1 */}
                <h2 id="what-problem-does-iac-solve" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">01</span>
                  What problem does IaC solve?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Someone set up your production servers by clicking around the AWS console eight months ago. That person has since left. Now staging behaves differently from production, nobody is quite sure why, and rebuilding either one would take days of careful guesswork.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  That slow divergence has a name: <strong>configuration drift.</strong> When infrastructure is changed by hand, every server gradually becomes a unique &quot;snowflake&quot; that no one fully understands, and the differences between environments quietly pile up until something breaks in production that worked everywhere else. Manual setup is also slow, hard to review, and impossible to repeat exactly.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Infrastructure as code attacks all of that by turning your infrastructure into text files. Because the setup lives in code, it can be reviewed, versioned, copied, and rebuilt identically, and drift becomes visible instead of invisible.
                </p>

                {/* Section 2 */}
                <h2 id="what-does-iac-actually-mean" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">02</span>
                  What does infrastructure as code actually mean?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The core idea is simple: instead of configuring infrastructure through a web console or a series of manual commands, you <strong>describe it in code</strong>, and a tool makes reality match that description.
                </p>
                <div className="rounded-xl border border-mist bg-white p-4 md:p-6 my-4">
                  <p className="text-sm md:text-base text-slate leading-relaxed">
                    A small Terraform file might say &quot;I want one web server of this size, in this region, with these firewall rules.&quot; You run the tool, and it creates exactly that. Change the file to say two servers, run it again, and it adds the second one. The code is the single source of truth for what your infrastructure should be, and it lives in version control alongside your application code, with the same reviews and history.
                  </p>
                </div>

                {/* Section 3 */}
                <h2 id="declarative-vs-imperative" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">03</span>
                  Declarative vs imperative, and mutable vs immutable
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  When you adopt IaC, you run into two design choices worth understanding. The first is declarative vs imperative. This is the bigger one, and most modern tools are declarative.
                </p>

                {/* Table - Mobile responsive */}
                <div className="my-6 md:my-8 overflow-x-auto -mx-4 md:mx-0">
                  <div className="min-w-[640px] md:min-w-full px-4 md:px-0">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-mist/50">
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm"></th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Declarative</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Imperative</th>
                        </tr>
                      </thead>
                      <tbody>
                        {COMPARISON_ROWS.map((row, index) => (
                          <tr key={index} className="hover:bg-mist/30 transition-colors">
                            <td className="border border-mist px-3 py-3 font-medium text-ink text-xs md:text-sm">{row.label}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">
                              {DECLARATIVE_IMPERATIVE_DATA[0][row.key as keyof typeof DECLARATIVE_IMPERATIVE_DATA[0]]}
                            </td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">
                              {DECLARATIVE_IMPERATIVE_DATA[1][row.key as keyof typeof DECLARATIVE_IMPERATIVE_DATA[1]]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The second choice is mutable vs immutable. Mutable infrastructure is updated in place (you patch the existing server). Immutable infrastructure is never changed after it is created; when you need a change, you build a fresh server from the code and replace the old one. Immutable is more predictable, because every server is built the same way from scratch, and it pairs naturally with IaC.
                </p>

                {/* Section 4 */}
                <h2 id="iac-vs-iaas" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">04</span>
                  IaC vs IaaS: what is the difference?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  These get confused because they share three letters, so it is worth being clear. <strong>IaaS</strong> (infrastructure as a service) is a cloud model where a provider rents you virtual servers, storage, and networking, the raw building blocks. <strong>IaC</strong> (infrastructure as code) is a practice for provisioning and managing infrastructure through code. You often use IaC to manage IaaS resources, but they are different ideas: one is what you rent, the other is how you manage it. IaC also works on-premises, not just in the cloud.
                </p>

                {/* Section 5 */}
                <h2 id="how-does-iac-work" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">05</span>
                  How does infrastructure as code work?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  In practice, a typical IaC workflow has a few steps.
                </p>

                {/* IaC Workflow Image */}
                <div className="my-6 md:my-8 overflow-hidden rounded-xl border border-mist bg-white p-3 md:p-6 shadow-sm">
                  <div className="relative w-full" style={{ aspectRatio: "16/6" }}>
                    <Image
                      src="/iac-workflow.png"
                      alt="How IaC works: your code (desired state) feeds a tool that plans and applies changes, while a state file tracks reality and catches drift."
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-slate/70">
                    How IaC works: your code (desired state) feeds a tool that plans and applies changes, while a state file tracks reality and catches drift.
                  </p>
                </div>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <FileCode className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Write code.</p>
                      <p className="text-sm text-slate">You write code describing the infrastructure you want.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Plan.</p>
                      <p className="text-sm text-slate">The IaC tool runs a plan, showing you exactly what it will create, change, or destroy before anything happens.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Apply.</p>
                      <p className="text-sm text-slate">You review that plan, then apply it, and the tool talks to your cloud provider&apos;s APIs to make it real.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Database className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Track state.</p>
                      <p className="text-sm text-slate">Throughout, the tool keeps a state file that records what it has built, so it can compare the code against reality and show you any drift.</p>
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  It fits naturally into a <Link href="/blog/what-is-ci-cd" className="text-teal-deep hover:underline">CI/CD pipeline</Link>, so infrastructure changes get tested and reviewed like any other code.
                </p>

                {/* Section 6 */}
                <h2 id="benefits-of-iac" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">06</span>
                  What are the benefits of IaC?
                </h2>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Consistency.</p>
                      <p className="text-sm text-slate">Every environment is built from the same code, so staging actually matches production.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Rocket className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Speed.</p>
                      <p className="text-sm text-slate">Spinning up a new environment takes minutes, not days of manual setup.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <GitBranch className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Version control.</p>
                      <p className="text-sm text-slate">Infrastructure changes get reviewed, tracked, and rolled back like any code change.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">No more drift.</p>
                      <p className="text-sm text-slate">The code is the source of truth, so differences become visible and fixable.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Server className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Disaster recovery.</p>
                      <p className="text-sm text-slate">If something is destroyed, you rebuild it exactly from the code.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Lower risk.</p>
                      <p className="text-sm text-slate">The plan step shows you what will change before it changes.</p>
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  For a startup, the practical payoff is that one engineer can manage far more infrastructure, reliably, and a new hire can understand the whole setup by reading the code instead of interviewing whoever built it. Getting this right is the core of our <Link href="/infrastructure-as-code-services" className="text-teal-deep hover:underline">infrastructure as code</Link> work.
                </p>

                {/* Section 7 */}
                <h2 id="which-iac-tool" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">07</span>
                  Which IaC tool should you use in 2026?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The tool landscape shifted more in the last three years than in the decade before, so if your last impression was &quot;just use Terraform,&quot; here is what changed.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  In August 2023, HashiCorp relicensed Terraform from an open-source license to the Business Source License (BSL), which is source-available but restricts building competing products. The community responded within weeks by forking Terraform into <strong>OpenTofu</strong>, an open-source, drop-in alternative now governed by the Linux Foundation, which reached general availability in January 2024. Then, in February 2025, <strong>IBM completed its acquisition of HashiCorp</strong> (a deal valued at roughly $6.4 billion), and the license has not reverted to open source. Meanwhile <strong>Pulumi</strong> kept letting you write infrastructure in real programming languages instead of a dedicated configuration syntax.
                </p>

                {/* IaC Tools Table */}
                <div className="my-6 md:my-8 overflow-x-auto -mx-4 md:mx-0">
                  <div className="min-w-[640px] md:min-w-full px-4 md:px-0">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-mist/50">
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Tool</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Language</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">License</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Best for</th>
                        </tr>
                      </thead>
                      <tbody>
                        {IAC_TOOLS.map((tool, index) => (
                          <tr key={index} className="hover:bg-mist/30 transition-colors">
                            <td className="border border-mist px-3 py-3 font-medium text-ink text-xs md:text-sm">
                              <div className="flex items-center gap-2">
                                <tool.icon className="h-4 w-4 text-teal-deep" />
                                {tool.tool}
                              </div>
                            </td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{tool.language}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{tool.license}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{tool.bestFor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The honest summary: Terraform is still the most widely deployed and has the largest provider ecosystem and talent pool, so it is not going anywhere. OpenTofu is the natural pick for new projects that want an open-source guarantee, and because it is a drop-in fork, migrating is usually low-risk. Pulumi suits teams who would rather write infrastructure in a language they already know. For most startups, the choice between Terraform and OpenTofu is now the more consequential decision, and it is one we help teams make in our <Link href="/terraform-consulting-services" className="text-teal-deep hover:underline">Terraform consulting</Link> work.
                </p>

                {/* Section 8 */}
                <h2 id="do-you-need-iac" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">08</span>
                  Do you need IaC, and how do you start?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  If you have more than a couple of servers, or more than one environment, the answer is almost certainly yes. Manual setup stops scaling quickly, and the cost of drift only grows.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The way to start is small. Do not try to codify your entire existing infrastructure in one weekend. Pick one new environment or one service, define it in code, and get comfortable with the plan-and-apply loop. Put the code in version control from day one, and expand from there as the habit sticks. The goal early on is simply to stop making changes by hand.
                </p>

                <div className="rounded-xl border border-teal-deep/20 bg-teal-deep/5 p-4 md:p-6 text-center my-6">
                  <p className="text-base md:text-lg font-medium text-ink">
                    Get your infrastructure under control
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    Want your infrastructure set up as code correctly from the start, or an existing manual setup brought under control? That is what our <Link href="/infrastructure-as-code-services" className="text-teal-deep hover:underline">infrastructure as code</Link> and <Link href="/managed-devops-services" className="text-teal-deep hover:underline">managed DevOps</Link> work are for.
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
                Common questions about infrastructure as code
              </h2>
              <p className="mt-2 text-slate">Quick answers to the most common IaC questions.</p>
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
                title: "What Is CI/CD? Continuous Integration & Delivery",
                href: "/blog/what-is-ci-cd",
                icon: GitBranch
              },
              {
                title: "What Does a DevOps Engineer Do?",
                href: "/blog/what-does-a-devops-engineer-do",
                icon: User
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
              Need help getting IaC set up right?
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
            "headline": "What Is Infrastructure as Code (IaC)? A Practical Guide",
            "description": "Infrastructure as code (IaC) lets you build and manage cloud infrastructure with version-controlled code instead of manual setup. Here's what it means and how to start.",
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
            "mainEntityOfPage": "https://www.hiredevopsexpert.com/blog/what-is-infrastructure-as-code"
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
              { "@type": "ListItem", "position": 3, "name": "What Is Infrastructure as Code?", "item": "https://www.hiredevopsexpert.com/blog/what-is-infrastructure-as-code" }
            ]
          })
        }}
      />
    </main>
  );
}