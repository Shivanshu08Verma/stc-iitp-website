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
    <section className="bg-[#05071a] px-8 py-12">
      <h2 className="text-white text-5xl font-black tracking-tight mb-8">
        PHOTOS
      </h2>

      {/* Outer grid — align-items stretch so both columns are equal height */}
      <div className="grid grid-cols-[2fr_1fr] gap-3 items-stretch">
        
        {/* Left: carousel */}
        <div className="relative aspect-[16/9]">
          <Slideshow images={carouselImages} />
        </div>

        {/* Right: thumbnail grid — fills exact same height as carousel via CSS grid rows */}
        <div
          className="grid grid-cols-2 gap-1.5"
          style={{ gridTemplateRows: "1fr 1fr" }}
        >
          {staticPhotos.map((src, i) => (
            // No aspect ratio — the row height comes from the parent grid
            <div key={i} className="relative overflow-hidden rounded-sm">
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