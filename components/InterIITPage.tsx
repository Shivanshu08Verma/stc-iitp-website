"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Performance {
  id: string;
  problemStatement: string;
  category: "HIGH PREP" | "MID PREP" | "LOW PREP" | "INFO PREP";
  rank: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const performancesByYear: Record<string, Performance[]> = {
  "2023": [
    { id: "PS-71", problemStatement: "Autonomous Drone Navigation for Disaster Relief", category: "HIGH PREP", rank: 1 },
    { id: "PS-35", problemStatement: "Predictive Supply Chain Modelling via Federated Learning", category: "LOW PREP", rank: 2 },
    { id: "PS-46", problemStatement: "Low-Latency FPGA High Frequency Trading Engine", category: "INFO PREP", rank: 3 },
    { id: "PS-12", problemStatement: "Real-Time Sign Language Interpreter using CV", category: "MID PREP", rank: 4 },
    { id: "PS-58", problemStatement: "Quantum-Resistant Cryptography Implementation", category: "HIGH PREP", rank: 5 },
  ],
  "2022": [
    { id: "PS-22", problemStatement: "High-Performance Computing Cluster Optimisation", category: "HIGH PREP", rank: 1 },
    { id: "PS-33", problemStatement: "Cyber Security & Cryptography Framework", category: "MID PREP", rank: 2 },
    { id: "PS-41", problemStatement: "AI-Driven Supply Chain Risk Assessment", category: "LOW PREP", rank: 3 },
    { id: "PS-19", problemStatement: "Smart Grid Load Balancing with ML", category: "MID PREP", rank: 4 },
  ],
  "2021": [
    { id: "PS-09", problemStatement: "Autonomous Vehicle Path Planning Algorithm", category: "HIGH PREP", rank: 1 },
    { id: "PS-17", problemStatement: "Blockchain-based Academic Credential System", category: "LOW PREP", rank: 2 },
    { id: "PS-28", problemStatement: "NLP-based Legal Document Summarisation", category: "INFO PREP", rank: 3 },
  ],
};

const galleryImages = [
  { id: 1, alt: "Circuit board close-up", bg: "bg-slate-700" },
  { id: 2, alt: "Digital terminal interface", bg: "bg-slate-800" },
  { id: 3, alt: "Engineer reviewing schematics", bg: "bg-slate-700" },
  { id: 4, alt: "Code on screen", bg: "bg-slate-900" },
  { id: 5, alt: "Security lock system", bg: "bg-slate-800" },
  { id: 6, alt: "Data visualization", bg: "bg-slate-700" },
  { id: 7, alt: "Team collaboration", bg: "bg-slate-800" },
];

const categoryColor: Record<string, string> = {
  "HIGH PREP":  "text-[#6BFB9A]",
  "MID PREP":   "text-[#60A5FA]",
  "LOW PREP":   "text-[#FBBF24]",
  "INFO PREP":  "text-[#C084FC]",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function GeometricGrid() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Nested rectangles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute border border-[#6BFB9A]/30"
          style={{
            width:  `${90 - i * 16}%`,
            height: `${90 - i * 16}%`,
          }}
        />
      ))}
      {/* Centre dot */}
      <div className="relative z-10 w-3 h-3 rounded-full bg-[#6BFB9A] shadow-[0_0_12px_#6BFB9A]" />
      {/* Corner marks */}
      {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
        <span key={i} className={`absolute ${pos} w-4 h-4 border-[#6BFB9A]/60 ${i < 2 ? "border-t" : "border-b"} ${i % 2 === 0 ? "border-l" : "border-r"}`} />
      ))}
      {/* Coordinate label */}
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-[#6BFB9A]/50 leading-tight text-right">
        SYS.OP.ON
      </span>
    </div>
  );
}

function CircuitGraphic() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="120" stroke="#6BFB9A" strokeWidth="0.5" />
      <circle cx="150" cy="150" r="90"  stroke="#6BFB9A" strokeWidth="0.5" />
      <circle cx="150" cy="150" r="60"  stroke="#6BFB9A" strokeWidth="0.5" />
      <circle cx="150" cy="150" r="8"   fill="#6BFB9A" />
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <g key={i}>
            <line x1={150 + 60  * Math.cos(rad)} y1={150 + 60  * Math.sin(rad)}
                  x2={150 + 120 * Math.cos(rad)} y2={150 + 120 * Math.sin(rad)}
                  stroke="#6BFB9A" strokeWidth="0.5" />
            <circle cx={150 + 120 * Math.cos(rad)} cy={150 + 120 * Math.sin(rad)} r="3" fill="#6BFB9A" />
          </g>
        );
      })}
      <line x1="30" y1="150" x2="270" y2="150" stroke="#6BFB9A" strokeWidth="0.3" strokeDasharray="4 4" />
      <line x1="150" y1="30" x2="150" y2="270" stroke="#6BFB9A" strokeWidth="0.3" strokeDasharray="4 4" />
    </svg>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function InterIITPage() {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const years = Object.keys(performancesByYear).sort((a, b) => +b - +a);
  const performances = performancesByYear[selectedYear] ?? [];

  return (
    <main
      className="min-h-screen w-full text-white"
      style={{ background: "#080d1a", fontFamily: "'Space Grotesk', sans-serif" }}
    >

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[520px] flex items-stretch overflow-hidden border-b border-white/5"
        style={{ background: "linear-gradient(135deg, #0a0f1e 60%, #0d1a2e 100%)" }}>

        {/* Scan-line overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 4px)" }} />

        {/* LEFT content */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 py-16 w-full md:w-1/2">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#6BFB9A]/70 mb-6 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#6BFB9A]/50" />
            LEGACY DATABASE: IITP
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight uppercase mb-6">
            INTER IIT<br />TECH MEET
          </h1>

          <div className="flex items-stretch gap-0 mb-8 w-max">
            <div className="w-1 bg-[#6BFB9A] rounded-sm" />
            <p className="pl-3 text-[#94A3B8] text-sm md:text-base leading-relaxed">
              A legacy of engineering excellence.
            </p>
          </div>

          <Link
            href="#archive"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#6BFB9A] px-5 py-2.5 text-xs font-mono tracking-[0.2em] uppercase text-white/80 hover:text-[#6BFB9A] transition-all duration-300 w-max group"
          >
            ENTER ARCHIVE
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* RIGHT geometric grid */}
        <div className="hidden md:block relative w-1/2 min-h-[400px]">
          <div className="absolute inset-8">
            <GeometricGrid />
          </div>
          {/* Coordinates */}
          <div className="absolute bottom-6 right-8 font-mono text-[9px] text-[#6BFB9A]/40 text-right leading-5">
            LAT: 25.5800° N<br />
            LNG: 84.8570° E<br />
            STATUS: ACTIVE
          </div>
        </div>
      </section>

      {/* ── MANDATE ──────────────────────────────────────────────────────── */}
      <section id="archive" className="w-full px-8 md:px-16 py-20 flex flex-col md:flex-row gap-12 items-start"
        style={{ background: "#080d1a" }}>

        {/* Text */}
        <div className="flex-1 max-w-xl">
          <p className="font-mono text-[10px] tracking-[0.25em] text-[#6BFB9A] mb-4 uppercase">
            Mandate
          </p>
          <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
            The Student and Technical Council (STC) of IIT Patna serves as the vanguard for
            technological innovation and competitive excellence. This ledger stands as the
            unflinching, immutable record of our institutional performance at the annual
            Inter IIT Tech Meet — a crucible where the nation&apos;s premier engineering minds
            converge. Every entry herein represents rigorous engineering, strategic foresight,
            and the relentless pursuit of absolute technical superiority.
          </p>
        </div>

        {/* Circuit graphic */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 opacity-70">
          <CircuitGraphic />
        </div>
      </section>

      {/* ── TOP PERFORMANCES ─────────────────────────────────────────────── */}
      <section className="w-full px-8 md:px-16 pb-20"
        style={{ background: "#080d1a" }}>

        {/* Section header */}
        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#6BFB9A]/60 uppercase mb-1">
              Active Database View
            </p>
            <h2 className="text-xl md:text-2xl font-bold tracking-wide uppercase">
              Top Performances
            </h2>
          </div>

          {/* Year selector */}
          <div className="relative">
            <button
              onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
              className="flex items-center gap-3 border border-white/20 hover:border-[#6BFB9A]/60 px-4 py-2 font-mono text-xs tracking-[0.15em] text-white/70 hover:text-[#6BFB9A] transition-all duration-200"
            >
              YEAR {selectedYear}
              <svg className={`w-3 h-3 transition-transform duration-200 ${isYearDropdownOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {isYearDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 bg-[#0d1a2e] border border-white/10 z-30 min-w-full">
                {years.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => { setSelectedYear(yr); setIsYearDropdownOpen(false); }}
                    className={`block w-full text-left px-4 py-2 font-mono text-xs tracking-[0.15em] transition-colors duration-150
                      ${yr === selectedYear ? "text-[#6BFB9A] bg-[#6BFB9A]/10" : "text-white/50 hover:text-white hover:bg-white/5"}`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                {["PST ID", "PROBLEM STATEMENT", "CATEGORY", "RANK"].map((h) => (
                  <th key={h} className="pb-3 font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase pr-6 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {performances.map((p, i) => (
                <tr
                  key={p.id}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-150 group"
                >
                  <td className="py-4 pr-6 font-mono text-[11px] text-white/30 whitespace-nowrap">{p.id}</td>
                  <td className="py-4 pr-6 text-sm text-[#94A3B8] group-hover:text-white transition-colors duration-150">
                    {p.problemStatement}
                  </td>
                  <td className={`py-4 pr-6 font-mono text-[11px] tracking-[0.1em] whitespace-nowrap ${categoryColor[p.category]}`}>
                    {p.category}
                  </td>
                  <td className="py-4 font-mono text-sm font-bold text-white/60">
                    {String(p.rank).padStart(2, "0")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── VISUAL ARCHIVES ───────────────────────────────────────────────── */}
      <section className="w-full px-8 md:px-16 pb-24" style={{ background: "#080d1a" }}>
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-wide uppercase text-[#6BFB9A]">
            Visual Archives
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] text-white/30 mt-1 uppercase">
            Sector Records / Media
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {/* Row 1: 3 images, first one wider */}
          <div className="col-span-1 md:col-span-1 aspect-[4/3] bg-slate-800 overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 border border-white/0 group-hover:border-[#6BFB9A]/20 transition-colors duration-300" />
            {/* Placeholder image texture */}
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: "repeating-linear-gradient(45deg, #6BFB9A22 0px, #6BFB9A22 1px, transparent 1px, transparent 8px)" }} />
          </div>

          <div className="col-span-1 aspect-[4/3] bg-slate-900 overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-tl from-[#0d1a2e] to-slate-800 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 border border-white/0 group-hover:border-[#6BFB9A]/20 transition-colors duration-300" />
            <div className="absolute bottom-2 right-2 font-mono text-[8px] text-[#6BFB9A]/40">SYS.02</div>
          </div>

          {/* Tall image spanning 2 rows on md */}
          <div className="hidden md:block row-span-2 bg-slate-700 overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-600 to-[#0a0f1e] group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 border border-white/0 group-hover:border-[#6BFB9A]/20 transition-colors duration-300" />
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)" }} />
          </div>

          {/* Row 2 */}
          <div className="col-span-1 aspect-[4/3] bg-[#0d1a2e] overflow-hidden group relative border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1a2e] to-slate-900 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 border border-white/0 group-hover:border-[#6BFB9A]/20 transition-colors duration-300" />
            {/* Lock icon placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
          </div>

          <div className="col-span-1 aspect-[4/3] bg-slate-800 overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-slate-700 to-slate-900 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 border border-white/0 group-hover:border-[#6BFB9A]/20 transition-colors duration-300" />
          </div>

          {/* End of record cell */}
          <div className="col-span-2 md:col-span-1 aspect-[4/3] bg-[#0d1a2e] border border-[#6BFB9A]/20 overflow-hidden relative flex flex-col items-center justify-center gap-3">
            <svg className="w-8 h-8 text-[#6BFB9A]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
            </svg>
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#6BFB9A]/60 uppercase">
              End of Record
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
