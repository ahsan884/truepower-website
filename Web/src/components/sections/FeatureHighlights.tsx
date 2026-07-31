import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { featureHighlights } from "@/content/features";

export function FeatureHighlights() {
  return (
    <section aria-label="Feature highlights" className="pb-16 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border-subtle bg-surface p-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:p-10">
          {featureHighlights.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
