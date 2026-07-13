// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/contact/ContactForm";
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Free DevOps Consultation | hiredevopsexpert.com",
  description:
    "Tell us what's breaking. A real engineer reviews every message and replies with how we'd approach it.",
};

// Trust indicators
const TRUST_INDICATORS = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get a reply within 24 hours from a senior engineer",
  },
  {
    icon: Shield,
    title: "No Sales Pitch",
    description: "Just honest technical assessment and advice",
  },
  {
    icon: Users,
    title: "Senior Engineers",
    description: "Talk directly to experienced DevOps professionals",
  },
  {
    icon: CheckCircle,
    title: "Free Consultation",
    description: "No obligation, just a conversation to see if we're a fit",
  },
];

// Contact information
const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "aryan@hiredevopsexpert.com",
    href: "mailto:aryan@hiredevopsexpert.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98932 70210",
    href: "tel:+919893270210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gurugram, India",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-off">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-deep/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="max-w-[68ch]">
            <span className="font-mono text-sm uppercase tracking-[0.12em] text-teal">
              Get Started
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              Let's Talk About Your <span className="text-teal">DevOps Needs</span>
            </h1>
            <p className="mt-6 text-lg text-gray md:text-xl">
              Tell us what's breaking. A real engineer reviews every message and replies 
              with how we'd approach it. No pressure, no sales pitch—just honest technical advice.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                <Clock className="h-4 w-4 text-teal" />
                Response within 24 hours
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                <Users className="h-4 w-4 text-teal" />
                Talk to senior engineers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-mist bg-white p-6 shadow-sm md:p-8 lg:p-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                    Tell Us About Your Project
                  </h2>
                  <p className="mt-2 text-sm text-slate">
                    Fill in the details below and we'll get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Trust Indicators - Mobile */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
                {TRUST_INDICATORS.map((indicator) => {
                  const Icon = indicator.icon;
                  return (
                    <div
                      key={indicator.title}
                      className="rounded-lg border border-mist bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-ink">{indicator.title}</p>
                          <p className="text-sm text-slate">{indicator.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Contact Info & Trust */}
            <div className="lg:col-span-2">
              {/* Contact Information */}
              <div className="rounded-xl border border-mist bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-lg font-semibold text-ink">Contact Information</h3>
                <div className="mt-4 space-y-4">
                  {CONTACT_INFO.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mist text-teal-deep">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-slate">{item.label}</p>
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="text-sm font-medium text-ink transition-colors hover:text-teal-deep"
                            >
                              {item.value}
                            </Link>
                          ) : (
                            <p className="text-sm font-medium text-ink">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-mist pt-6">
                  <p className="text-sm text-slate">
                    Prefer to book a call directly?
                  </p>
                  <Link
                    href="https://calendly.com/hiredevopsexpert/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-lg bg-teal-deep px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-deep/90"
                  >
                    Schedule a Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Trust Indicators - Desktop */}
              <div className="mt-6 hidden space-y-4 lg:block">
                {TRUST_INDICATORS.map((indicator) => {
                  const Icon = indicator.icon;
                  return (
                    <div
                      key={indicator.title}
                      className="rounded-lg border border-mist bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-ink">{indicator.title}</p>
                          <p className="text-sm text-slate">{indicator.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Response Time Promise */}
              <div className="mt-6 rounded-lg border border-teal-deep/20 bg-teal-deep/5 p-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" />
                  <div>
                    <p className="text-sm font-medium text-ink">
                      We respond within 24 hours
                    </p>
                    <p className="text-sm text-slate">
                      Every message is reviewed by a senior DevOps engineer, not a sales rep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="border-y border-mist bg-white py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-slate">
                Quick answers to common questions about our consultation process.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  q: "What happens after I submit the form?",
                  a: "A senior DevOps engineer reviews your message and responds within 24 hours with technical insights and suggested next steps."
                },
                {
                  q: "Is the consultation really free?",
                  a: "Yes! The initial consultation is completely free. We'll discuss your needs and see if we're a good fit before any commitment."
                },
                {
                  q: "What if I'm not ready to start yet?",
                  a: "No problem! The consultation is just a conversation. You can take all the time you need to decide."
                },
                {
                  q: "Do you work with startups?",
                  a: "Absolutely! We specialize in helping startups build production-grade DevOps infrastructure from the ground up."
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-lg border border-mist bg-off transition-shadow hover:shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-left font-medium text-ink transition-colors hover:text-teal-deep md:px-6 md:py-4">
                    {faq.q}
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
                  <div className="px-4 pb-4 text-sm text-slate md:px-6 md:pb-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="rounded-xl bg-ink p-8 text-center text-white md:p-12 lg:p-16">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Ready to Fix Your Infrastructure?
            </h2>
            <p className="mx-auto mt-3 max-w-[68ch] text-gray">
              Don't wait until the next outage. Get expert DevOps help now and start 
              shipping with confidence.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-deep px-6 py-3 font-medium text-white transition-colors hover:bg-teal-deep/90"
              >
                Start Your Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}