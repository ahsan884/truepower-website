import Image from "next/image";
import { cn } from "@/lib/cn";

export interface IconProps {
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

function ImageIcon({
  src,
  width,
  height,
  className,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  return <Image src={src} alt="" width={width} height={height} className={className} />;
}

/* Feature highlight icons — official assets from Assets/icon/ */

export function IconBolt({ className }: IconProps) {
  return (
    <ImageIcon src="/images/icons/relayable-power.png" width={107} height={149} className={className} />
  );
}

export function IconBars({ className }: IconProps) {
  return (
    <ImageIcon src="/images/icons/cost-optimization.png" width={138} height={115} className={className} />
  );
}

export function IconLeaf({ className }: IconProps) {
  return (
    <ImageIcon src="/images/icons/sustainable-future.png" width={143} height={146} className={className} />
  );
}

export function IconShieldBuilt({ className }: IconProps) {
  return (
    <ImageIcon src="/images/icons/built-to-last.png" width={136} height={160} className={className} />
  );
}

/**
 * This asset is a thin-stroke outline icon, unlike the other four feature icons
 * (solid/filled artwork), so it reads with less visual weight at an identical
 * bounding box even with padding cropped out. The layout footprint stays the
 * same fixed size as every other icon (so card/title spacing is untouched) —
 * only the image inside is rendered larger and centered to match optical size.
 */
export function IconPeakShaving({ className }: IconProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <Image
        src="/images/icons/peak-shaving.png"
        alt=""
        width={133}
        height={100}
        className="absolute bottom-0 left-1/2 h-[170%] w-[170%] max-w-none -translate-x-1/2 object-contain object-bottom"
      />
    </span>
  );
}

/* Cold-to-heat mini-feature icons — official assets */

export function IconThermometer({ className }: IconProps) {
  return <ImageIcon src="/images/icons/temperature.png" width={124} height={162} className={className} />;
}

export function IconThermometerSignal({ className }: IconProps) {
  return (
    <ImageIcon
      src="/images/icons/intelligent-thermal-management.png"
      width={129}
      height={155}
      className={className}
    />
  );
}

export function IconShieldCheck({ className }: IconProps) {
  return (
    <ImageIcon src="/images/icons/high-safety-standard.png" width={136} height={160} className={className} />
  );
}

/* Checklist tick — official asset */

export function IconCheckCircle({ className }: IconProps) {
  return <ImageIcon src="/images/icons/tick.png" width={158} height={158} className={className} />;
}

/* Stats bar icons — official assets where available */

export function IconBackupPower({ className }: IconProps) {
  return <ImageIcon src="/images/icons/backup-power.png" width={192} height={193} className={className} />;
}

export function IconShieldWarranty({ className }: IconProps) {
  return (
    <ImageIcon src="/images/icons/high-safety-standard.png" width={136} height={160} className={className} />
  );
}

export function IconYearsRoi({ className }: IconProps) {
  return <ImageIcon src="/images/icons/year-roi.png" width={136} height={160} className={className} />;
}

/* UI chrome icons */

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSend(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4.5 12 20 4.5 15.5 20l-3.8-6.7L4.5 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.7 13.3 20 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Contact icons */

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l1.9-1.9c.2-.2.6-.3.9-.2 1 .3 2.1.5 3.2.5.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.5 20 4 13.5 4 5.8c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.1.2 2.2.5 3.2.1.3 0 .7-.2.9L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* Social icons */

export function IconLinkedIn(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <rect x="6.7" y="10" width="1.9" height="7" fill="currentColor" />
      <circle cx="7.65" cy="7.2" r="1.15" fill="currentColor" />
      <path
        d="M11 17v-4.3c0-1.4.95-2.4 2.2-2.4 1.25 0 2.1.95 2.1 2.4V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="11" y1="10.3" x2="11" y2="17" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M13.4 21v-7h2.1l.3-2.5h-2.4V9.8c0-.7.2-1.2 1.2-1.2h1.3V6.2c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.2v1.8H8.7v2.5h2.1V21"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconYouTube(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.4 9.6v4.8l4.4-2.4Z" fill="currentColor" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}
