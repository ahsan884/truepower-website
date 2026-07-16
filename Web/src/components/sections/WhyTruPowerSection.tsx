import Image from "next/image";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { Container } from "@/components/ui/Container";
import { whyTruPowerChecklist } from "@/content/whyTruPower";

export function WhyTruPowerSection() {
  return (
    <section
      id="why-trupower"
      aria-label="Why TruPower"
      className="scroll-mt-20 pb-16 sm:pb-20"
    >
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Image
          src="/images/solar-farm.png"
          alt="Aerial view of a solar farm with a row of TruPower battery energy storage containers"
          width={867}
          height={615}
          className="h-auto w-full rounded-2xl"
          sizes="(min-width: 1024px) 45vw, 90vw"
        />

        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-brand uppercase">
            Why TruPower?
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Smarter Storage. Stronger Tomorrow.
          </h2>
          <span className="mt-4 block h-1 w-14 rounded-full bg-brand" aria-hidden="true" />
          <div className="mt-8 flex flex-col gap-6">
            {whyTruPowerChecklist.map((item) => (
              <CheckListItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
