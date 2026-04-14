"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";

interface ClubGalleryProps {
  clubName: string;
  photos: string[];
  onClose: () => void;
}

export default function ClubGallery({ clubName, photos, onClose }: ClubGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [fadeKey, setFadeKey] = useState(0);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
    setFadeKey((k) => k + 1);
  }, [photos.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : null
    );
    setFadeKey((k) => k + 1);
  }, [photos.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      } else {
        if (e.key === "Escape") onClose();
      }
    },
    [lightboxIndex, onClose, closeLightbox, showPrev, showNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <>
      {/* Main Gallery Modal */}
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${clubName} photo gallery`}
      >
        <div
          className="relative w-full sm:max-w-4xl h-[92vh] sm:h-auto sm:max-h-[90vh] bg-[#0a0f2e] border border-blue-500/30 rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-blue-500/20 flex-shrink-0">
            <h3 className="text-white font-semibold text-base sm:text-lg tracking-wide truncate pr-4">
              {clubName} — Gallery
            </h3>
            <button
              onClick={onClose}
              className="cursor-pointer flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 active:scale-90"
              aria-label="Close gallery"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="overflow-y-auto flex-1 p-4 sm:p-6">
            {photos.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-500">
                <svg className="w-12 h-12 mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">No photos available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {photos.map((src, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-blue-900/20 border border-blue-500/10 cursor-zoom-in"
                    style={{ animationDelay: `${idx * 60}ms` }}
                    onClick={() => { setLightboxIndex(idx); setFadeKey(0); }}
                  >
                    <Image
                      src={src}
                      alt={`${clubName} photo ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Preload adjacent images */}
          {photos.map((src, idx) => {
            const isAdjacent =
              idx === (lightboxIndex - 1 + photos.length) % photos.length ||
              idx === (lightboxIndex + 1) % photos.length;
            if (!isAdjacent) return null;
            return (
              <Image
                key={`preload-${src}`}
                src={src}
                alt=""
                fill
                priority
                sizes="1px"
                className="invisible absolute pointer-events-none"
              />
            );
          })}

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-10 active:scale-90"
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Photo counter */}
          <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 text-gray-400 text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full whitespace-nowrap">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors p-2 sm:p-3 rounded-full hover:bg-white/10 z-10 active:scale-90"
            aria-label="Previous photo"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Full-size image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[75vh] sm:max-h-[85vh] mx-12 sm:mx-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={fadeKey}
              src={photos[lightboxIndex]}
              alt={`${clubName} photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
              style={{ animation: "fadeIn 0.1s ease-in-out" }}
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors p-2 sm:p-3 rounded-full hover:bg-white/10 z-10 active:scale-90"
            aria-label="Next photo"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 px-3 sm:px-4 overflow-x-auto max-w-[90vw] sm:max-w-xl scrollbar-none">
            {photos.map((src, idx) => (
              <div
                key={idx}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); setFadeKey((k) => k + 1); }}
                className={`relative flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-md sm:rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                  idx === lightboxIndex
                    ? "border-blue-400 scale-110"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .scrollbar-none {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}