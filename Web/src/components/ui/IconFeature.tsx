import type { IconComponent } from "@/types";

interface IconFeatureProps {
  icon: IconComponent;
  label: string;
}

export function IconFeature({ icon: Icon, label }: IconFeatureProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
      <p className="text-sm font-medium text-white">{label}</p>
    </div>
  );
}
