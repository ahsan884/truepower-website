import { Container } from "@/components/ui/Container";
import { StatItem } from "@/components/ui/StatItem";
import { stats } from "@/content/stats";

export function StatsBar() {
  return (
    <section aria-label="TruPower by the numbers" className="pb-16 sm:pb-20">
      <Container>
        <div className="flex flex-col gap-8 rounded-2xl border border-border-subtle bg-surface p-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-0 sm:divide-x sm:divide-border-subtle">
          {stats.map((stat) => (
            <div key={stat.label} className="sm:px-8 sm:first:pl-0">
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
