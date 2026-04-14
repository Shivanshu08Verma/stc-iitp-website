"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  video: string;
  images: string[];
  autoPlayInterval?: number;
}

const SlideshowWithVideo = ({ video, images, autoPlayInterval = 3000 }: Props) => {
  const totalSlides = 1 + images.length;
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const prev = () => setCurrent((c) => (c - 1 + totalSlides) % totalSlides);
  const next = () => setCurrent((c) => (c + 1) % totalSlides);

  // Auto-advance: skip video slide (let it play naturally), auto-advance photos
  useEffect(() => {
    if (current === 0) return; // don't auto-advance video
    const timer = setTimeout(next, autoPlayInterval);
    return () => clearTimeout(timer);

  }, [current]);
  // When navigating to video slide, play from start
  useEffect(() => {
    if (current === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [current]);

  // Auto-advance from video when it ends
  const handleVideoEnd = () => setCurrent(1);

  return (
    <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {/* Video slide */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${current === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
      >
        <video
          ref={videoRef}
          src={video}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      </div>

      {/* Image slides */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ${current === i + 1 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${current === i ? "bg-white scale-125" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideshowWithVideo;