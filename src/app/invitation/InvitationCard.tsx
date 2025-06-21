"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

interface InvitationCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  textPositionClass: string;
}

export default function InvitationCard({
  src,
  alt,
  width,
  height,
  textPositionClass,
}: InvitationCardProps) {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  const snakeToTitleCase = (str: string) => {
    return str
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="relative w-full max-w-sm xl:w-auto">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto xl:w-auto xl:h-full object-contain rounded-lg shadow-lg"
      />
      {to && (
        <p
          className={`absolute font-dancing-script text-base md:text-xl text-red-800 transform ${textPositionClass}`}
        >
          {snakeToTitleCase(to)}
        </p>
      )}
    </div>
  );
} 