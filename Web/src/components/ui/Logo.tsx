import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#home"
      className={cn("inline-flex flex-col items-center", className)}
      aria-label="TruPower — home"
    >
      <Image
        src="/images/icons/trupower-icon.png"
        alt=""
        width={199}
        height={126}
        className="h-[92.4px] w-auto"
        priority
      />
    </a>
  );
}
