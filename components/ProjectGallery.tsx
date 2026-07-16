"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  descriptions?: string[];
  projectTitle: string;
}

export default function ProjectGallery({
  images,
  descriptions = [],
  projectTitle,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const next = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    if (images.length < 2) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((current) =>
        current === images.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
      <div className="relative h-[320px] w-full sm:h-[420px] md:h-[520px]">
        <Image
          src={images[currentIndex]}
          alt={
            descriptions[currentIndex] ??
            `${projectTitle} screenshot ${currentIndex + 1}`
          }
          fill
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-contain"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previous}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur transition-colors hover:bg-cyan-400 hover:text-slate-950"
              aria-label={`Previous ${projectTitle} image`}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur transition-colors hover:bg-cyan-400 hover:text-slate-950"
              aria-label={`Next ${projectTitle} image`}
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
          <p className="text-sm font-semibold text-cyan-400">
            {currentIndex + 1} / {images.length}
          </p>
          {descriptions[currentIndex] && (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-200 md:text-base">
              {descriptions[currentIndex]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
