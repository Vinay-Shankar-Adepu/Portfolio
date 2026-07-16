"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const eventImages = [
  "/images/events/aws-ai-newyork/1.jpeg",
  "/images/events/aws-ai-newyork/2.jpeg",
  "/images/events/aws-ai-newyork/3.jpeg",
  "/images/events/aws-ai-newyork/4.jpeg",
  "/images/events/aws-ai-newyork/5.jpeg",
  "/images/events/aws-ai-newyork/6.jpeg",
  "/images/events/aws-ai-newyork/7.jpeg",
  "/images/events/aws-ai-newyork/8.jpeg",
];

export default function EventGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? eventImages.length - 1 : current - 1,
    );
  };

  const next = () => {
    setCurrentIndex((current) =>
      current === eventImages.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Events
      </p>

      <h2 className="mt-3 text-4xl font-bold">AWS AI Event - New York</h2>

      <p className="mt-4 max-w-3xl text-slate-400">
        A glimpse into my continuous learning journey around cloud, AI, and
        modern technology communities.
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">
        <div className="relative h-[520px] w-full">
          <Image
            src={eventImages[currentIndex]}
            alt={`AWS AI Event photo ${currentIndex + 1}`}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

          <button
            onClick={previous}
            className="absolute left-4 top-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur hover:bg-cyan-400 hover:text-slate-950"
            aria-label="Previous event image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur hover:bg-cyan-400 hover:text-slate-950"
            aria-label="Next event image"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-sm font-semibold text-cyan-400">
              {currentIndex + 1} / {eventImages.length}
            </p>
            <h3 className="mt-2 text-3xl font-bold">AWS AI Event Experience</h3>
            <p className="mt-2 max-w-2xl text-slate-300">
              Learning about AI, cloud, and modern application development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
