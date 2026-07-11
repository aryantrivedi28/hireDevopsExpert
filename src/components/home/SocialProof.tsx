import Container from "@/components/Container";
import Section from "@/components/Section";

export default function SocialProof() {
  return (
    <Section surface="off" aria-label="What clients say">
      <Container>
        <h2 className="text-h2 font-semibold text-ink">What clients say</h2>
        <p className="mt-2 text-body text-slate">Case studies coming soon.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-mist bg-white p-6">
              {/* PLACEHOLDER: real client testimonial, name, role, company, with permission */}
              <p className="text-body text-slate italic">
                Real client testimonial goes here once we have permission to publish it.
              </p>
              <p className="mt-4 text-small font-medium text-ink">
                {/* PLACEHOLDER: name, role, company */}
                Name, role, Company
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-8">
          {/* PLACEHOLDER: real client logos once available */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex h-12 w-32 items-center justify-center rounded-lg border border-dashed border-gray/40 text-small text-slate"
            >
              Client logo
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
