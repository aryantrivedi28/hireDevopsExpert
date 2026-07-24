// app/blog/what-is-docker/page.tsx
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
  Package,
  Box,
  Terminal,
  HardDrive,
  Network,
  Cpu,
  AlertCircle,
  FileCode
} from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { TableOfContents } from "../what-is-devops/components/TableOfContents";

export const metadata: Metadata = {
  title: "What Is Docker? Containers Explained for Founders",
  description: "Docker packages your app and everything it needs into a container that runs the same everywhere. Here's what Docker is, how images and containers differ, and when you need it.",
  keywords: "docker, containers, docker image vs container, devops, containerization, docker explained",
  openGraph: {
    title: "What Is Docker? Containers Explained in Plain English",
    description: "Docker packages your app and everything it needs into a container that runs the same everywhere. Here's what Docker is, how images and containers differ, and when you need it.",
    url: "https://www.hiredevopsexpert.com/blog/what-is-docker",
    type: "article",
    publishedTime: "2024-01-15",
    authors: ["Hire DevOps Expert Team"],
    tags: ["Docker", "Containers", "Docker Image vs Container", "DevOps", "Containerization"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Docker? Containers Explained for Founders",
    description: "Docker packages your app and everything it needs into a container that runs the same everywhere. Here's what Docker is, how images and containers differ, and when you need it.",
  },
};

// Table of Contents data
const TABLE_OF_CONTENTS = [
  { id: "what-problem-does-docker-solve", label: "What problem does Docker solve?" },
  { id: "what-is-a-container", label: "What is a container?" },
  { id: "docker-image-vs-container", label: "Docker image vs container: the key distinction" },
  { id: "how-does-docker-work", label: "How does Docker work?" },
  { id: "containers-vs-virtual-machines", label: "Containers vs virtual machines" },
  { id: "docker-vs-kubernetes", label: "Docker vs Kubernetes: what is the difference?" },
  { id: "why-use-docker", label: "Why use Docker? The benefits" },
  { id: "docker-in-2026", label: "Docker in 2026: licensing and alternatives" },
  { id: "do-you-need-docker", label: "Do you need Docker, and how do you start?" },
];

// FAQ data
const FAQS = [
  {
    question: "What is Docker in simple terms?",
    answer: "Docker packages an application and everything it needs to run into a single unit called a container. That container behaves the same way on any machine, so software that works on a developer's laptop also works on the server."
  },
  {
    question: "What is the difference between a Docker image and a container?",
    answer: "An image is a read-only blueprint that contains your application and its dependencies. A container is a running instance created from that image, with a writable layer on top. One image can produce many containers."
  },
  {
    question: "What is a Dockerfile?",
    answer: "A Dockerfile is a plain text file that describes how to build an image: which base image to start from, what to install, which files to copy, and what command to run. You build an image from it with docker build."
  },
  {
    question: "What is the difference between containers and virtual machines?",
    answer: "Containers share the host machine's operating system kernel and package only the application and its dependencies, so they are small and start in seconds. Virtual machines run a full guest operating system, so they are larger and slower to start but offer stronger isolation."
  },
  {
    question: "What is the difference between Docker and Kubernetes?",
    answer: "Docker builds and runs individual containers. Kubernetes orchestrates many containers across many machines, handling scheduling, scaling, and recovery. They are complementary, and most teams that use Kubernetes still build their images with Docker."
  },
  {
    question: "Is Docker free?",
    answer: "The core Docker engine is open source and free. Docker Desktop, the desktop application, requires a paid subscription for larger commercial organizations. Check Docker's current pricing for the exact terms, and note that free alternatives such as Podman exist."
  },
  {
    question: "Is Docker hard to learn?",
    answer: "The basics are approachable. Most developers can write a working Dockerfile and run a container within a day. The deeper topics, image optimization, networking, security, and orchestration, take longer, but you do not need them to get value early."
  },
  {
    question: "Do I need Docker and Kubernetes?",
    answer: "Docker, or containers generally, yes for most teams shipping software regularly. Kubernetes, usually not at first. Containerize your applications first; add orchestration only when you have enough services and scale to justify the complexity."
  }
];

// Image vs Container comparison data
const IMAGE_VS_CONTAINER = [
  {
    aspect: "What it is",
    image: "A read-only blueprint or template",
    container: "A running instance created from an image"
  },
  {
    aspect: "Can it change?",
    image: "No, images are immutable",
    container: "Yes, it has a writable layer on top"
  },
  {
    aspect: "Where it lives",
    image: "On disk, or in a registry like Docker Hub",
    container: "Running on a machine"
  },
  {
    aspect: "How you make it",
    image: "docker build",
    container: "docker run"
  },
  {
    aspect: "Relationship",
    image: "One image",
    container: "Many containers from that one image"
  }
];

// Containers vs VMs comparison data
const CONTAINERS_VS_VMS = [
  {
    aspect: "What it virtualizes",
    container: "The application and its dependencies",
    vm: "An entire computer, including the OS"
  },
  {
    aspect: "Operating system",
    container: "Shares the host's kernel",
    vm: "Runs a full guest OS of its own"
  },
  {
    aspect: "Typical size",
    container: "Megabytes to a few hundred megabytes",
    vm: "Gigabytes"
  },
  {
    aspect: "Startup time",
    container: "Seconds",
    vm: "Minutes"
  },
  {
    aspect: "Isolation",
    container: "Process-level, lighter",
    vm: "Stronger, hardware-level"
  },
  {
    aspect: "Best for",
    container: "Microservices, CI/CD, packing many apps per machine",
    vm: "Legacy apps, strict isolation, other operating systems"
  }
];

export default function WhatIsDockerPage() {
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
                <span className="text-white">What Is Docker?</span>
              </nav>

              <div className="mt-6">
                <span className="inline-block rounded-full bg-teal-deep/20 px-4 py-1.5 text-xs font-medium text-teal">
                  DevOps Fundamentals
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-[1.15] text-white md:text-4xl lg:text-5xl">
                What Is Docker? Containers Explained in Plain English
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-teal" />
                  <span>Hire DevOps Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-teal" />
                  <time dateTime="2026-07-15">July 24, 2026</time>
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
                    { icon: FaTwitter, href: "https://twitter.com/intent/tweet?text=What%20Is%20Docker%3F%20Containers%20Explained%20for%20Founders&url=https://www.hiredevopsexpert.com/blog/what-is-docker", color: "hover:text-[#1DA1F2]" },
                    { icon: FaLinkedin, href: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.hiredevopsexpert.com/blog/what-is-docker", color: "hover:text-[#0A66C2]" },
                    { icon: Mail, href: "mailto:?subject=What%20Is%20Docker%3F%20Containers%20Explained%20for%20Founders&body=Check%20out%20this%20article%3A%20https%3A%2F%2Fwww.hiredevopsexpert.com%2Fblog%2Fwhat-is-docker", color: "hover:text-teal" }
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
                    {["Docker", "Containers", "Docker Image vs Container", "DevOps", "Containerization"].map((tag) => (
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
                    <strong>Docker packages an application and everything it needs into a container that runs identically on any machine.</strong> The key distinction: an image is a read-only blueprint built from a Dockerfile, and a container is a running instance of that image. One image can produce many containers. Containers share the host operating system, which is why they are far smaller and faster to start than virtual machines.
                  </p>
                </div>

                {/* Section 1 */}
                <h2 id="what-problem-does-docker-solve" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">01</span>
                  What problem does Docker solve?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  A developer finishes a feature. It works perfectly on their laptop. It gets deployed to the test server and immediately breaks.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The cause is almost always the same: the two machines are not identical. Different version of Python or Node. A library installed on one but not the other. A different operating system, a different configuration file, an environment variable nobody documented. Multiply that by a growing team and several environments, and a meaningful chunk of your engineers' week disappears into problems that have nothing to do with your product.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Docker solves this by shipping the environment along with the application. Instead of hoping the server matches the laptop, you package the app and its dependencies into one unit, and that unit runs identically everywhere. &quot;It works on my machine&quot; stops being an excuse, because your machine is what gets shipped.
                </p>

                {/* Section 2 */}
                <h2 id="what-is-a-container" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">02</span>
                  What is a container?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  A container is a lightweight, isolated environment that runs your application, with its own filesystem, its own networking, and its own view of the world, but sharing the operating system kernel of the machine it runs on.
                </p>
                <div className="rounded-xl bg-mist p-4 md:p-6 my-4">
                  <p className="text-sm md:text-base text-slate leading-relaxed">
                    That kernel sharing is the key detail, and it is what makes containers different from virtual machines. A container is not a whole computer, it is an isolated process with its own packaged filesystem. That is why containers are small and start in seconds, while a virtual machine has to boot an entire operating system first.
                  </p>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Docker is the most widely used tool for building and running these containers. It is not the only one, but it is the one that made containers mainstream, and its image format is now an open standard.
                </p>

                {/* Section 3 */}
                <h2 id="docker-image-vs-container" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">03</span>
                  Docker image vs container: the key distinction
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  This is the single most confusing part of Docker for newcomers, and it is genuinely simple once stated plainly:
                </p>
                <div className="rounded-xl border border-teal-deep/20 bg-teal-deep/5 p-4 md:p-6 text-center my-4">
                  <p className="text-base md:text-lg font-medium text-ink">
                    An image is the blueprint. A container is the thing running.
                  </p>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  An image is a read-only, immutable package that contains your application, its dependencies, and its configuration. It sits on disk, it does not do anything, and you can copy or share it. A container is what you get when you run that image: a live process with its own filesystem and network, plus a thin writable layer on top where it can make changes.
                </p>

                {/* Image vs Container Table */}
                <div className="my-6 md:my-8 overflow-x-auto -mx-4 md:mx-0">
                  <div className="min-w-[640px] md:min-w-full px-4 md:px-0">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-mist/50">
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm"></th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Docker image</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Docker container</th>
                        </tr>
                      </thead>
                      <tbody>
                        {IMAGE_VS_CONTAINER.map((row, index) => (
                          <tr key={index} className="hover:bg-mist/30 transition-colors">
                            <td className="border border-mist px-3 py-3 font-medium text-ink text-xs md:text-sm">{row.aspect}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{row.image}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{row.container}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                      <AlertCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Changes inside a container are not permanent.</p>
                      <p className="text-sm text-slate">That writable layer is discarded when the container is removed, so anything written inside it disappears. If your data needs to survive, databases, uploaded files, application state, it has to live in a Docker volume, which exists independently of the container.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                      <AlertCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Do not patch running containers.</p>
                      <p className="text-sm text-slate">If you find yourself connecting into a container to install a package or edit a config file, you are working against the model. The right move is to change the Dockerfile, rebuild the image, and replace the container. Containers are meant to be disposable; the image is the source of truth.</p>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <h2 id="how-does-docker-work" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">04</span>
                  How does Docker work?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Three pieces do most of the work: a Dockerfile, an image, and a container.
                </p>

                {/* Docker Workflow Image */}
                <div className="my-6 md:my-8 overflow-hidden rounded-xl border border-mist bg-white p-3 md:p-6 shadow-sm">
                  <div className="relative w-full" style={{ aspectRatio: "16/6" }}>
                    <Image
                      src="/blog/docker-workflow.png"
                      alt="A Dockerfile is built into an image, which is run as a container. Images can be pushed to and pulled from a registry."
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-slate/70">
                    A Dockerfile is built into an image, which is run as a container. Images can be pushed to and pulled from a registry.
                  </p>
                </div>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <FileCode className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Dockerfile.</p>
                      <p className="text-sm text-slate">A plain text recipe. It says which base image to start from, which dependencies to install, which files to copy in, and which command to run when the container starts. It lives in version control next to your code, which means your environment is reviewed and tracked exactly like your application.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Package className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Image.</p>
                      <p className="text-sm text-slate">Running docker build turns that recipe into an image. Each instruction in the Dockerfile creates a layer, and the layers stack. This is why rebuilds are fast, unchanged layers are cached and reused, and it is also why image size can creep up: a file added in one layer and deleted in a later one still exists in the earlier layer, invisible but occupying space.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <Box className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Container.</p>
                      <p className="text-sm text-slate">Running docker run turns the image into a live container. And because images are portable, you can push them to a registry such as Docker Hub, then pull and run the exact same image on a colleague's machine, in your CI pipeline, and in production.</p>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <h2 id="containers-vs-virtual-machines" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">05</span>
                  Containers vs virtual machines
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Both give you isolation, but they work at different levels, and the difference is practical rather than academic.
                </p>

                {/* Containers vs VMs Table */}
                <div className="my-6 md:my-8 overflow-x-auto -mx-4 md:mx-0">
                  <div className="min-w-[640px] md:min-w-full px-4 md:px-0">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-mist/50">
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm"></th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Containers</th>
                          <th className="border border-mist px-3 py-3 text-left font-semibold text-ink text-xs md:text-sm">Virtual machines</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CONTAINERS_VS_VMS.map((row, index) => (
                          <tr key={index} className="hover:bg-mist/30 transition-colors">
                            <td className="border border-mist px-3 py-3 font-medium text-ink text-xs md:text-sm">{row.aspect}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{row.container}</td>
                            <td className="border border-mist px-3 py-3 text-slate text-xs md:text-sm">{row.vm}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 my-4">
                  <p className="text-xs text-amber-800">
                    <span className="font-semibold">Note:</span> Sizes and startup times are typical ranges, not fixed rules.
                  </p>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The short version: containers are lighter and faster because they skip the guest operating system, while virtual machines give you stronger isolation because they do not share a kernel. Plenty of teams use both, running containers inside VMs in the cloud.
                </p>

                {/* Section 6 */}
                <h2 id="docker-vs-kubernetes" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">06</span>
                  Docker vs Kubernetes: what is the difference?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  This confusion is worth clearing up because the two names appear together constantly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Package className="h-5 w-5 text-teal-deep" />
                      Docker
                    </h4>
                    <p className="mt-1 text-sm text-slate">Builds and runs individual containers. Docker is how you make the box.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Server className="h-5 w-5 text-teal-deep" />
                      Kubernetes
                    </h4>
                    <p className="mt-1 text-sm text-slate">Orchestrates many containers across many machines, deciding where each one runs, restarting the failed ones, and scaling them with demand. Kubernetes is how you manage a warehouse full of boxes.</p>
                  </div>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  You typically use both: build the image with Docker, then let Kubernetes run it at scale.
                </p>
                <div className="rounded-xl bg-mist p-4 md:p-6 my-4">
                  <p className="text-sm md:text-base text-slate leading-relaxed">
                    <span className="font-medium text-ink">One nuance worth knowing:</span> Kubernetes no longer uses Docker itself as its runtime under the hood (it uses containerd or CRI-O). That change made headlines, but it does not affect you as a user. Images built with Docker follow an open standard and run on Kubernetes exactly as before.
                  </p>
                </div>

                {/* Section 7 */}
                <h2 id="why-use-docker" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">07</span>
                  Why use Docker? The benefits
                </h2>

                <div className="space-y-3 my-4">
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Consistency.</p>
                      <p className="text-sm text-slate">The same image runs identically on a laptop, in CI, and in production.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Rocket className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Fast onboarding.</p>
                      <p className="text-sm text-slate">A new engineer runs one command instead of spending a day configuring their machine.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Isolation.</p>
                      <p className="text-sm text-slate">Two services needing different versions of the same library can run side by side without conflict.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Efficiency.</p>
                      <p className="text-sm text-slate">Containers are far lighter than virtual machines, so you fit more on the same hardware.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Cloud className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">Portability.</p>
                      <p className="text-sm text-slate">Because the image format is an open standard, you are not locked to one cloud.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-mist bg-white p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <GitBranch className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">It underpins modern CI/CD.</p>
                      <p className="text-sm text-slate">Building a container image is the standard packaging step in most <Link href="/blog/what-is-ci-cd" className="text-teal-deep hover:underline">CI/CD pipelines</Link>, and it is what makes &quot;build once, deploy anywhere&quot; possible.</p>
                    </div>
                  </div>
                </div>

                {/* Section 8 */}
                <h2 id="docker-in-2026" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">08</span>
                  Docker in 2026: licensing and alternatives
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Two things have changed that are worth knowing before you standardize on Docker.
                </p>

                <div className="space-y-4 my-4">
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Shield className="h-5 w-5 text-amber-500" />
                      Docker Desktop is no longer free for larger companies.
                    </h4>
                    <p className="mt-1 text-sm text-slate">Docker changed its subscription model so that bigger commercial organizations need a paid plan, which turned a purely technical choice into a budget conversation for some teams. The thresholds and per-seat pricing have shifted over time, so check Docker's current pricing rather than relying on a number you read somewhere. Note that this affects Docker Desktop, the GUI application, not the underlying open-source engine on Linux.</p>
                  </div>
                  <div className="rounded-lg border border-mist bg-white p-4">
                    <h4 className="font-semibold text-ink flex items-center gap-2">
                      <Code className="h-5 w-5 text-teal-deep" />
                      Podman is the main alternative.
                    </h4>
                    <p className="mt-1 text-sm text-slate">Built by Red Hat, it is free and open source, runs without a background daemon, and is rootless by default, which is a meaningful security advantage. It is largely compatible with Docker commands, so switching is less painful than it sounds. A common 2026 pattern is Docker for local development, where its tooling is still the smoothest, with Podman or containerd in CI and production.</p>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  Docker remains the most widely used option and the default most engineers reach for, so this is not a &quot;Docker is dying&quot; story. It is simply worth knowing you have choices, especially if you are a larger team looking at licensing costs.
                </p>

                {/* Section 9 */}
                <h2 id="do-you-need-docker" className="flex items-center gap-3 text-xl md:text-2xl font-bold text-ink mt-10 md:mt-12 mb-4 scroll-mt-20">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-sm font-bold text-teal-deep">09</span>
                  Do you need Docker, and how do you start?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  If you are deploying software regularly, almost certainly yes. Docker is close to table stakes now: it is how modern applications get packaged, and it is a prerequisite for Kubernetes, most CI/CD pipelines, and most cloud deployment options.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-slate mb-4">
                  The good news is that Docker is far easier to adopt than Kubernetes. Start small: write a Dockerfile for one service, get it running locally, then use that same image in your CI pipeline. Add Docker Compose when you need to run a few services together on your machine. You do not need orchestration on day one, and you should not reach for Kubernetes just because you have started using containers.
                </p>

                <div className="rounded-xl border border-teal-deep/20 bg-teal-deep/5 p-4 md:p-6 text-center my-6">
                  <p className="text-base md:text-lg font-medium text-ink">
                    Want this set up properly?
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    If you would rather have your applications containerized and your pipelines set up without pulling engineers off product work, that is what our <Link href="/ci-cd-pipeline-setup-services" className="text-teal-deep hover:underline">CI/CD pipeline setup</Link> and <Link href="/managed-devops-services" className="text-teal-deep hover:underline">managed DevOps</Link> work are for, and our <Link href="/kubernetes-consulting-services" className="text-teal-deep hover:underline">Kubernetes consulting</Link> picks up when you outgrow single-machine containers.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
                  >
                    Book a free technical call
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
                Common questions about Docker
              </h2>
              <p className="mt-2 text-slate">Quick answers to the most common Docker questions.</p>
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
                title: "What Is Kubernetes? A Plain-English Guide",
                href: "/blog/what-is-kubernetes",
                icon: Server
              },
              {
                title: "What Is CI/CD? Continuous Integration & Delivery",
                href: "/blog/what-is-ci-cd",
                icon: GitBranch
              },
              {
                title: "What Is Infrastructure as Code (IaC)?",
                href: "/blog/what-is-infrastructure-as-code",
                icon: Cloud
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
              Need help containerizing your app?
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
            "headline": "What Is Docker? Containers Explained in Plain English",
            "description": "Docker packages your app and everything it needs into a container that runs the same everywhere. Here's what Docker is, how images and containers differ, and when you need it.",
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
            "mainEntityOfPage": "https://www.hiredevopsexpert.com/blog/what-is-docker"
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
              { "@type": "ListItem", "position": 3, "name": "What Is Docker?", "item": "https://www.hiredevopsexpert.com/blog/what-is-docker" }
            ]
          })
        }}
      />
    </main>
  );
}