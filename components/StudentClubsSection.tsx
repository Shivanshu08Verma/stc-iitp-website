"use client";
import { useState, useEffect, useRef } from "react";

const CLUBS: { id: number; name: string }[] = [
  { id: 1,  name: "E-Cell" },
  { id: 2,  name: "NJack" },
  { id: 3,  name: "Finance Club" },
  { id: 4,  name: "Team Phoenix" },
  { id: 5,  name: "MoodBoard" },
  { id: 6,  name: "Trading And Investment Club" },
  { id: 7,  name: "Tinkerers' Lab" },
  { id: 8,  name: "Rocketry And Aviation" },
  { id: 9,  name: "Quantum Technology Club" },
  { id: 10, name: "Sparkonics" },
  { id: 11, name: "Astronomy And Particle Physics Club" },
  { id: 12, name: "ChESSx" },
  { id: 13, name: "ACE" },
  { id: 14, name: "MATES" },
  { id: 15, name: "SCME" },
  { id: 16, name: "Motorsports Club" },
  { id: 17, name: "Optimatx" },
];

const DOUBLED = [...CLUBS, ...CLUBS];

export default function StudentClubsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const SPEED = 0.5;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!pausedRef.current) {
        const totalWidth = track.scrollWidth / 2;
        posRef.current += SPEED;
        if (posRef.current >= totalWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
<<<<<<< Updated upstream
    <section className="relative w-full min-h-screen flex flex-col justify-center px-16 py-20 overflow-hidden">
      <div className="relative flex items-end justify-between mb-8">
        <h2
          className="text-6xl font-black uppercase text-white leading-none tracking-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          STUDENT CLUBS
        </h2>

        <a
          href="/clubs"
          className="inline-flex items-center gap-3 border border-slate-500 px-6 py-3 text-xs font-semibold tracking-[0.25em] text-slate-300 transition-all duration-200 hover:border-slate-300 hover:text-white active:scale-95"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
=======
    <section className="relative w-full min-h-screen flex flex-col justify-center px-4 md:px-16 py-12 md:py-20 overflow-hidden">
      <div className="relative flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 gap-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none tracking-tight text-center sm:text-left font-['Barlow_Condensed',sans-serif]">
          STUDENT CLUBS
        </h2>

        <a href="/clubs" className="inline-flex items-center gap-3 border border-slate-500 px-6 py-3 text-xs font-semibold tracking-[0.25em] text-slate-300 transition-all duration-200 hover:border-slate-300 hover:text-white active:scale-95 font-['Space_Mono',monospace]">
>>>>>>> Stashed changes
          ENTER ARCHIVE →
        </a>
      </div>

      <div className="relative w-full h-px bg-slate-700 mb-16" />

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >


<<<<<<< Updated upstream
        <div
          ref={trackRef}
          className="flex items-start gap-10 will-change-transform"
          style={{ width: "max-content" }}
        >
=======
        <div ref={trackRef} className="flex items-start gap-10 will-change-transform w-max">
>>>>>>> Stashed changes
          {DOUBLED.map((club, i) => (
            <ClubCard key={`${club.id}-${i}`} club={club} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ClubCardProps {
  club: { id: number; name: string };
}

function ClubCard({ club }: ClubCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
<<<<<<< Updated upstream
      className="flex flex-col items-center gap-5 cursor-pointer group"
      style={{ width: "160px", flexShrink: 0 }}
=======
      className="flex flex-col items-center gap-5 cursor-pointer group w-[160px] shrink-0"
>>>>>>> Stashed changes
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-40 h-40 rounded-full border border-slate-700 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-slate-400 group-hover:shadow-[0_0_30px_rgba(148,163,184,0.12)]">
        <svg
          className={`w-8 h-8 transition-opacity duration-300 ${hovered ? "opacity-40" : "opacity-20"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>

        {hovered && (
          <div className="absolute inset-0 rounded-full border border-slate-400 opacity-30 animate-ping" />
        )}
      </div>

<<<<<<< Updated upstream
      <p
        className="text-xs font-semibold tracking-[0.3em] text-slate-300 transition-colors duration-200 group-hover:text-white text-center"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
=======
      <p className="text-xs font-semibold tracking-[0.3em] text-slate-300 transition-colors duration-200 group-hover:text-white text-center font-['Space_Mono',monospace]">
>>>>>>> Stashed changes
        {club.name}
      </p>
    </div>
  );
}