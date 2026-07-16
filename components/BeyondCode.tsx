"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/personal/skydiving.JPG",
    title: "15,000 ft Tandem Skydive",
    description:
      "Completed a 15,000 ft tandem skydive in the U.S.—a personal milestone that taught me to embrace challenges, trust the process, and step confidently outside my comfort zone.",
  },
  {
    src: "/images/personal/kayking.jpg",
    title: "Kayaking",
    description: "I enjoy outdoor experiences and exploring new places.",
  },
  {
    src: "/images/personal/abudhabi.jpg",
    title: "Abu Dhabi",
    description: "Travel helps me experience new cultures and perspectives.",
  },
  {
    src: "/images/personal/newyork.jpg",
    title: "New York",
    description: "Exploring cities, people, and ideas beyond work.",
  },
];

export default function BeyondCode() {
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
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <section id="beyond-code" className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Beyond Code
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        Curious, consistent, and always learning.
      </h2>

      <p className="mt-4 max-w-3xl text-slate-400">
        Outside of software development, I enjoy fitness, travel, outdoor
        activities, and taking on experiences that push me outside my comfort
        zone.
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">
        <div className="relative h-[520px] w-full">
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            priority={currentIndex === 0}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          <button
            onClick={previous}
            className="absolute left-4 top-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur hover:bg-cyan-400 hover:text-slate-950"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 rounded-full bg-slate-950/70 p-3 backdrop-blur hover:bg-cyan-400 hover:text-slate-950"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-sm font-semibold text-cyan-400">
              {currentIndex + 1} / {images.length}
            </p>

            <h3 className="mt-2 text-3xl font-bold">{currentImage.title}</h3>

            <p className="mt-2 max-w-2xl text-slate-300">
              {currentImage.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              currentIndex === index
                ? "w-8 bg-cyan-400"
                : "w-2.5 bg-slate-700 hover:bg-slate-500"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
