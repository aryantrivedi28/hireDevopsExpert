import Container from "@/components/Container";
import Section from "@/components/Section";
import Eyebrow from "@/components/Eyebrow";
import {
  IconAlertTriangle,
  IconClockX,
  IconCoin,
  IconBellOff,
  IconTrendingDown,
  IconFolderX,
  IconUserX,
  IconHourglass,
} from "@/components/home/icons";

const PROBLEMS = [
  { icon: IconAlertTriangle, label: "Manual, risky deployments" },
  { icon: IconClockX, label: "Frequent downtime" },
  { icon: IconCoin, label: "High, unpredictable cloud bills" },
  { icon: IconBellOff, label: "No monitoring or alerts" },
  { icon: IconTrendingDown, label: "Can't scale under load" },
  { icon: IconFolderX, label: "Messy, undocumented infrastructure" },
  { icon: IconUserX, label: "No dedicated DevOps person" },
  { icon: IconHourglass, label: "Slow, fragile release process" },
];

export default function Problems() {
  return (
    <Section surface="off" aria-label="Problems we solve">
      <Container>
        <Eyebrow tone="teal-deep">The problem</Eyebrow>
        <h2 className="mt-3 text-h2 font-semibold text-ink">Sound familiar?</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {PROBLEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl border border-mist bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-deep/40"
            >
              <Icon className="h-6 w-6 text-teal-deep" aria-hidden="true" />
              <p className="mt-4 text-body font-medium text-ink">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
