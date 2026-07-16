import Image from "next/image";

interface SolutionCardProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export function SolutionCard({ imageSrc, imageAlt, imageWidth, imageHeight }: SolutionCardProps) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-surface p-[18px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="h-auto w-full"
        sizes="(min-width: 768px) 45vw, 90vw"
      />
    </div>
  );
}
