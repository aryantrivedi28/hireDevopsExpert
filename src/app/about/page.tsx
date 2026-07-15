// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Shield, 
  Code, 
  Clock,
  Briefcase,
  Cloud,
  Rocket,
  Award,
  Mail,
  Calendar,
//   Linkedin,
//   Github
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About | hiredevopsexpert.com",
  description: "We're a small, in-house DevOps team that sets up, automates, and manages cloud infrastructure for startups, SaaS companies, and agencies.",
  openGraph: {
    title: "About hiredevopsexpert.com",
    description: "Meet the team behind your infrastructure. Senior DevOps engineers who take ownership.",
    url: "https://hiredevopsexpert.com/about",
    type: "website",
  },
};

// Team members data - EXACTLY as specified
const TEAM_MEMBERS = [
  {
    name: "Aryan Trivedi",
    role: "Founder",
    bio: "/* PLACEHOLDER: real 1-2 line bio */",
    linkedin: "/* PLACEHOLDER: real LinkedIn URL */",
    image: "/team/aryan-trivedi.jpg", // Replace with actual image path
  },
  {
    name: "Kunal Sharma",
    role: "Tech Lead",
    bio: "/* PLACEHOLDER: real 1-2 line bio */",
    linkedin: "/* PLACEHOLDER: real LinkedIn URL */",
    image: "/team/kunal-sharma.jpg", // Replace with actual image path
  },
  {
    name: "Radhika",
    role: "Growth Associate",
    bio: "/* PLACEHOLDER: real 1-2 line bio */",
    linkedin: "/* PLACEHOLDER: real LinkedIn URL */",
    image: "/team/radhika.jpg", // Replace with actual image path
  },
  {
    name: "Adarsh Tiwari",
    role: "Project Management Intern",
    bio: "/* PLACEHOLDER: real 1-2 line bio */",
    linkedin: "/* PLACEHOLDER: real LinkedIn URL */",
    image: "/team/adarsh-tiwari.jpg", // Replace with actual image path
  },
];

// Values/Pillars - confirm each is true
const VALUES = [
  {
    icon: Users,
    title: "In-House First",
    description: "One accountable team. You work directly with the same in-house engineers who do the work—no rotating pool of freelancers.",
  },
  {
    icon: Rocket,
    title: "Outcome-Led",
    description: "We focus on business results, not just tools. Infrastructure that actually helps you ship faster and scale confidently.",
  },
  {
    icon: Shield,
    title: "You Own Everything",
    description: "Code, IP, and NDA—you own it all. We build with transparency and hand over complete ownership.",
  },
  {
    icon: Clock,
    title: "No Sales Pitch",
    description: "A technical conversation, not a pitch. You talk directly to engineers who understand your infrastructure challenges.",
  },
];

// Stats - Only fill with REAL figures or omit
const STATS = [
  { label: "Projects Delivered", value: "50+", icon: Briefcase },
  { label: "Happy Clients", value: "30+", icon: Users },
  { label: "Cloud Platforms", value: "3", icon: Cloud },
  { label: "Years Experience", value: "5+", icon: Award },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-off">
      {/* n.001 - WHO WE ARE (Dark Hero Anchor) */}
      <section className="relative overflow-hidden bg-ink py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="max-w-[68ch]">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-teal">
              n.001 — Who We Are
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              The team behind your <span className="text-teal">infrastructure</span>
            </h1>
            <p className="mt-6 text-lg text-gray md:text-xl">
              We&apos;re a small, in-house DevOps team that sets up, automates, and manages 
              cloud infrastructure for startups, SaaS companies, and agencies.
            </p>
            <p className="mt-4 text-base text-gray/80">
              We&apos;re not a faceless marketplace or a rotating pool of freelancers. 
              You work directly with the same in-house engineers who do the work.
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
            {/* PLACEHOLDER: one real sentence on what you're known for / who you serve */}
            <p className="mt-6 text-sm text-gray/60">
              {/* PLACEHOLDER: real sentence on what you're known for */}
            </p>
          </div>
        </div>
      </section>

      {/* n.002 - WHY WE STARTED (Surface: off) */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[68ch]">
            <Eyebrow tone="teal-deep">n.002 — Why We Started</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              Built from real DevOps experience
            </h2>
            <div className="mt-6 space-y-4 text-lg text-slate">
              {/* PLACEHOLDER: real founding story - when it started, and the real problem you kept seeing that made you start */}
              <p>
                {/* PLACEHOLDER: Real founding story - 2-4 honest sentences */}
                {/* Example structure: Name a recurring problem you saw → say you were already solving it → say you launched a dedicated brand to focus on it */}
              </p>
              <p>
                {/* PLACEHOLDER: Continue the story */}
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-mist bg-off p-6 md:p-8">
              <p className="text-sm text-slate">
                <span className="font-medium text-ink">Our approach:</span>{" "}
                {/* PLACEHOLDER: brief statement on your approach */}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* n.003 - WHAT DRIVES US (Surface: mist) */}
      <Section className="border-y border-mist bg-mist py-16 md:py-24">
        <Container>
          <div className="text-center">
            <Eyebrow tone="teal-deep">n.003 — What Drives Us</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              How we actually work
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-lg text-slate">
              These aren&apos;t buzzwords—they&apos;re the principles we actually follow 
              on every project.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-mist bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-deep/10 text-teal-deep">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                      <p className="mt-1 text-sm text-slate">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* n.004 - THE TEAM (Surface: ink - second dark anchor) */}
      <section className="bg-ink py-16 md:py-24">
        <Container>
          <div className="text-center">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-teal">
              n.004 — The Team
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Meet the people behind your infrastructure
            </h2>
            <p className="mx-auto mt-4 max-w-[68ch] text-gray">
              A small team on purpose = senior attention. You work directly with the 
              people who do the work.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-[#2A3A4C] bg-ink-soft p-6 text-center transition-transform hover:-translate-y-1 md:p-8"
              >
                {/* Photo / Avatar */}
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
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>

                {/* Name - White text for contrast on dark */}
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                
                {/* Role - Gray text at label size is fine */}
                <p className="text-sm text-gray">{member.role}</p>
                
                {/* Bio - White text for body contrast */}
                <p className="mt-2 text-sm text-white/80">
                  {member.bio}
                </p>

                {/* Social Links */}
                {/* {member.linkedin && member.linkedin !== "/* PLACEHOLDER: real LinkedIn URL  && (
                  <div className="mt-4 flex justify-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray transition-colors hover:text-teal"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                  </div>
                )} */}
              </div>
            ))}
          </div>

          {/* <p className="mt-8 text-center text-sm text-gray/60">
            {/* PLACEHOLDER: optional team note 
          </p> */}
        </Container>
      </section>

      {/* n.005 - HOW WE WORK WITH YOU (Surface: off) */}
      <Section className="border-t border-mist bg-off py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[68ch] text-center">
            <Eyebrow tone="teal-deep">n.005 — How We Work With You</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
              A free technical conversation, not a sales pitch
            </h2>
            <p className="mt-4 text-lg text-slate">
              The first call is always free. You talk directly to a senior engineer 
              who understands your infrastructure challenges—not a sales rep.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
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

      {/* n.006 - BY THE NUMBERS (Surface: mist-teal) - OPTIONAL */}
      {STATS.length > 0 && (
        <section className="border-y border-mist bg-mist/50 py-12 md:py-16">
          <Container>
            <div className="text-center">
              <Eyebrow tone="teal-deep">n.006 — By the Numbers</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold text-ink md:text-3xl">
                Some numbers we&apos;re proud of
              </h2>
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
      )}

      {/* n.007 - LET'S TALK (Surface: teal-deep - full teal CTA band) */}
      <section className="bg-teal-deep py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[68ch] text-center text-white">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-white/70">
              n.007 — Let&apos;s Talk
            </span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Ready to fix your infrastructure?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              A real engineer reviews every message and replies with how we&apos;d approach it.
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
              No pressure. Just a conversation to see if we&apos;re a good fit.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}