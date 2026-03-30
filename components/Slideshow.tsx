"use client"
import {useState} from "react";

interface SlideshowProps {
  images: string[];
  overlay?: boolean;
}

const Slideshow = ({ images }: SlideshowProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const goNext=()=> setCurrentIdx((prev) => (prev + 1) % images.length);
  const goPrev=()=> setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/60 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]">
      <img
        src={images[currentIdx]}
        alt={`Slide ${currentIdx + 1}`}
        className="w-full h-full object-cover transition-opacity duration-700"
      />
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all duration-300"
      >
        ‹
      </button>
         <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all duration-300"
      >
        ›
      </button>

       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIdx ? "bg-white w-4" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;