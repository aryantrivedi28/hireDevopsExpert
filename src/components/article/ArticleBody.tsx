import type { ReactNode } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ArticleBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Section tight className={className}>
      <Container className="max-w-[68ch]">
        <div className="flex flex-col gap-8">{children}</div>
      </Container>
    </Section>
  );
}
