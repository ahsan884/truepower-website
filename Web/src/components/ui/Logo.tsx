import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  showTagline?: boolean;
  className?: string;
}

export function Logo({ showTagline = false, className }: LogoProps) {
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
        className="h-16 w-auto"
        priority
      />
      {showTagline ? (
        <span className="mt-1 text-center text-[10px] font-medium leading-tight text-text-secondary">
          Energy Division of
          <br />
          Majestic Crop Sciences Group
        </span>
      ) : null}
    </a>
  );
}
