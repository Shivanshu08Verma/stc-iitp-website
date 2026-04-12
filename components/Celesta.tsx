"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ExploreButton from "./ExploreButton";

const celestaImages = [
  "/CELESTA/img1.png",
  "/CELESTA/img2.png",
  "/CELESTA/img3.png",
  "/CELESTA/img4.png",
  "/CELESTA/img5.png",
];

const Celesta = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % celestaImages.length);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {celestaImages.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`Celesta background ${idx + 1}`}
          fill
          priority={idx === 0}
          loading={idx === 0 ? "eager" : "lazy"}
          sizes="100vw"
          quality={75}
          className="object-cover"
          style={{
            opacity: idx === currentIdx ? 1 : 0,
            transition: "opacity 0.6s ease-in-out",
            zIndex: idx === currentIdx ? 1 : 0,
            willChange: "opacity",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/55 z-[2]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-[3]">
        <p className="text-white/85 text-base md:text-[20px] mb-4 tracking-[1px] font-[family-name:var(--font-inter)] font-normal [text-shadow:0_2px_8px_rgba(0,0,0,0.9),_0_1px_3px_rgba(0,0,0,0.8)]">
  The Annual Techno-Management Fest of IIT Patna
</p>

<h2 className="font-black text-white text-6xl md:text-8xl lg:text-[96px] leading-none mb-6 tracking-tighter font-[family-name:var(--font-inter)] [text-shadow:0_0_60px_rgba(255,255,255,0.15),_0_4px_16px_rgba(0,0,0,0.95),_0_2px_4px_rgba(0,0,0,0.9)]">
  CELESTA
</h2>

<p className="text-white/75 text-sm md:text-base leading-relaxed max-w-[580px] mb-10 font-[family-name:var(--font-inter)] font-normal [text-shadow:0_2px_8px_rgba(0,0,0,0.9),_0_1px_3px_rgba(0,0,0,0.8)]">
  Three days of innovation, competitions, workshops, guest lectures,
  and cultural events that bring together the brightest minds from
  across the nation.
</p>
        <ExploreButton href="https://celesta.iitp.ac.in/" />
      </div>

    </section>
  );
};

export default Celesta;