import type { IconComponent } from "@/types";

interface SocialIconProps {
  icon: IconComponent;
  href: string;
  label: string;
}

export function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-brand hover:text-brand"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
