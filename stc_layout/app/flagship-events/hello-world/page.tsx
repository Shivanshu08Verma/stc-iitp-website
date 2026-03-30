"use client";

import { useState } from "react";
import Image from "next/image";
import {
  m,
  LazyMotion,
  domAnimation,
  AnimatePresence,
  Variants,
} from "framer-motion";

interface TimelineRow {
  club: string;
  dates: string;
}
interface LeaderboardRow {
  position: number;
  rollNumber: string;
  name: string;
  totalScore: number;
}

const YEARS = ["2024", "2023", "2022"];

const timelineData: Record<string, TimelineRow[]> = {
  "2024": [
    { club: "Mates", dates: "14th June – 14th July" },
    { club: "Mates", dates: "14th June – 14th July" },
    { club: "Mates", dates: "14th June – 14th July" },
    { club: "Mates", dates: "14th June – 14th July" },
    { club: "Mates", dates: "14th June – 14th July" },
    { club: "Mates", dates: "14th June – 14th July" },
    { club: "Mates", dates: "14th June – 14th July" },
    { club: "Mates", dates: "14th June – 14th July" },
    { club: "Mates", dates: "14th June – 14th July" },
  ],
  "2023": [
    { club: "Robotics Club", dates: "1st June – 30th June" },
    { club: "Coding Club", dates: "5th July – 20th July" },
  ],
  "2022": [{ club: "AI/ML Club", dates: "10th May – 10th June" }],
};

const leaderboardData: Record<string, LeaderboardRow[]> = {
  "2024": Array.from({ length: 16 }, () => ({
    position: 1,
    rollNumber: "2301EC41",
    name: "Aravind",
    totalScore: 150,
  })),
  "2023": [
    { position: 1, rollNumber: "2201CS01", name: "Riya", totalScore: 200 },
    { position: 2, rollNumber: "2201CS02", name: "Arjun", totalScore: 180 },
  ],
  "2022": [
    { position: 1, rollNumber: "2101ME01", name: "Priya", totalScore: 220 },
  ],
};

const carouselSlides = [
  { src: "/stclogo.png", caption: "Club / Event Name" },
  { src: "/stclogo.png", caption: "Club / Event Name" },
  { src: "/stclogo.png", caption: "Club / Event Name" },
];

function YearSelector({
  year,
  onChange,
}: {
  year: string;
  onChange: (y: string) => void;
}) {
  return (
    <div className="relative inline-flex items-center">
      <select
        value={year}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Select Year"
        className="font-roboto appearance-none bg-transparent border border-[#3a4060] text-white text-xs sm:text-sm pl-3 pr-7 py-1 sm:py-1.5 rounded cursor-pointer focus:outline-none focus:border-[#6BFB9A] transition-colors"
      >
        {YEARS.map((y) => (
          <option key={y} value={y} className="bg-[#080D22] text-white">
            {y}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white text-[9px]">
        ▼
      </span>
    </div>
  );
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: -60, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
};

const tableBodyVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const tableRowVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function HelloWorldPage() {
  const [timelineYear, setTimelineYear] = useState("2024");
  const [leaderboardYear, setLeaderboardYear] = useState("2024");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((s) => (s + 1) % carouselSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (s) => (s - 1 + carouselSlides.length) % carouselSlides.length,
    );

  return (
    <LazyMotion features={domAnimation}>
      <div className="font-manrope text-white w-full overflow-hidden">
        <section className="relative flex items-center justify-center pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-32 px-4">
          <m.h1
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white text-center flex justify-center"
            style={{
              letterSpacing: "0.02em",
            }}
          >
            {"HELLO WORLD".split("").map((char, index) => (
              <m.span
                key={index}
                variants={letterVariants}
                className={`inline-block ${char === " " ? "w-3 sm:w-6" : ""}`}
              >
                {char}
              </m.span>
            ))}
          </m.h1>
        </section>

        <m.section
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10 pb-10 sm:pb-14"
        >
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
            About
          </h2>
          <p className="font-roboto text-[#94A3B8] leading-[1.75] text-xs sm:text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </m.section>

        <m.section
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10 pb-10 sm:pb-14"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white">
              Event Time Line
            </h2>
            <YearSelector year={timelineYear} onChange={setTimelineYear} />
          </div>

          <div className="w-full overflow-x-auto">
            <table className="font-roboto w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#DDE2F6" }}>
                  <th className="w-1/2 py-2.75 px-4 sm:px-8 text-center text-[#0A0F2E] font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
                    CLUB
                  </th>
                  <th className="w-1/2 py-2.75 px-4 sm:px-8 text-center text-[#0A0F2E] font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
                    DATES
                  </th>
                </tr>
              </thead>
              <m.tbody
                key={timelineYear}
                variants={tableBodyVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {(timelineData[timelineYear] ?? []).map((row, i) => (
                  <m.tr
                    key={i}
                    variants={tableRowVariants}
                    className="bg-[#080D22] border-b border-white/15 cursor-pointer transition-all duration-300 hover:bg-[#0d1435] hover:shadow-[0_4px_15px_rgba(107,251,154,0.05)] hover:scale-[1.005]"
                  >
                    <td className="w-1/2 py-3.25 px-4 sm:px-8 text-center text-[#94A3B8] text-xs sm:text-sm lg:text-base">
                      {row.club}
                    </td>
                    <td className="w-1/2 py-3.25 px-4 sm:px-8 text-center text-[#94A3B8] text-xs sm:text-sm lg:text-base">
                      {row.dates}
                    </td>
                  </m.tr>
                ))}
              </m.tbody>
            </table>
          </div>
        </m.section>

        <m.section
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10 pb-10 sm:pb-14"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white">
              Leaderboard
            </h2>
            <YearSelector
              year={leaderboardYear}
              onChange={setLeaderboardYear}
            />
          </div>

          <div className="w-full overflow-x-auto">
            <table className="font-roboto w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#DDE2F6" }}>
                  <th className="py-2.75 px-2 sm:px-4 text-center text-[#0A0F2E] font-semibold tracking-wider uppercase text-[10px] sm:text-xs whitespace-nowrap">
                    Position
                  </th>
                  <th className="py-2.75 px-2 sm:px-4 text-center text-[#0A0F2E] font-semibold tracking-wider uppercase text-[10px] sm:text-xs whitespace-nowrap">
                    Roll Number
                  </th>
                  <th className="py-2.75 px-2 sm:px-4 text-center text-[#0A0F2E] font-semibold tracking-wider uppercase text-[10px] sm:text-xs whitespace-nowrap">
                    Name
                  </th>
                  <th className="py-2.75 px-2 sm:px-4 text-center text-[#0A0F2E] font-semibold tracking-wider uppercase text-[10px] sm:text-xs whitespace-nowrap">
                    Total Score
                  </th>
                </tr>
              </thead>
              <m.tbody
                key={leaderboardYear}
                variants={tableBodyVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {(leaderboardData[leaderboardYear] ?? []).map((row, i) => (
                  <m.tr
                    key={i}
                    variants={tableRowVariants}
                    className="bg-[#080D22] border-b border-white/15 cursor-pointer transition-all duration-300 hover:bg-[#0d1435] hover:shadow-[0_4px_15px_rgba(107,251,154,0.05)] hover:scale-[1.005]"
                  >
                    <td className="py-3.25 px-2 sm:px-4 text-center text-[#94A3B8] text-xs sm:text-sm lg:text-base">
                      {row.position}
                    </td>
                    <td className="py-3.25 px-2 sm:px-4 text-center text-[#94A3B8] text-xs sm:text-sm lg:text-base">
                      {row.rollNumber}
                    </td>
                    <td className="py-3.25 px-2 sm:px-4 text-center text-[#94A3B8] text-xs sm:text-sm lg:text-base">
                      {row.name}
                    </td>
                    <td className="py-3.25 px-2 sm:px-4 text-center text-[#94A3B8] text-xs sm:text-sm lg:text-base">
                      {row.totalScore}
                    </td>
                  </m.tr>
                ))}
              </m.tbody>
            </table>
          </div>
        </m.section>

        <m.section
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-10 pb-16 sm:pb-24"
        >
          <div className="flex items-center gap-2 sm:gap-4">
            <m.button
              onClick={prevSlide}
              whileHover={{ color: "#6BFB9A", x: -5 }}
              whileTap={{ scale: 0.8 }}
              className="shrink-0 text-white transition-colors select-none leading-none"
              style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300 }}
            >
              ‹
            </m.button>

            <m.div
              className="flex-1 relative rounded-3xl overflow-hidden bg-white shadow-2xl"
              style={{ aspectRatio: "16/9", willChange: "transform" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                <m.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={carouselSlides[currentSlide].src}
                    alt={carouselSlides[currentSlide].caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 1024px"
                    priority={currentSlide === 0}
                  />
                </m.div>
              </AnimatePresence>
            </m.div>

            <m.button
              onClick={nextSlide}
              whileHover={{ color: "#6BFB9A", x: 5 }}
              whileTap={{ scale: 0.8 }}
              className="shrink-0 text-white transition-colors select-none leading-none"
              style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300 }}
            >
              ›
            </m.button>
          </div>

          <m.p
            key={`caption-${currentSlide}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-roboto text-center text-white mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg"
          >
            {carouselSlides[currentSlide].caption}
          </m.p>

          <div className="flex justify-center gap-2 mt-2 sm:mt-3">
            {carouselSlides.map((_, i) => (
              <m.button
                key={i}
                onClick={() => setCurrentSlide(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "bg-[#6BFB9A] w-8 shadow-[0_0_8px_#6BFB9A]"
                    : "bg-[#2a3050] w-2 hover:bg-[#3a4060]"
                }`}
              />
            ))}
          </div>
        </m.section>
      </div>
    </LazyMotion>
  );
}
