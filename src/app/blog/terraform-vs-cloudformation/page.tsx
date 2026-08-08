// app/blog/terraform-vs-cloudformation/page.tsx
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
  Package,
  Box,
  Network,
  HardDrive,
  Building2,
  GitPullRequest,
  Monitor,
  Cpu,
  Database,
  FileCode
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { TableOfContents } from "../what-is-devops/components/TableOfContents";

// Current date for the blog
const PUBLISHED_DATE = "2026-08-03";
const UPDATED_DATE = "2026-08-03";

export const metadata: Metadata = {
  title: "Terraform vs CloudFormation: Which IaC Tool to Choose",
  description: "Terraform is multi-cloud and uses HCL; CloudFormation is AWS-native and manages state for you. Here is the honest decision, use Terraform for multi-cloud or any non-AWS service, CloudFormation if you are all-in on AWS, plus what the OpenTofu split means in 2026.",
  keywords: "terraform, cloudformation, infrastructure as code, aws, opentofu, iac tools",
  openGraph: {
    title: "Terraform vs CloudFormation: Which IaC Tool to Choose",
    description: "Terraform is multi-cloud and uses HCL; CloudFormation is AWS-native and manages state for you. Here is the honest decision, use Terraform for multi-cloud or any non-AWS service, CloudFormation if you are all-in on AWS, plus what the OpenTofu split means in 2026.",
    url: "https://www.hiredevopsexpert.com/blog/terraform-vs-cloudformation",
    type: "article",
    publishedTime: PUBLISHED_DATE,
    authors: ["Hire DevOps Expert Team"],
    tags: ["Terraform", "CloudFormation", "Infrastructure as Code", "AWS", "OpenTofu"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terraform vs CloudFormation: Which IaC Tool to Choose",
    description: "Terraform is multi-cloud and uses HCL; CloudFormation is AWS-native and manages state for you. Here is the honest decision, use Terraform for multi-cloud or any non-AWS service, CloudFormation if you are all-in on AWS, plus what the OpenTofu split means in 2026.",
  },
};

// Table of Contents data
const TABLE_OF_CONTENTS = [
  { id: "the-short-answer", label: "The short answer: the decision in one rule" },
  { id: "what-terraform-is", label: "What Terraform is" },
  { id: "what-cloudformation-is", label: "What CloudFormation is" },
  { id: "terraform-vs-cloudformation-side-by-side", label: "Terraform vs CloudFormation, side by side" },
  { id: "the-real-differences", label: "The real differences that matter" },
  { id: "the-2026-wildcard", label: "The 2026 wildcard: Terraform's license change and OpenTofu" },
  { id: "you-are-not-limited", label: "You are not limited to these two" },
  { id: "which-should-you-choose", label: "Which should you choose?" },
  { id: "migrating-from-cloudformation", label: "Migrating from CloudFormation to Terraform" },
];

// FAQ data
const FAQS = [
  {
    question: "Is Terraform better than CloudFormation?",
    answer: "Neither is universally better. Terraform wins when you are multi-cloud or use non-AWS services, thanks to one workflow across providers and a large module ecosystem. CloudFormation wins when you are all-in on AWS and want zero state management, automatic rollback, and day-one support for new AWS services."
  },
  {
    question: "Should I use Terraform or CloudFormation?",
    answer: "Use CloudFormation if your infrastructure lives entirely in AWS and you want the simplest AWS-native option. Use Terraform if anything touches a non-AWS service, or you expect to go multi-cloud. Most teams that grow beyond pure AWS end up on Terraform."
  },
  {
    question: "Is Terraform still open source?",
    answer: "Terraform moved from the open-source MPL license to the source-available Business Source License in 2023, so it is no longer OSI open source. Most teams can still use it free for internal work. If a truly open-source license matters to you, OpenTofu is the MPL-licensed community fork."
  },
  {
    question: "What is OpenTofu?",
    answer: "OpenTofu is an open-source fork of Terraform, created after the 2023 license change and governed by the Linux Foundation. It keeps Terraform's HCL language and is a near drop-in replacement for most workflows."
  },
  {
    question: "Can I migrate from CloudFormation to Terraform?",
    answer: "Yes. Teams commonly move to Terraform as they add non-AWS services or need more flexibility. Tools such as cf2tf and former2 help convert templates, and terraform import brings existing resources under management, but plan for real migration effort."
  }
];

// Comparison data
const COMPARISON_DATA = [
  {
    dimension: "Clouds",
    terraform: "Multi-cloud: AWS, Azure, GCP, and many more",
    cloudformation: "AWS only"
  },
  {
    dimension: "Language",
    terraform: "HCL (concise, purpose-built)",
    cloudformation: "JSON or YAML"
  },
  {
    dimension: "State",
    terraform: "You manage it (remote backend such as S3)",
    cloudformation: "AWS manages it, nothing to run"
  },
  {
    dimension: "Rollback",
    terraform: "You review the plan; drift shows on next plan",
    cloudformation: "Automatic rollback to last healthy state"
  },
  {
    dimension: "Ecosystem",
    terraform: "Large provider and module registry",
    cloudformation: "Deep, first-party AWS integration, StackSets"
  },
  {
    dimension: "Cost",
    terraform: "Free tool (paid options for collaboration)",
    cloudformation: "Free tool (you pay for AWS resources)"
  },
  {
    dimension: "Best for",
    terraform: "Multi-cloud, non-AWS services, complex estates",
    cloudformation: "Teams that are all-in on AWS"
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

export default function TerraformVsCloudFormationPage() {
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
                <span className="text-white">Terraform vs CloudFormation</span>
              </nav>

              <div className="mt-6">
                <span className="inline-block rounded-full bg-teal-deep/20 px-4 py-1.5 text-xs font-medium text-teal">
                  Infrastructure as Code
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-5xl">
                Terraform vs CloudFormation: Which IaC Tool to Choose
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
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal text-xs font-medium">Updated August 2026</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-gray">Share:</span>
                <div className="flex gap-1">
                  {[
                    { icon: FaTwitter, href: "https://twitter.com/intent/tweet?text=Terraform%20vs%20CloudFormation%3A%20Which%20IaC%20Tool%20to%20Choose&url=https://www.hiredevopsexpert.com/blog/terraform-vs-cloudformation", color: "hover:text-[#1DA1F2]" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.hiredevopsexpert.com/blog/terraform-vs-cloudformation", color: "hover:text-[#0A66C2]" },
                    { icon: Mail, href: "mailto:?subject=Terraform%20vs%20CloudFormation%3A%20Which%20IaC%20Tool%20to%20Choose&body=Check%20out%20this%20article%3A%20https%3A%2F%2Fwww.hiredevopsexpert.com%2Fblog%2Fterraform-vs-cloudformation", color: "hover:text-teal" }
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
                    <p className="text-lg font-semibold text-white">10 minutes</p>
                  </div>
                </div>
                <div className="mt-4 h-px bg-white/10" />
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-gray">Topics covered:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Terraform", "CloudFormation", "Infrastructure as Code", "AWS", "OpenTofu"].map((tag) => (
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
                  <p className="text-sm font-semibold text-teal-deep mb-2">The short version</p>
                  <p className="text-base md:text-lg leading-relaxed text-ink">
                    Use <strong>Terraform</strong> if you are multi-cloud or touch any non-AWS service; it manages AWS, Azure, GCP, and hundreds of other providers from one workflow using HCL. Use <strong>CloudFormation</strong> if you are all-in on AWS and want an AWS-native tool with zero state management, automatic rollback, and day-one support for new AWS services. If a truly open-source license matters to you, look at OpenTofu, the community fork of Terraform.
                  </p>
                </div>

                {/* Section 1 */}
                <h2 id="the-short-answer" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">01</span>
                  The short answer: the decision in one rule
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Here is the rule that resolves most of these debates. If your infrastructure lives entirely inside AWS and you expect it to stay that way, CloudFormation is a reasonable default, it is AWS-native, free, and there is no state file to manage. If anything in your stack touches a non-AWS service, or you expect to go multi-cloud, Terraform gives you a single tool and workflow to manage all of it.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  In practice, the second case is common. The moment you add Cloudflare for DNS, Datadog for monitoring, or manage a SaaS provider alongside your cloud, CloudFormation can no longer be your one tool, and Terraform can. That is why teams tend to land on Terraform as they grow. Everything below is detail on top of this one rule.
                </p>

                {/* Section 2 */}
                <h2 id="what-terraform-is" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">02</span>
                  What Terraform is
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Terraform is an infrastructure-as-code tool created by HashiCorp in 2014. You describe your infrastructure in a language called HCL (HashiCorp Configuration Language), and Terraform provisions and manages it. Its defining feature is breadth: through its provider ecosystem, Terraform manages resources across AWS, Azure, GCP, and a very large number of other providers and SaaS platforms, all from the same workflow.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Two things define the Terraform experience. First, HCL is concise and purpose-built for infrastructure, with features like for_each, count, conditionals, and reusable modules, and most engineers pick it up quickly. Second, Terraform keeps a state file that tracks every resource it manages. You choose where that state lives, typically a remote backend such as Amazon S3 or a managed service, and you control access to it. That state model gives you flexibility and transparency, at the cost of having to manage the state yourself. Terraform's docs at <a href="https://developer.hashicorp.com/terraform" target="_blank" rel="noopener noreferrer" className="text-teal-deep hover:underline">developer.hashicorp.com</a> are the primary reference.
                </p>

                {/* Section 3 */}
                <h2 id="what-cloudformation-is" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">03</span>
                  What CloudFormation is
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  AWS CloudFormation is Amazon's native infrastructure-as-code service, and it has been around since 2011. You define your resources in JSON or YAML templates, and CloudFormation provisions them as a stack. It is deeply integrated with AWS: new AWS services tend to get CloudFormation support early, and features like StackSets let you deploy across many accounts and regions.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The big practical differences from Terraform are that CloudFormation is AWS-only, and it manages state for you. There is no state file to store or secure; AWS tracks it behind the scenes. CloudFormation also rolls back automatically: if a deployment fails partway, it returns the stack to its last healthy state without you intervening. The tool itself is free; you pay only for the AWS resources it creates. AWS documents it at <a href="https://docs.aws.amazon.com/cloudformation/" target="_blank" rel="noopener noreferrer" className="text-teal-deep hover:underline">docs.aws.amazon.com</a>.
                </p>

                {/* Section 4 */}
                <h2 id="terraform-vs-cloudformation-side-by-side" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">04</span>
                  Terraform vs CloudFormation, side by side
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Here is the direct comparison across the dimensions that usually decide it.
                </p>

                {/* Comparison Table */}
                <div className="my-6 md:my-8 overflow-x-auto -mx-4 md:mx-0">
                  <div className="min-w-[640px] md:min-w-full px-4 md:px-0">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-mist/50">
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Dimension</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Terraform</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">CloudFormation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {COMPARISON_DATA.map((item, index) => (
                          <tr key={index} className="hover:bg-mist/30 transition-colors">
                            <td className="border border-mist px-3 py-3 font-medium text-ink text-xs md:text-sm">{item.dimension}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{item.terraform}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{item.cloudformation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 5 */}
                <h2 id="the-real-differences" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">05</span>
                  The real differences that matter
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Beyond the table, a handful of differences show up in daily work.
                </p>

                <div className="space-y-4 my-4">
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink">State management.</h4>
                    <p className="mt-1 text-sm text-slate">This is the biggest philosophical split. Terraform's user-managed state is more work to set up, but it is inspectable and gives you control over backends and access policies, which teams with strict compliance or audit needs often prefer. CloudFormation's managed state is one less thing to run, at the cost of that transparency.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink">Syntax.</h4>
                    <p className="mt-1 text-sm text-slate">Most engineers find HCL cleaner and more readable than CloudFormation's JSON or YAML, especially as templates grow. CloudFormation's YAML mirrors AWS's own resource model closely, which can feel familiar if you live in AWS, but it gets verbose at scale.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink">Rollback and drift.</h4>
                    <p className="mt-1 text-sm text-slate">CloudFormation's automatic rollback is a genuine convenience. Drift, where someone changes a resource outside your templates, is handled differently: CloudFormation has an explicit drift-detection command you run, while Terraform surfaces drift every time you run a plan, which many teams prefer because you see it constantly rather than having to check.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink">Scale.</h4>
                    <p className="mt-1 text-sm text-slate">CloudFormation stacks have hard limits that push large estates toward many stacks with cross-stack references, which gets fiddly. Terraform's modules and workspaces give you more flexible ways to slice a big estate, though you have to design that structure yourself.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink">Ecosystem.</h4>
                    <p className="mt-1 text-sm text-slate">Terraform's provider and module registry is a real advantage: there are battle-tested modules for common patterns like a VPC, an EKS cluster, or an RDS database, which can save you real time. You will see specific provider counts quoted around the web; treat those numbers loosely, they vary by source. The point that holds is that the breadth is large.</p>
                  </div>
                </div>

                {/* Section 6 */}
                <h2 id="the-2026-wildcard" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">06</span>
                  The 2026 wildcard: Terraform's license change and OpenTofu
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Here is the part most comparisons still skip, and it may matter more to your decision than any feature.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  In 2023, HashiCorp changed Terraform's license from the open-source MPL to the Business Source License (BUSL), a source-available license that is not OSI open source. For most teams using Terraform internally, day-to-day usage did not change; the license mainly restricts offering Terraform as a competing commercial service. But it was a real shift, and it prompted a reaction.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The community forked the last open-source version of Terraform into <strong>OpenTofu</strong>, now hosted by the Linux Foundation. OpenTofu keeps Terraform's HCL language and provider compatibility, has been production-ready since early 2024, and by 2026 is a mature, near drop-in replacement for most Terraform workflows. It has also been accepted into the Cloud Native Computing Foundation. Separately, IBM acquired HashiCorp, with the deal closing in 2025, so Terraform is now an IBM product; that did not change the license, but it raised questions about long-term direction.
                </p>

                {/* Comparison with OpenTofu Image */}
                <div className="my-6 md:my-8 overflow-hidden rounded-xl border border-mist bg-white p-3 md:p-6 shadow-sm">
                  <div className="relative w-full" style={{ aspectRatio: "16/6" }}>
                    <Image
                      src="/blog/terraform-cloudformation-opentofu.png"
                      alt="Terraform vs CloudFormation at a glance, with the OpenTofu wildcard. If an open-source license is a hard requirement, OpenTofu belongs in the conversation alongside these two."
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-slate/70">
                    Terraform vs CloudFormation at a glance, with the OpenTofu wildcard. If an open-source license is a hard requirement, OpenTofu belongs in the conversation alongside these two.
                  </p>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  What does this mean for your choice? If you were going to pick Terraform and an open-source license matters to you or your customers, evaluate OpenTofu as well; for most teams it behaves like Terraform. If you are choosing CloudFormation because you are all-in on AWS, none of this changes your decision. Either way, it is worth knowing the landscape shifted, so you are not surprised later.
                </p>

                {/* Section 7 */}
                <h2 id="you-are-not-limited" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">07</span>
                  You are not limited to these two
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  "Terraform vs CloudFormation" is the common framing, but it is not the whole field. A few alternatives are worth knowing:
                </p>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">OpenTofu</p>
                      <p className="text-sm text-slate">The open-source Terraform fork described above, for teams that want Terraform's model without the BUSL license.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Code className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Pulumi</p>
                      <p className="text-sm text-slate">Which lets you define infrastructure in general-purpose programming languages like TypeScript, Python, or Go, rather than a dedicated config language.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Cloud className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">AWS CDK</p>
                      <p className="text-sm text-slate">Which also uses real programming languages but compiles down to CloudFormation, so it stays AWS-native while giving you a nicer authoring experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Database className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Azure Bicep</p>
                      <p className="text-sm text-slate">Azure's cleaner, native alternative to raw ARM templates, if your world is Azure rather than AWS.</p>
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  You do not need to evaluate all of these. But knowing they exist keeps the decision honest: the answer is not always one of just two tools.
                </p>

                {/* Section 8 */}
                <h2 id="which-should-you-choose" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">08</span>
                  Which should you choose?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Here is the honest, scenario-based verdict.
                </p>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-ink">All-in on AWS, simple to moderate needs:</p>
                      <p className="text-sm text-slate">CloudFormation (or AWS CDK if you want real languages). You get AWS-native integration and nothing extra to manage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-600">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-ink">Multi-cloud, or any non-AWS services:</p>
                      <p className="text-sm text-slate">Terraform. This is its core strength, and it is not close.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-ink">Complex logic, many environments, reusable patterns:</p>
                      <p className="text-sm text-slate">Terraform. HCL and the module registry handle this well.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-ink">Open-source license is a hard requirement:</p>
                      <p className="text-sm text-slate">OpenTofu, which behaves like Terraform for most teams.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-600">
                      <span className="text-xs font-bold">5</span>
                    </div>
                    <div>
                      <p className="font-medium text-ink">Already have deep Terraform or deep CloudFormation expertise:</p>
                      <p className="text-sm text-slate">Lean toward what your team already knows, unless a concrete need pushes you to switch.</p>
                    </div>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  There is no universally correct answer, and you should be skeptical of anyone who gives you one. If you want a second opinion tailored to your stack, our <Link href="/terraform-consulting-services" className="text-teal-deep hover:underline">Terraform consulting</Link> team makes this call with startups regularly, and our <Link href="/infrastructure-as-code-services" className="text-teal-deep hover:underline">infrastructure as code services</Link> cover the broader setup. If you are still getting your head around the fundamentals, our explainer on <Link href="/blog/what-is-infrastructure-as-code" className="text-teal-deep hover:underline">what infrastructure as code is</Link> is a good starting point.
                </p>

                <div className="rounded-xl border border-teal-deep/20 bg-teal-deep/5 p-4 md:p-6 text-center my-6">
                  <p className="text-base md:text-lg font-medium text-ink">
                    Not sure which fits your stack?
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    We help startups choose between Terraform, CloudFormation, and the alternatives, then set it up so it holds as you scale.
                  </p>
                  <Link
                    href="/terraform-consulting-services"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-deep/90"
                  >
                    Terraform consulting
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Section 9 */}
                <h2 id="migrating-from-cloudformation" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">09</span>
                  Migrating from CloudFormation to Terraform
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Because teams often start on CloudFormation and move to Terraform as they grow, this migration is common enough to plan for honestly. It is doable, but it is not free.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The typical path: tools such as cf2tf or former2 help convert existing CloudFormation templates into Terraform configuration, and terraform import brings your already-provisioned resources under Terraform's management so you do not have to recreate them. The work that takes time is reconciling state, testing that Terraform's plan matches reality, and restructuring templates into clean modules rather than a direct one-to-one translation. Budget real engineering time for it, and migrate incrementally rather than all at once. If you would rather not run that migration yourself, our <Link href="/managed-devops-services" className="text-teal-deep hover:underline">managed DevOps services</Link> and <Link href="/devops-automation-services" className="text-teal-deep hover:underline">DevOps automation</Link> teams do exactly this kind of work.
                </p>
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
                Common questions about Terraform and CloudFormation
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
                title: "What Is Infrastructure as Code (IaC)?",
                href: "/blog/what-is-infrastructure-as-code",
                icon: Cloud
              },
              {
                title: "What Is DevOps? A Practical Guide for Startups",
                href: "/blog/what-is-devops",
                icon: BookOpen
              },
              {
                title: "What Is Kubernetes? A Plain-English Guide",
                href: "/blog/what-is-kubernetes",
                icon: Server
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
              Choosing an IaC tool, or untangling one you have outgrown?
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray">
              We help teams pick between Terraform, CloudFormation, and the alternatives, and set up infrastructure as code that will hold as you scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
              >
                Talk to us
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
            "headline": "Terraform vs CloudFormation: Which IaC Tool to Choose",
            "description": "Terraform is multi-cloud and uses HCL; CloudFormation is AWS-native and manages state for you. Here is the honest decision, use Terraform for multi-cloud or any non-AWS service, CloudFormation if you are all-in on AWS, plus what the OpenTofu split means in 2026.",
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
            "mainEntityOfPage": "https://www.hiredevopsexpert.com/blog/terraform-vs-cloudformation"
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
              { "@type": "ListItem", "position": 3, "name": "Terraform vs CloudFormation", "item": "https://www.hiredevopsexpert.com/blog/terraform-vs-cloudformation" }
            ]
          })
        }}
      />
    </main>
  );
}