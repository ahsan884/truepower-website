import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section id="contact" aria-label="Contact us" className="scroll-mt-20 pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-brand/50 bg-surface shadow-[0_0_40px_-12px_rgba(104,169,2,0.45)]">
          <Image
            src="/images/cta-texture.png"
            alt=""
            fill
            className="object-cover object-right opacity-15"
            sizes="(min-width: 1024px) 1152px, 100vw"
          />
          <div className="relative flex flex-col items-center gap-6 p-8 text-center sm:p-10 md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to Take Control of Your Energy?
              </h2>
              <p className="mt-2 text-sm text-text-secondary sm:text-base">
                Let&apos;s build a sustainable and powerful future together.
              </p>
            </div>
            <Button href="#get-in-touch" variant="primary" className="shrink-0">
              Connect With Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
