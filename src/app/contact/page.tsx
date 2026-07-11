import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Book a Free DevOps Consultation | hiredevopsexpert.com",
  description:
    "Tell us what's breaking. A real engineer reviews every message and replies with how we'd approach it.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container className="max-w-[68ch]">
        <Eyebrow tone="teal-deep">Contact</Eyebrow>
        <h1 className="mt-4 text-display font-semibold text-ink">
          Book a free DevOps consultation
        </h1>
        <p className="mt-6 text-body text-slate">
          Tell us what&rsquo;s breaking. A real engineer, not a sales rep, reviews every
          message and replies with how we&rsquo;d approach it. No pressure, no sales pitch.
        </p>
        {/* PLACEHOLDER: real response-time promise, or omit, do not invent (e.g. "within 2 hours") */}

        <div className="mt-10">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
