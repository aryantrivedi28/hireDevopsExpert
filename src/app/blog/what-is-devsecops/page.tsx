// app/blog/what-is-devsecops/page.tsx
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
  AlertCircle,
  Gauge,
  Lock,
  Key,
  Scan,
  FileCode,
  Database,
  Terminal,
  Eye,
  AlertTriangle,
  Cpu,
  Users
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { TableOfContents } from "../what-is-devops/components/TableOfContents";

// Current date for the blog
const PUBLISHED_DATE = "2026-07-28";
const UPDATED_DATE = "2026-07-28";

export const metadata: Metadata = {
  title: "What Is DevSecOps? Security Built Into Your Pipeline",
  description: "DevSecOps means building security into your pipeline instead of bolting it on at the end. Here is what it actually is, how it differs from DevOps, and the two checks a startup should turn on first.",
  keywords: "devsecops, shift left, application security, startups, saas, secure devops",
  openGraph: {
    title: "What Is DevSecOps? Security Built Into Your Pipeline",
    description: "DevSecOps means building security into your pipeline instead of bolting it on at the end. Here is what it actually is, how it differs from DevOps, and the two checks a startup should turn on first.",
    url: "https://www.hiredevopsexpert.com/blog/what-is-devsecops",
    type: "article",
    publishedTime: PUBLISHED_DATE,
    authors: ["Hire DevOps Expert Team"],
    tags: ["DevSecOps", "Shift Left", "Application Security", "Startups", "SaaS"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is DevSecOps? Security Built Into Your Pipeline",
    description: "DevSecOps means building security into your pipeline instead of bolting it on at the end. Here is what it actually is, how it differs from DevOps, and the two checks a startup should turn on first.",
  },
};

// Table of Contents data
const TABLE_OF_CONTENTS = [
  { id: "what-devsecops-actually-is", label: "What DevSecOps actually is" },
  { id: "the-problem-it-solves", label: "The problem it solves" },
  { id: "devsecops-vs-devops", label: "DevSecOps vs DevOps, and where 'shift left' fits" },
  { id: "how-it-works", label: "How it works: the security checks in your pipeline" },
  { id: "shift-left-and-its-limits", label: "Shift left, and its limits" },
  { id: "security-as-code", label: "Security as code" },
  { id: "what-a-startup-needs-first", label: "What a startup actually needs first" },
  { id: "how-to-measure-it", label: "How to measure it without vanity numbers" },
  { id: "about-the-statistics", label: "About the statistics you'll see everywhere else" },
  { id: "where-this-is-heading", label: "Where this is heading in 2026" },
  { id: "do-you-need-devsecops", label: "Do you need DevSecOps yet?" },
];

// FAQ data
const FAQS = [
  {
    question: "What is DevSecOps, and what does it stand for?",
    answer: "DevSecOps stands for Development, Security, and Operations. It means building security into your delivery pipeline as automated checks that run on every change, rather than treating security as a separate review at the end. Some teams call the same approach secure DevOps."
  },
  {
    question: "What is the difference between DevOps and DevSecOps?",
    answer: "DevOps is developers and operations owning delivery together with an automated path to production. DevSecOps extends that same ownership and automation to security, folding security checks into the pipeline. DevSecOps is not a different process, it is DevOps with security built in rather than added at the end."
  },
  {
    question: "What is shift left security?",
    answer: "Shift left security means moving security checks earlier in the development process, toward the moment code is written, instead of running them at the end. It is a tactic within DevSecOps. Done well it catches issues while they are cheap to fix; done as bolted-on scanners, it just moves alert noise earlier."
  },
  {
    question: "What is the difference between SAST and DAST?",
    answer: "SAST, static application security testing, reads your source code for risky patterns without running it. DAST, dynamic application security testing, tests the running application from the outside the way an attacker would. They find different classes of problem, so most teams use both rather than choosing one."
  },
  {
    question: "Is DevSecOps the same as secure DevOps?",
    answer: "Yes, in practice. Secure DevOps is a plainer name for the same idea: DevOps with security integrated into the pipeline and shared across the team, rather than handled by a separate group at the end."
  },
  {
    question: "What DevSecOps checks should a startup start with?",
    answer: "Secret scanning and dependency scanning. A leaked credential is a common and damaging mistake that is easy to catch automatically, and most of your real risk lives in open-source dependencies you did not write. Both are often free and built into your code host. Add SAST, DAST, and infrastructure scanning as you grow."
  },
  {
    question: "Does DevSecOps slow down releases?",
    answer: "Done badly, with noisy scanners a developer cannot triage, it can. Done well, it speeds you up, because catching an issue at commit is far faster than unpicking it after a failed release. The trick is fewer, well-tuned checks integrated into the existing workflow, not more tools bolted alongside it."
  },
  {
    question: "How do I measure whether DevSecOps is working?",
    answer: "Track time to remediate a known issue, the share of changes that pass checks automatically, and whether findings reach the developer who can act on them. Watch your DORA change failure rate as you add checks. Measure your own trend against last quarter rather than against a published benchmark, and avoid 'vulnerabilities found' as a scoreboard."
  }
];

// Security checks data
const SECURITY_CHECKS = [
  {
    stage: "Commit",
    check: "Secret scanning",
    catches: "Leaked keys and credentials before they land",
    icon: Key
  },
  {
    stage: "Commit",
    check: "SAST (static analysis)",
    catches: "Risky patterns in your own source code",
    icon: FileCode
  },
  {
    stage: "Pre-provision",
    check: "IaC scan",
    catches: "Cloud misconfigurations in your Terraform",
    icon: Cloud
  },
  {
    stage: "Build",
    check: "Dependency scan (SCA)",
    catches: "Known vulnerabilities in open-source packages",
    icon: Database
  },
  {
    stage: "Deploy",
    check: "DAST (dynamic analysis)",
    catches: "Flaws that only appear in the running app",
    icon: Scan
  },
  {
    stage: "Operate",
    check: "Monitoring",
    catches: "Runtime issues and supply-chain alerts",
    icon: Eye
  }
];

const formatDate = (dateString: string) => {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
};

export default function WhatIsDevSecOpsPage() {
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
                <span className="text-white">What Is DevSecOps?</span>
              </nav>

              <div className="mt-6">
                <span className="inline-block rounded-full bg-teal-deep/20 px-4 py-1.5 text-xs font-medium text-teal">
                  DevOps Fundamentals
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-5xl">
                What Is DevSecOps? Security Built Into Your Pipeline
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-teal" />
                  <span>Hire DevOps Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-teal" />
                  <time dateTime={PUBLISHED_DATE}>{formatDate(PUBLISHED_DATE)}</time>
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
                    { icon: FaTwitter, href: "https://twitter.com/intent/tweet?text=What%20Is%20DevSecOps%3F%20Security%20Built%20Into%20Your%20Pipeline&url=https://www.hiredevopsexpert.com/blog/what-is-devsecops", color: "hover:text-[#1DA1F2]" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.hiredevopsexpert.com/blog/what-is-devsecops", color: "hover:text-[#0A66C2]" },
                    { icon: Mail, href: "mailto:?subject=What%20Is%20DevSecOps%3F%20Security%20Built%20Into%20Your%20Pipeline&body=Check%20out%20this%20article%3A%20https%3A%2F%2Fwww.hiredevopsexpert.com%2Fblog%2Fwhat-is-devsecops", color: "hover:text-teal" }
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
                    {["DevSecOps", "Shift Left", "Application Security", "Startups", "SaaS"].map((tag) => (
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
                    <strong>DevSecOps means building security into your delivery pipeline instead of bolting it on at the end.</strong> It is DevOps with security checks automated into every stage: secret and code scanning when you commit, dependency scanning when you build, and dynamic testing after you deploy. For a small team you do not need the whole program. Turn on two checks first, secret scanning and dependency scanning, and add the rest as you grow.
                  </p>
                </div>

                {/* Section 1 */}
                <h2 id="what-devsecops-actually-is" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">01</span>
                  What DevSecOps actually is
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  DevSecOps is a way of building software where security is part of the delivery pipeline rather than a separate step at the end. The people who write and ship the code also own its security, and as many checks as possible run automatically on every change. That is the whole idea.
                </p>
                <div className="rounded-xl bg-mist p-4 md:p-6 my-4">
                  <p className="text-sm md:text-base text-slate leading-relaxed">
                    The name spells out Development, Security, and Operations, and some teams call the same thing secure DevOps. Whichever label you use, the shift is the same: security stops being a gate you pass through once, near release, and becomes a property of how you build, checked continuously.
                  </p>
                </div>

                {/* Section 2 */}
                <h2 id="the-problem-it-solves" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">02</span>
                  The problem it solves
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  In the older model, security lived at the end. You built a feature, and near release a separate team ran a review, filed findings, and handed them back. By then the change was large, the context was cold, and fixing anything meant unpicking work you thought was done. So one of two things happened. Either the release slowed to a crawl while findings got resolved, or the findings got quietly deprioritized and shipped anyway.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Neither is security. The first is expensive, the second is theater. The root cause is structural: when security is somebody else's job and it happens after the work, developers have no incentive to think about it and no cheap moment to fix it. DevSecOps moves the check to where the change is small and the author is still paying attention.
                </p>

                {/* Section 3 */}
                <h2 id="devsecops-vs-devops" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">03</span>
                  DevSecOps vs DevOps, and where &quot;shift left&quot; fits
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  DevOps is developers and operations owning delivery together, with the path from code to production automated. DevSecOps extends that ownership to security: same team, same automation, security folded in rather than bolted on. If you have read our <Link href="/blog/what-is-devops" className="text-teal-deep hover:underline">guide to DevOps</Link>, DevSecOps is that, with the security checks added to the pipeline.
                </p>

                <div className="space-y-4 my-4">
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-teal-deep" />
                      &quot;Shift left&quot;
                    </h4>
                    <p className="mt-1 text-sm text-slate">The tactic: move security earlier, toward the code and the moment it is written, instead of waiting for a review at the end. DevSecOps is the broader culture: security is everyone's responsibility across the whole lifecycle, including how the system runs in production. Put simply, shift left is a tactic and DevSecOps is the culture that tactic serves.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-teal-deep" />
                      SecOps
                    </h4>
                    <p className="mt-1 text-sm text-slate">The operations side of security: monitoring, detection, and incident response for systems already running. DevSecOps is about building security in during development. They are complementary, not the same, and a mature organization does both.</p>
                  </div>
                </div>

                {/* Section 4 */}
                <h2 id="how-it-works" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">04</span>
                  How it works: the security checks in your pipeline
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  DevSecOps is easiest to understand as a set of automated checks, each running at the point in your pipeline where it is cheapest and most useful. Here is the path a change takes.
                </p>

                {/* Security Checks Table */}
                <div className="my-6 md:my-8 overflow-x-auto -mx-4 md:mx-0">
                  <div className="min-w-[640px] md:min-w-full px-4 md:px-0">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-mist/50">
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Stage</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Check</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">What it catches</th>
                        </tr>
                      </thead>
                      <tbody>
                        {SECURITY_CHECKS.map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <tr key={index} className="hover:bg-mist/30 transition-colors">
                              <td className="border border-mist px-3 py-3 font-medium text-ink text-xs md:text-sm">
                                <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                                  item.stage === "Commit" ? "bg-blue-100 text-blue-700" :
                                  item.stage === "Pre-provision" ? "bg-purple-100 text-purple-700" :
                                  item.stage === "Build" ? "bg-amber-100 text-amber-700" :
                                  item.stage === "Deploy" ? "bg-green-100 text-green-700" :
                                  "bg-slate-100 text-slate-700"
                                }`}>
                                  {item.stage}
                                </span>
                              </td>
                              <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">
                                <div className="flex items-center gap-2">
                                  <Icon className="h-4 w-4 text-teal-deep" />
                                  {item.check}
                                </div>
                              </td>
                              <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{item.catches}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 my-4">
                  <p className="text-xs text-amber-800">
                    <span className="font-semibold">Note:</span> The single most useful distinction to hold on to is SAST versus DAST. SAST reads the code; DAST tests the running app. They catch different classes of problem, so you want both, and neither replaces the other. The point of all of it is that these checks run automatically inside your <Link href="/ci-cd-pipeline-setup-services" className="text-amber-800 underline hover:text-amber-900">CI/CD pipeline</Link> and report to the developer in the tools they already use, not to a separate team a fortnight later.
                  </p>
                </div>

                {/* Pipeline Image */}
                <div className="my-6 md:my-8 overflow-hidden rounded-xl border border-mist bg-white p-3 md:p-6 shadow-sm">
                  <div className="relative w-full" style={{ aspectRatio: "16/6" }}>
                    <Image
                      src="/blog/devsecops-pipeline.png"
                      alt="The same pipeline, with a security check at each stage instead of one review at the end. Start with the two highlighted, secret scanning and dependency scanning."
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-slate/70">
                    The same pipeline, with a security check at each stage instead of one review at the end. Start with the two highlighted, secret scanning and dependency scanning.
                  </p>
                </div>

                {/* Section 5 */}
                <h2 id="shift-left-and-its-limits" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">05</span>
                  Shift left, and its limits
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Shifting security left is genuinely good, and it is the core mechanic of DevSecOps. But there is an honest catch that most guides skip, and it is worth knowing before you buy anything.
                </p>

                <div className="space-y-4 my-4">
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      &quot;Shift-left fatigue&quot;
                    </h4>
                    <p className="mt-1 text-sm text-slate">If you bolt scanners next to the developer workflow instead of into it, you do not shift security left, you just move the noise earlier. A developer handed ten thousand findings they cannot triage is not more secure, they have a new backlog to ignore. The fix is not more tools. It is integration and tuning: fewer, higher-signal checks, delivered where the work already happens, so a finding is something a developer acts on rather than dismisses.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      Shift right too
                    </h4>
                    <p className="mt-1 text-sm text-slate">Some problems only show up at runtime, under real traffic, with real data. That is why mature teams also &quot;shift right,&quot; watching the running system through <Link href="/devops-monitoring-observability-services" className="text-teal-deep hover:underline">monitoring and observability</Link>. The goal is left and right together, catching what you can before release and watching for what you cannot, not choosing one over the other.</p>
                  </div>
                </div>

                {/* Section 6 */}
                <h2 id="security-as-code" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">06</span>
                  Security as code
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The idea that made infrastructure reproducible applies to security too. Instead of a security policy written on a wiki page nobody reads, you express the rule as code: version-controlled, reviewed like any other change, and enforced automatically. A misconfiguration does not depend on someone remembering to check for it; it fails the build. This is the same discipline as infrastructure as code, pointed at your guardrails, and it is what keeps security consistent as the team grows.
                </p>

                {/* Section 7 */}
                <h2 id="what-a-startup-needs-first" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">07</span>
                  What a startup actually needs first
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Here is the part the vendor pages leave out. A ten-person team does not need a DevSecOps program with a dedicated security group and six integrated tools. Building that early is the same over-engineering mistake teams make with Kubernetes, effort spent on a scale you do not have yet.
                </p>

                <div className="space-y-4 my-4">
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                    <h4 className="font-semibold text-blue-700 flex items-center gap-2">
                      <Key className="h-5 w-5" />
                      Secret scanning
                    </h4>
                    <p className="mt-1 text-sm text-blue-600">A leaked credential in a public or shared repository is one of the most common and most damaging mistakes a small team makes, and it is one of the easiest to catch automatically. This is usually free and built into GitHub or GitLab.</p>
                  </div>
                  <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                    <h4 className="font-semibold text-purple-700 flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Dependency scanning
                    </h4>
                    <p className="mt-1 text-sm text-purple-600">Most of your real risk lives in open-source packages you did not write. Scanning them for known vulnerabilities is, again, often free and a few minutes to switch on.</p>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Those two cover a large share of the practical risk for a small SaaS product, for almost no cost. Add SAST, DAST, and infrastructure scanning as you grow, as compliance demands it, or as something actually goes wrong. Adopting a security tool because it feels modern, rather than because a real risk is unaddressed, is just the over-building mistake wearing a compliance badge.
                </p>

                {/* Section 8 */}
                <h2 id="how-to-measure-it" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">08</span>
                  How to measure it without vanity numbers
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Do not use &quot;vulnerabilities found&quot; as a scoreboard. Finding more can simply mean you started scanning more, and a rising count tells you nothing about whether you are safer. It is the security version of measuring lines of code.
                </p>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Time to remediate</p>
                      <p className="text-sm text-slate">How long does a known issue sit open before it is fixed?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Pass rate</p>
                      <p className="text-sm text-slate">What share of your changes pass the automated checks without a human gate?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Reach</p>
                      <p className="text-sm text-slate">Do findings actually reach the developer who can fix them, or die in a dashboard?</p>
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  If you already track the four <Link href="/blog/devops-best-practices" className="text-teal-deep hover:underline">DORA metrics</Link>, watch whether your change failure rate moves as you add security checks. As with everything in delivery, measure your own trend against last quarter, not someone else's published benchmark.
                </p>

                <div className="rounded-xl border border-teal-deep/20 bg-teal-deep/5 p-4 md:p-6 text-center my-6">
                  <p className="text-base md:text-lg font-medium text-ink">
                    Not sure which checks you actually need?
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    Tell us what you are shipping and we will give you an honest read on where to start, including if the answer is &quot;the two free ones for now.&quot;
                  </p>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/devsecops-services"
                      className="inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-deep/90"
                    >
                      DevSecOps services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg border border-mist bg-white px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-mist"
                    >
                      Tell us what is breaking
                    </Link>
                  </div>
                </div>

                {/* Section 9 */}
                <h2 id="about-the-statistics" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">09</span>
                  About the statistics you'll see everywhere else
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Search this topic and you will be told that a bug costs 100 times more to fix in production than at design, that shifting left cuts defects by 60 to 90%, and that some large share of breaches were preventable earlier. We are not using any of those, and it is worth saying why.
                </p>
                <div className="rounded-xl bg-mist p-4 md:p-6 my-4">
                  <p className="text-sm md:text-base text-slate leading-relaxed">
                    The 100 times figure is usually credited to a single old study that almost nobody citing it can actually produce, and the multiplier is quoted as 6, 15, 60, 100, and even 1000 times by different pages all pointing at the &quot;same&quot; source. The directional point underneath it is true and completely sufficient: fixing something before it ships is cheaper than fixing it after. You do not need an invented number to justify switching on a free scanner. The defect-reduction and breach percentages are mostly vendor marketing with no method you can inspect, which is exactly the kind of claim this section exists to push back on.
                  </p>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The honest case for DevSecOps does not rest on a big multiplier. It rests on something simpler: a small automated check that runs on every change, at the moment the author still has the context to fix what it finds, is cheap insurance against an expensive class of mistake.
                </p>

                {/* Section 10 */}
                <h2 id="where-this-is-heading" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">10</span>
                  Where this is heading in 2026
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Two shifts are worth knowing, though neither changes the starting advice for a small team.
                </p>

                <div className="space-y-4 my-4">
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-teal-deep" />
                      AI-assisted development
                    </h4>
                    <p className="mt-1 text-sm text-slate">The forcing function this year is the sheer volume of code, much of it now written with AI assistance. When a large amount of your code is generated quickly, a security review bolted on at the end cannot keep pace, which pushes checks into the pipeline out of necessity rather than principle. If you adopt AI coding tools, watch whether your change failure rate creeps up even as you ship faster, the same measurement discipline DevSecOps has always asked for.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Shield className="h-5 w-5 text-teal-deep" />
                      Software supply chain security
                    </h4>
                    <p className="mt-1 text-sm text-slate">Knowing exactly what is in your build through a software bill of materials, and signing artifacts so you can prove provenance. Regulatory pressure around this is rising. For a startup it is worth being aware of and not yet worth building a program around.</p>
                  </div>
                </div>

                {/* Section 11 */}
                <h2 id="do-you-need-devsecops" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">11</span>
                  Do you need DevSecOps yet?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  If you ship software that touches customer data, you need the basics now, and &quot;the basics&quot; is genuinely small: secret scanning and dependency scanning, an afternoon of setup. There is no scale at which that is premature.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  You need a fuller program when one of three things is true: a customer or a compliance requirement like SOC 2 starts asking for it, your product has a security surface actually worth attacking, or you have enough engineers that &quot;security is everyone's job&quot; needs some structure to stay true. You do not need a security team at ten people. You need someone who has set this up before to switch on the right checks and tune them so they help rather than nag. That can be an in-house hire, or <Link href="/managed-devops-services" className="text-teal-deep hover:underline">managed DevOps</Link> if you would rather keep your team on the product. If you are hiring for it, <Link href="/hire-devops-engineer" className="text-teal-deep hover:underline">hire a DevOps engineer</Link> who has run secure pipelines before.
                </p>

                <div className="rounded-xl border border-teal-deep/20 bg-teal-deep/5 p-4 md:p-6 text-center my-6">
                  <p className="text-base md:text-lg font-medium text-ink">
                    Not sure how much security you need yet?
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    Tell us what you are shipping and we will give you an honest answer, including if that answer is &quot;just the two free checks for now.&quot;
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
                  >
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                Common questions about DevSecOps
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
                title: "DevOps Best Practices for Growing Teams",
                href: "/blog/devops-best-practices",
                icon: TrendingUp
              },
              {
                title: "What Is CI/CD? Continuous Integration & Delivery",
                href: "/blog/what-is-ci-cd",
                icon: GitBranch
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
              Not sure how much security you need yet?
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray">
              Tell us what you are shipping and we will give you an honest answer, including if that answer is &quot;just the two free checks for now.&quot;
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
              >
                Get in touch
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
            "headline": "What Is DevSecOps? Security Built Into Your Pipeline",
            "description": "DevSecOps means building security into your pipeline instead of bolting it on at the end. Here is what it actually is, how it differs from DevOps, and the two checks a startup should turn on first.",
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
            "datePublished": PUBLISHED_DATE,
            "dateModified": UPDATED_DATE,
            "mainEntityOfPage": "https://www.hiredevopsexpert.com/blog/what-is-devsecops"
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
              { "@type": "ListItem", "position": 3, "name": "What Is DevSecOps?", "item": "https://www.hiredevopsexpert.com/blog/what-is-devsecops" }
            ]
          })
        }}
      />
    </main>
  );
}