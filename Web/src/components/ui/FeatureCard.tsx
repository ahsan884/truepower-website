import type { IconComponent } from "@/types";

interface FeatureCardProps {
  icon: IconComponent;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  );
}
