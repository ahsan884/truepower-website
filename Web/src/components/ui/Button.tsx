import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { IconComponent } from "@/types";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  icon?: IconComponent;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-black hover:bg-brand-light focus-visible:outline-brand",
  outline:
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/5 focus-visible:outline-white",
  ghost: "text-white/80 hover:text-white focus-visible:outline-white",
};

export function Button({
  variant = "primary",
  icon: Icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}
