"use client";
import { useState } from "react";

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

const VISIBLE = 5;

export default function StudentClubsSection() {
  const [start, setStart] = useState(0);
  const canPrev = start > 0;
  const canNext = start + VISIBLE < CLUBS.length;
  const prev = () => { if (canPrev) setStart((s) => s - 1); };
  const next = () => { if (canNext) setStart((s) => s + 1); };
  const visible = CLUBS.slice(start, start + VISIBLE);

  return (
    <section
      className="
        relative w-full min-h-screen
        bg-[#070d1a]
        flex flex-col justify-center
        px-16 py-20
        overflow-hidden
      "
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#4a6fa5 1px, transparent 1px), linear-gradient(90deg, #4a6fa5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header row */}
      <div className="relative flex items-start justify-between mb-8">
        <div>
          <p
            className="text-xs font-semibold tracking-[0.35em] text-slate-400 mb-3"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            COLLECTIVE&nbsp;&nbsp;//&nbsp;&nbsp;04
          </p>
          <h2
            className="text-6xl font-black uppercase text-white leading-none tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            STUDENT CLUBS
          </h2>
        </div>

        <div className="flex gap-3 mt-auto pt-4 self-end">
          <button
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous clubs"
            className="
              w-11 h-11 border flex items-center justify-center
              transition-all duration-200
              border-slate-600 text-slate-400
              hover:border-slate-300 hover:text-white
              disabled:opacity-25 disabled:cursor-not-allowed
              active:scale-95
            "
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </button>

          <button
            onClick={next}
            disabled={!canNext}
            aria-label="Next clubs"
            className="
              w-11 h-11 border flex items-center justify-center
              transition-all duration-200
              border-slate-600 text-slate-400
              hover:border-slate-300 hover:text-white
              disabled:opacity-25 disabled:cursor-not-allowed
              active:scale-95
            "
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="relative w-full h-px bg-slate-700 mb-16" />

      {/* Club cards */}
      <div className="relative flex items-start justify-between gap-8">
        {visible.map((club, i) => (
          <ClubCard key={club.id} club={club} index={i} />
        ))}
      </div>

      {/* Progress dots removed */}
    </section>
  );
}

interface ClubCardProps {
  club: { id: number; name: string };
  index: number;
}

function ClubCard({ club, index }: ClubCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-5 flex-1 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="
          relative w-40 h-40 rounded-full
          bg-[#111827]
          border border-slate-700
          flex items-center justify-center
          overflow-hidden
          transition-all duration-300
          group-hover:border-slate-400
          group-hover:shadow-[0_0_30px_rgba(148,163,184,0.12)]
        "
      >
        <svg
          className={`
            w-8 h-8 transition-opacity duration-300
            ${hovered ? "opacity-40" : "opacity-20"}
          `}
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

      <p
        className="
          text-xs font-semibold tracking-[0.3em] text-slate-300
          transition-colors duration-200
          group-hover:text-white
          text-center
        "
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        {club.name}
      </p>
    </div>
  );
}