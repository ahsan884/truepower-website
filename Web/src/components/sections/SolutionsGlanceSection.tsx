import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { solutionCards } from "@/content/solutions";

export function SolutionsGlanceSection() {
  return (
    <section id="solutions" aria-label="Solutions at a glance" className="scroll-mt-20 pb-16 sm:pb-20">
      <Container>
        <SectionHeading eyebrow="Tailored for Every Need" title="Solutions at a Glance" />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[9px]">
          {solutionCards.map((card) => (
            <SolutionCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
