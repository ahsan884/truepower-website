import Image from "next/image";

interface SolutionCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  captionLeft: string;
  captionRight: string;
  captionLeftPosition: number;
  captionRightPosition: number;
}

export function SolutionCard({
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  captionLeft,
  captionRight,
  captionLeftPosition,
  captionRightPosition,
}: SolutionCardProps) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-surface p-[18px]">
      <h3 className="mb-[18px] text-center text-base font-semibold text-white">{title}</h3>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="h-auto w-full"
        sizes="(min-width: 768px) 45vw, 90vw"
      />
      <div className="relative mt-2 h-4 text-xs text-text-secondary">
        <span
          className="absolute -translate-x-1/2 whitespace-nowrap"
          style={{ left: `${captionLeftPosition}%` }}
        >
          {captionLeft}
        </span>
        <span
          className="absolute -translate-x-1/2 whitespace-nowrap"
          style={{ left: `${captionRightPosition}%` }}
        >
          {captionRight}
        </span>
      </div>
    </div>
  );
}
