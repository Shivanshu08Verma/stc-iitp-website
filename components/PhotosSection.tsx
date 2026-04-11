"use client";

import Image from "next/image";
import Slideshow from "@/components/Slideshow";

const carouselImages = [
  "https://picsum.photos/seed/stc1/800/600",
  "https://picsum.photos/seed/stc2/800/600",
  "https://picsum.photos/seed/stc3/800/600",
  "https://picsum.photos/seed/stc4/800/600",
];

const staticPhotos = [
  "https://picsum.photos/400/300?random=1",
  "https://picsum.photos/400/300?random=2",
  "https://picsum.photos/400/300?random=3",
  "https://picsum.photos/400/300?random=4",
];

const PhotosSection = () => {
  return (
<<<<<<< Updated upstream
    <section className="bg-[#05071a] px-8 py-12">
      <h2 className="text-white text-5xl font-black tracking-tight mb-8">
=======
    <section className="bg-[#05071a] px-4 md:px-8 py-8 md:py-12">
      <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-6 md:mb-8">
>>>>>>> Stashed changes
        PHOTOS
      </h2>

      {/* Outer grid — align-items stretch so both columns are equal height */}
<<<<<<< Updated upstream
      <div className="grid grid-cols-[2fr_1fr] gap-3 items-stretch">
=======
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 items-stretch">
>>>>>>> Stashed changes
        
        {/* Left: carousel */}
        <div className="relative aspect-[16/9]">
          <Slideshow images={carouselImages} />
        </div>

        {/* Right: thumbnail grid — fills exact same height as carousel via CSS grid rows */}
<<<<<<< Updated upstream
        <div
          className="grid grid-cols-2 gap-1.5"
          style={{ gridTemplateRows: "1fr 1fr" }}
        >
          {staticPhotos.map((src, i) => (
            // No aspect ratio — the row height comes from the parent grid
            <div key={i} className="relative overflow-hidden rounded-sm">
=======
        <div className="grid grid-cols-2 gap-1.5 grid-rows-[1fr_1fr]">
          {staticPhotos.map((src, i) => (
            // No aspect ratio — the row height comes from the parent grid
            <div key={i} className="relative overflow-hidden rounded-sm aspect-[4/3] lg:aspect-auto">
>>>>>>> Stashed changes
              <Image
                src={src}
                alt={`Event photo ${i + 1}`}
                fill
                sizes="15vw"
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;