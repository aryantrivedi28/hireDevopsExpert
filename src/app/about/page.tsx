// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Shield, 
  Clock,
  Cloud,
  Rocket,
  Mail,
  Calendar,
  Target,
  Zap,
  Award,
  Briefcase,
  Globe,
  Code,
  Server
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About | hiredevopsexpert.com",
  description: "We're a dedicated DevOps team that sets up, automates, and manages cloud infrastructure for startups, SaaS companies, and agencies.",
  openGraph: {
    title: "About hiredevopsexpert.com",
    description: "Meet the team behind your infrastructure. Senior DevOps engineers who take ownership.",
    url: "https://hiredevopsexpert.com/about",
    type: "website",
  },
};

// Team members data
const TEAM_MEMBERS = [
  {
    name: "Kunal Sharma",
    role: "Tech Lead",
    bio: "Kunal is the technical brain behind the team. He owns the architecture decisions, internal tooling, system design, and engineering standards across the organization. He builds the frameworks, templates, and processes that every client project is built on top of. When a system scales without breaking, it is because Kunal designed the foundation.",
    linkedin: "https://www.linkedin.com/in/kunal-kumar-2ab402263",
    image: "/team/kunal.png",
    initials: "KS",
  },
  {
    name: "Radhika",
    role: "Growth Associate",
    bio: "Drives client acquisition, partnerships, and brand growth. Radhika connects the dots between what clients need and what we deliver—handling outreach, onboarding coordination, and ensuring every project starts with clear goals and ends with measurable outcomes. She is the first person most clients speak with.",
    linkedin: "https://www.linkedin.com/in/radhika-agrawal-22238a201",
    image: "/team/radhika.jpg",
    initials: "RD",
  },
  {
    name: "Adarsh Tiwari",
    role: "Project Management Intern",
    bio: "Adarsh manages the operational backbone of the organization—from brand guidelines to building the complete technical infrastructure. He works closely with the team under the founder's supervision, ensuring smooth project execution and delivery.",
    linkedin: "https://www.linkedin.com/in/adarsh-tiwari-b1448a21b",
    image: "/team/adarsh.png",
    initials: "AT",
  },
];

// Founder details
const FOUNDER = {
  name: "Aryan Trivedi",
  role: "Founder",
  bio: [
    "Aryan is a product strategist and entrepreneur who built hiredevopsexpert from the ground up—starting as a freelancer network for startups and evolving it into a full-stack execution partner specializing in DevOps, cloud infrastructure, and automation.",
    "After personally overseeing 50+ DevOps projects across startups, SaaS companies, and agencies in multiple countries, Aryan launched hiredevopsexpert to solve a recurring problem: most businesses invest in cloud infrastructure but never get the architecture right.",
    "His approach is simple: understand how the business operates, then build the infrastructure that makes processes faster and more automated. No generic templates. No overengineered setups. Just systems that hold up at scale and drive real business outcomes.",
  ],
  linkedin: "https://www.linkedin.com/in/aryantrivedi",
  image: "/team/aryan_t.jpg",
  initials: "AT",
};

// Core values
const VALUES = [
  {
    icon: Users,
    title: "Dedicated Team",
    description: "You work with a dedicated team of DevOps professionals who take full ownership of your infrastructure. No rotating contractors—just committed engineers who care about your success.",
  },
  {
    icon: Rocket,
    title: "Outcome-Focused",
    description: "We measure success by business outcomes, not just technical metrics. Faster deployments, lower costs, and infrastructure that actually helps you grow.",
  },
  {
    icon: Shield,
    title: "Complete Transparency",
    description: "You own everything—code, infrastructure, and intellectual property. We build with complete transparency and provide full access to all systems and documentation.",
  },
  {
    icon: Clock,
    title: "Technical Excellence",
    description: "Every conversation is a technical discussion with experienced engineers. No sales pitches—just honest assessments and practical solutions to your infrastructure challenges.",
  },
];

// Stats with real data
const STATS = [
  { value: "50+", label: "Projects Delivered", icon: Briefcase },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "3", label: "Cloud Platforms", icon: Cloud },
  { value: "5+", label: "Years Experience", icon: Award },
];

// Expertise areas
const EXPERTISE = [
  { icon: Server, label: "AWS", bg: "bg-[#FF9900]/10", text: "text-[#FF9900]" },
  { icon: Cloud, label: "Azure", bg: "bg-[#0078D4]/10", text: "text-[#0078D4]" },
  { icon: Globe, label: "GCP", bg: "bg-[#4285F4]/10", text: "text-[#4285F4]" },
  { icon: Code, label: "Kubernetes", bg: "bg-[#326CE5]/10", text: "text-[#326CE5]" },
  { icon: Rocket, label: "Terraform", bg: "bg-[#7B42BC]/10", text: "text-[#7B42BC]" },
  { icon: Shield, label: "DevSecOps", bg: "bg-[#00A3E0]/10", text: "text-[#00A3E0]" },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              The team behind your <span className="text-teal">infrastructure</span>
            </h1>
            <p className="mt-6 text-lg text-gray md:text-xl">
              We're a dedicated DevOps team that designs, builds, and manages 
              cloud infrastructure for startups, SaaS companies, and agencies.
            </p>
            <p className="mt-4 text-base text-gray/80">
              We're not a marketplace or a rotating pool of freelancers. 
              You work directly with the same engineers who build and maintain your systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                How We Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[68ch]">
            <Eyebrow tone="teal-deep">Our Story</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Built from real DevOps experience
            </h2>
            <div className="mt-6 space-y-4 text-lg text-slate">
              <p>
                {/* PLACEHOLDER: Real founding story */}
                Every great DevOps journey starts with a problem. For us, it was watching 
                talented startups struggle with infrastructure that couldn't keep up with 
                their growth.
              </p>
              <p>
                {/* PLACEHOLDER: Continue the story */}
                We saw teams wasting countless hours on manual deployments, security 
                vulnerabilities, and infrastructure that broke at the worst possible moments.
              </p>
              <p>
                {/* PLACEHOLDER: How you launched */}
                That's why we built hiredevopsexpert—to give startups and growing companies 
                access to production-grade DevOps without the overhead of building an 
                in-house team from scratch.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-mist bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Our Mission</p>
                  <p className="mt-1 text-sm text-slate">
                    {/* PLACEHOLDER: Mission statement */}
                    To make production-grade DevOps accessible to every growing company, 
                    enabling them to ship faster, scale confidently, and focus on what 
                    matters—building great products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Founder Section */}
      <Section className="border-y border-mist bg-mist py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[68ch]">
            <Eyebrow tone="teal-deep">The Founder</Eyebrow>
            <div className="mt-8 flex flex-col items-start gap-8 md:flex-row md:gap-12">
              <div className="shrink-0">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-teal-deep/20 md:h-40 md:w-40">
                  {FOUNDER.image ? (
                    <Image
                      src={FOUNDER.image}
                      alt={`${FOUNDER.name} - ${FOUNDER.role}`}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-teal-deep/30 text-3xl font-semibold text-white">
                      {FOUNDER.initials}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-ink">{FOUNDER.name}</h3>
                <p className="text-sm font-medium text-teal-deep">{FOUNDER.role}</p>
                <div className="mt-4 space-y-3 text-sm text-slate md:text-base">
                  {FOUNDER.bio.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-5 flex gap-2.5">
                  <Link
                    href={FOUNDER.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-mist bg-white text-slate transition-all hover:bg-[#0E9BF0] hover:text-white"
                    aria-label={`${FOUNDER.name}'s LinkedIn`}
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Values */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="text-center">
            <Eyebrow tone="teal-deep">Our Values</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              What drives us
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-lg text-slate">
              These are the principles that guide every decision we make and every 
              project we deliver.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-xl border border-mist bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep transition-colors group-hover:bg-teal-deep group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                      <p className="mt-1 text-sm text-slate leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Expertise Section */}
      <Section className="border-y border-mist bg-mist py-16 md:py-24">
        <Container>
          <div className="text-center">
            <Eyebrow tone="teal-deep">Our Expertise</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Technologies we work with
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-lg text-slate">
              We're platform-agnostic and work with the best tools for each unique requirement.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {EXPERTISE.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center justify-center rounded-xl ${item.bg} p-6 transition-all hover:scale-105`}
                >
                  <Icon className={`h-8 w-8 ${item.text}`} />
                  <p className="mt-2 text-sm font-medium text-ink">{item.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* The Team */}
      <section className="bg-ink py-16 md:py-24">
        <Container>
          <div className="text-center">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-teal">
              The Team
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Meet the people behind your infrastructure
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-gray">
              A small team by design = senior attention. You work directly with the 
              people who build and maintain your systems.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-[#2A3A4C] bg-ink-soft p-6 transition-all hover:-translate-y-1 hover:shadow-xl md:p-8"
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-teal-deep/20">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-teal-deep/30 text-2xl font-semibold text-white">
                      {member.initials}
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-center text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-center text-sm text-gray">{member.role}</p>
                <p className="mt-3 text-center text-sm text-white/80 leading-relaxed">
                  {member.bio}
                </p>

                {member.linkedin && (
                  <div className="mt-4 flex justify-center">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-gray transition-colors hover:bg-white/10 hover:text-teal"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How We Work With You */}
      <Section className="border-t border-mist bg-off py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[68ch] text-center">
            <Eyebrow tone="teal-deep">How We Work With You</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              A free technical conversation, not a sales pitch
            </h2>
            <p className="mt-4 text-lg text-slate">
              The first call is always free. You talk directly to a senior engineer 
              who understands your infrastructure challenges—not a sales representative.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-2 text-teal-deep font-medium hover:underline"
              >
                Learn how we work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-slate">·</span>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-teal-deep font-medium hover:underline"
              >
                See our process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* By the Numbers */}
      <section className="border-y border-mist bg-white py-12 md:py-16">
        <Container>
          <div className="text-center">
            <Eyebrow tone="teal-deep">By the Numbers</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold text-ink md:text-3xl">
              Some numbers we're proud of
            </h2>
            <p className="mx-auto mt-2 max-w-[68ch] text-sm text-slate">
              Real results from real projects. These are actual figures from our work.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center">
                    <Icon className="h-8 w-8 text-teal-deep" />
                  </div>
                  <div className="mt-2 text-3xl font-bold text-ink md:text-4xl">
                    {stat.value}
                  </div>
                  <p className="text-sm text-slate">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-deep py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[68ch] text-center text-white">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-white/70">
              Let's Talk
            </span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Ready to fix your infrastructure?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              A real engineer reviews every message and replies with how we'd approach it.
              {/* PLACEHOLDER: real response time, or omit */}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-teal-deep transition-colors hover:bg-white/90"
              >
                <Calendar className="h-4 w-4" />
                Book a DevOps Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                Request an Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/70">
              No pressure. Just a conversation to see if we're a good fit.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}