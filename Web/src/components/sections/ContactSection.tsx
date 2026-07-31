import { IconPhone } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";

export function ContactSection() {
  return (
    <section id="get-in-touch" aria-label="Get in touch" className="scroll-mt-20 pb-20 sm:pb-28">
      <Container>
        <div className="rounded-2xl border border-border-subtle bg-surface p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Get In Touch</h2>
              <p className="mt-2 text-sm text-text-secondary sm:text-base">
                Have a project in mind? We&apos;d love to hear from you.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <IconPhone className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <a href="tel:+923233333736" className="text-white transition-colors hover:text-brand">
                  +92 323 3333736
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
