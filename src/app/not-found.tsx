import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found | hiredevopsexpert.com",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <Section>
      <Container className="max-w-[68ch] text-center">
        <Eyebrow tone="teal-deep">404</Eyebrow>
        <h1 className="mt-4 text-display font-semibold text-ink">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-6 text-body text-slate">
          The page you&rsquo;re looking for may have moved or no longer exists. Try the
          homepage, or book a call if you&rsquo;d rather just talk to us directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to homepage</Button>
          <Button variant="secondary" href="/contact/">
            Book a DevOps consultation
          </Button>
        </div>
      </Container>
    </Section>
  );
}
