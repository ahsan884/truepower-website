import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-brand uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <span
        className={cn(
          "mt-4 block h-1 w-14 rounded-full bg-brand",
          align === "center" && "mx-auto",
        )}
        aria-hidden="true"
      />
    </div>
  );
}
