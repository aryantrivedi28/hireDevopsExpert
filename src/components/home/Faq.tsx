"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";

const FAQS = [
  {
    question: "What does a DevOps engineer actually do?",
    answer:
      "A DevOps engineer builds and maintains the systems that get your code from a commit to production safely, CI/CD pipelines, cloud infrastructure, containers, monitoring, and the automation that ties it together.",
  },
  {
    question: "Can we start with a small project instead of a retainer?",
    answer:
      "Yes. Many engagements start as a fixed-scope project, a specific pipeline, migration, or audit, before moving to ongoing support if that makes sense for you.",
  },
  {
    question: "Do you work with AWS, Azure, and GCP?",
    answer:
      "Yes, across all three. We work with whichever cloud you're already on rather than pushing you to switch.",
  },
  {
    question: "Can you fix or clean up our existing setup?",
    answer:
      "Yes, auditing and cleaning up an existing, undocumented, or fragile setup is one of the most common ways engagements start.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, as a monthly managed retainer once your initial setup is in place.",
    // PLACEHOLDER: specific SLA / response-time details, do not invent
    placeholderNote: "Specific SLA / response-time details to be confirmed.",
  },
  {
    question: "Can you work as a white-label DevOps partner?",
    answer: "Yes, we can deliver DevOps work under your agency's brand for your clients.",
    // PLACEHOLDER: specific white-label process details, do not invent
    placeholderNote: "Specific white-label process details to be confirmed.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" surface="mist" aria-label="Frequently asked questions">
      <Container>
        <Eyebrow tone="teal-deep" number="n.007">Questions</Eyebrow>
        <h2 className="mt-3 text-h2 font-semibold text-ink">Questions we get a lot</h2>
        <div className="mt-8 flex flex-col divide-y divide-gray/30 border-t border-b border-gray/30">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-body font-medium text-ink"
                  >
                    {faq.question}
                    <span aria-hidden="true" className="text-teal-deep">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 text-small text-slate"
                >
                  <p>{faq.answer}</p>
                  {faq.placeholderNote && (
                    <p className="mt-1 italic text-slate">{faq.placeholderNote}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
