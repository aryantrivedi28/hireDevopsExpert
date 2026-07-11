import type { ReactNode } from "react";

export default function ArticleSection({
  heading,
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <div>
      {heading && <h2 className="text-h2 font-semibold text-ink">{heading}</h2>}
      <div className="mt-3 flex flex-col gap-3 text-body text-slate">{children}</div>
    </div>
  );
}
