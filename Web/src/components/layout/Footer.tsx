import { IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { contactDetails, footerLinkColumns, socialLinks } from "@/content/footer";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
            TruPower delivers reliable, efficient, and sustainable energy
            storage solutions designed to power industries, businesses, and
            communities worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => (
              <SocialIcon key={social.label} {...social} />
            ))}
          </div>
        </div>

        {footerLinkColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h3 className="mb-4 text-sm font-semibold text-white">{column.title}</h3>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Get in Touch</h3>
          <ul className="flex flex-col gap-3 text-sm text-text-secondary">
            <li className="flex items-center gap-2">
              <IconPhone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="hover:text-brand">
                {contactDetails.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconMail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={`mailto:${contactDetails.email}`} className="hover:text-brand">
                {contactDetails.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconMapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{contactDetails.location}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border-subtle">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-text-secondary sm:flex-row">
          <p>&copy; {year} TruPower. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand">
              Terms &amp; Conditions
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
