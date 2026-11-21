
import Image from "next/image";

import CurrentlyBuilding from "./CurrentlyBuilding";
import type { HeroPhotoProps } from "@/types/hero";

export default function HeroPhoto({ src, alt }: HeroPhotoProps) {
  return (
    <div className="relative mx-auto w-full max-w-[350px] pb-12">

      {/* Profile Picture */}
      <div className="relative aspect-[1.2/1] rotate-[5deg] overflow-hidden rounded-2xl border border-lime/20 bg-panel2 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">

        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 85vw, 350px"
          className="object-cover object-[center_35%]"
        />
      </div>

      {/* Location Annotation */}
      <div className="absolute -right-[0] top-[65%] z-10 w-[110px] sm:-right-[76px] sm:top-[43%]">

        {/* Hand-drawn Curved Arrow */}
        <svg
          viewBox="0 0 65 48"
          width="65"
          height="48"
          fill="none"
          className="absolute -left-5 -top-14 text-lavender"
          aria-hidden="true"
        >
          <path
            d="M60 43 C56 20 37 5 10 9"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />

          <path
            d="M17 3 L9 9 L17 14"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Handwritten Location */}
        <div
          className="rotate-[-9deg] text-center text-lavender"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          <p className="text-[18px] leading-[24px]">
            Based
          </p>

          <p className="text-[18px] leading-[24px]">
            in Canada
          </p>
        </div>

        {/* Globe */}
        <span className="absolute -right-1 top-2 text-sm">
          🌎
        </span>
      </div>

      {/* Currently Building Card */}
      <CurrentlyBuilding
        label="Currently"
        message="...building cool things and looking for new opportunities."
      />

    </div>
  );
}
