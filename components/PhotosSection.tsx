"use client";

import Image from "next/image";
import Slideshow from "@/components/Slideshow";

const carouselImages = [
  "/event_photo/group1.png",
  "/event_photo/robo2.png",
  "/event_photo/session1.png",
  "/event_photo/robo1.png",
  "/event_photo/sparna1.png",
];

const staticPhotos = [
  "/event_photo/group1.png",
  "/event_photo/robo2.png",
  "/event_photo/session1.png",
  "/event_photo/sparna1.png",
];

const PhotosSection = () => {
  return (
    <section className="bg-[#05071a] px-4 md:px-8 py-8 md:py-12">
      <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-6 md:mb-8">
        PHOTOS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3 items-stretch">

        {/* Left: carousel */}
        <div className="relative aspect-video">
          <Slideshow images={carouselImages} />
        </div>

        {/* Right: 2×2 thumbnail grid */}
        <div className="grid grid-cols-2 gap-1.5">
          {staticPhotos.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-sm aspect-4/3">
              <Image
                src={src}
                alt={`Event photo ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 45vw, 15vw"
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