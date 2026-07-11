"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

export type ServiceFaqItem = {
  question: string;
  answer: string;
  placeholderNote?: string;
};

export default function ServiceFAQ({
  heading,
  faqs,
  id,
  className = "",
}: {
  heading: string;
  faqs: ServiceFaqItem[];
  id?: string;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id={id} aria-label={heading} className={className}>
      <Container>
        <h2 className="text-h2 font-semibold text-ink">{heading}</h2>
        <div className="mt-8 flex flex-col divide-y divide-gray/30 border-t border-b border-gray/30">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `${id ?? "service-faq"}-panel-${index}`;
            const buttonId = `${id ?? "service-faq"}-button-${index}`;

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
