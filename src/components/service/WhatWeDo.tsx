import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";

type WhatWeDoItem = {
  title: string;
  line: string;
  href?: string;
};

export default function WhatWeDo({
  heading,
  items,
  id,
  className = "",
}: {
  heading: string;
  items: WhatWeDoItem[];
  id?: string;
  className?: string;
}) {
  return (
    <Section id={id} aria-label={heading} className={className}>
      <Container>
        <h2 className="text-h2 font-semibold text-ink">{heading}</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => {
            const content = (
              <>
                <h3 className="text-h3 font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-small text-slate">{item.line}</p>
                {item.href && (
                  <span className="mt-4 inline-block text-small font-medium text-teal-deep">
                    Learn more →
                  </span>
                )}
              </>
            );

            if (item.href) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex flex-col rounded-xl border border-mist bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-deep/60"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div key={item.title} className="flex flex-col rounded-xl border border-mist bg-white p-6">
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
