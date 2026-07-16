import { IconCheckCircle } from "@/components/icons";

interface CheckListItemProps {
  title: string;
  description: string;
}

export function CheckListItem({ title, description }: CheckListItemProps) {
  return (
    <div className="flex gap-3">
      <IconCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
      <p>
        <span className="font-semibold text-white">{title}</span>
        <span className="block text-sm leading-relaxed text-text-secondary">
          {description}
        </span>
      </p>
    </div>
  );
}
