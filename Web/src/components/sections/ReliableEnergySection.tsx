import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IconFeature } from "@/components/ui/IconFeature";
import { coldToHeatFeatures } from "@/content/coldToHeat";

export function ReliableEnergySection() {
  return (
    <section aria-label="Reliable energy from cold to heat" className="pb-16 sm:pb-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Image
          src="/images/cold-to-heat.png"
          alt="TruPower battery cabinet shown operating in both snowy -30°C and desert 55°C conditions"
          width={867}
          height={615}
          className="h-auto w-full rounded-2xl"
          sizes="(min-width: 1024px) 45vw, 90vw"
        />

        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            Built for Any Environment
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Reliable Energy From Cold To Heat
          </h2>
          <span className="mt-4 block h-1 w-14 rounded-full bg-brand" aria-hidden="true" />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
            TruPower systems are engineered to perform in the most demanding
            conditions, from -30&deg;C to 55&deg;C, ensuring stability,
            safety, and long-term reliability wherever you operate.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {coldToHeatFeatures.map((feature) => (
              <IconFeature key={feature.label} {...feature} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
