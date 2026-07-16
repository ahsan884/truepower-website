import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const heroBuilding = "/images/hero-building.png";
const HERO_WIDTH = 1354;
const HERO_HEIGHT = 825;

export function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20">
      <Container className="relative">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Energy Storage.</span>
            <span className="block text-brand">Powering Growth.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
            TruPower delivers advanced Battery Energy Storage Systems (BESS)
            that ensure reliable power, optimize costs, and drive a
            sustainable future.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#solutions" variant="primary">
              Explore Solutions
            </Button>
            <Button href="#contact" variant="outline">
              Talk to an Expert
            </Button>
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <Image
            src={heroBuilding}
            alt="TruPower Battery Energy Storage System installed at a commercial facility with rooftop solar panels"
            width={HERO_WIDTH}
            height={HERO_HEIGHT}
            className="h-auto w-full rounded-2xl"
            priority
            sizes="100vw"
          />
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] max-w-[820px] lg:block">
        <div className="relative h-full w-full">
          <Image
            src={heroBuilding}
            alt="TruPower Battery Energy Storage System installed at a commercial facility with rooftop solar panels"
            fill
            className="object-contain object-right"
            priority
            sizes="(min-width: 1024px) 54vw, 0px"
          />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
