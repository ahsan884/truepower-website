import type { IconComponent } from "@/types";

interface StatItemProps {
  icon: IconComponent;
  value: string;
  label: string;
}

export function StatItem({ icon: Icon, value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-8 w-8 shrink-0 text-brand" aria-hidden="true" />
      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-bold text-brand">{value}</span>
        <span className="text-sm text-text-secondary">{label}</span>
      </div>
    </div>
  );
}
