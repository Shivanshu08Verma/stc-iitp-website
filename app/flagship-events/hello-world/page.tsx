"use client";

import { useState, useEffect, useRef } from "react";
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

const YEARS = ["2025", "2024", "2023"];

const timelineData: Record<string, TimelineRow[]> = {
  "2023": [
    { club: "Robocon",                             dates: "Sat 26th Aug, 05:00–06:30 PM" },
    { club: "Tinkerer's Lab",                      dates: "Sat 26th Aug, 06:30–08:00 PM" },
    { club: "Mitacs and Other Fellowships",       dates: "Sun 27th Aug, 03:00–04:00 PM" },
    { club: "APC Orientation",                    dates: "Sun 27th Aug, 06:00–07:30 PM" },
    { club: "SCME Orientation",                   dates: "Fri 1st Sep, 05:00–06:30 PM" },
    { club: "Moodboard Orientation",              dates: "Sat 2nd Sep, 05:00–05:30 PM" },
    { club: "Finance Club Orientation",           dates: "Sat 2nd Sep, 06:00–08:00 PM" },
    { club: "RnA Orientation",                    dates: "Sun 3rd Sep, 10:00–11:00 AM" },
    { club: "NJACK Orientation",                  dates: "Sun 3rd Sep, 11:00 AM–01:00 PM" },
    { club: "CHESSx",                             dates: "Sun 3rd Sep, 02:30–04:00 PM" },
    { club: "Sparkonics Orientation",             dates: "Sun 3rd Sep, 04:00–05:30 PM" },
    { club: "MATES Workshop",                     dates: "Sun 3rd Sep, 05:30–07:00 PM" },
    { club: "APC Orientation",                    dates: "Sun 3rd Sep, 07:00–08:30 PM" },
  ],

  "2024": [
    { club: "Ecell Kickoff Session",                              dates: "Sat 31st Aug, 11:00 AM–12:00 PM" },
    { club: "ChessX Introductory Session",                        dates: "Sat 31st Aug, 05:00–06:00 PM" },
    { club: "NJACK Onboarding Session",                           dates: "Sat 31st Aug, 06:00–07:30 PM" },
    { club: "Moodboard Onboarding Session",                       dates: "Sun 1st Sep, 06:00–08:00 PM" },
    { club: "Astronomy and Particle Physics Club Kickoff",        dates: "Sun 1st Sep, 04:30–05:30 PM" },
    { club: "Trading & Investment / Finance Club / DWDG",         dates: "Sun 1st Sep, 10:30 AM–01:00 PM" },
    { club: "Research Community Kickoff Session",                 dates: "Fri 6th Sep, 08:00–09:00 PM" },
    { club: "SCME Introductory Session",                          dates: "Fri 6th Sep, 07:00–08:00 PM" },
    { club: "Tinkerers Lab / Robocon / Robotics & Aviation Club", dates: "Sat 7th Sep, 06:00–08:00 PM" },
    { club: "Sparkonics Introductory Session",                    dates: "Sat 7th Sep, 04:00–05:00 PM" },
    { club: "ACE Introductory Session",                           dates: "Sat 7th Sep, 05:00–06:00 PM" },
    { club: "MatEX",                                              dates: "Sun 8th Sep, 04:00–05:00 PM" },
    { club: "Quantum Technology Club Introductory Session",       dates: "Sun 8th Sep, 06:00–07:00 PM" },
  ],

  "2025": [
    { club: "DWDG",              dates: "15th Aug, 02:00–03:00 PM" },
    { club: "Team Phoenix & TL", dates: "15th Aug, 03:00–05:00 PM" },
    { club: "MoodBoard",         dates: "15th Aug, 05:00–07:00 PM" },
    { club: "MATES",             dates: "15th Aug, 05:00–07:00 PM" },
    { club: "NJack",             dates: "15th Aug, 07:00–09:00 PM" },
    { club: "RNA (Physical Demonstration)", dates: "16th Aug, 10:00–11:00 AM" },
    { club: "ECell",             dates: "16th Aug, 02:00–04:00 PM" },
    { club: "Finance Club",      dates: "16th Aug, 04:00–06:00 PM" },
    { club: "RNA",               dates: "16th Aug, 06:00–08:00 PM" },
    { club: "Optimax",           dates: "16th Aug, 08:00–09:00 PM" },
    { club: "QTC",               dates: "17th Aug, 02:00–04:00 PM" },
    { club: "SCME",              dates: "17th Aug, 04:00–06:00 PM" },
    { club: "Sparkonics",        dates: "17th Aug, 04:00–06:00 PM" },
    { club: "ChESSx",            dates: "17th Aug, 04:00–06:00 PM" },
    { club: "ACE",               dates: "17th Aug, 04:00–06:00 PM" },
    { club: "TIC",               dates: "17th Aug, 06:00–07:00 PM" },
    { club: "Astronomy Club",    dates: "17th Aug, 07:00–09:00 PM" },
    { club: "Exhibition (Celesta)", dates: "17th Aug, 04:00–09:00 PM" },
  ],
};

const leaderboardData: Record<string, LeaderboardRow[]> = {
  "2025": [
    { position: 1,  rollNumber: "2501MC37", name: "Prabhudutta Prusti",       totalScore: 107 },
    { position: 2,  rollNumber: "2501ME63", name: "Anirban Dutta",            totalScore: 79  },
    { position: 3,  rollNumber: "2501EC17", name: "Garvit Sharma",            totalScore: 57  },
    { position: 4,  rollNumber: "2501AI02", name: "Bhavesh Lokesh Agarwal",   totalScore: 55  },
    { position: 5,  rollNumber: "2501CB35", name: "S Aditya",                 totalScore: 52  },
    { position: 6,  rollNumber: "2501CE03", name: "Mehul Tushar Parmar",      totalScore: 50  },
    { position: 7,  rollNumber: "2501EC03", name: "Shivansh Kumar Bhakt",     totalScore: 49  },
    { position: 8,  rollNumber: "2502VL10", name: "Ambidi Ramachandra Pranil",totalScore: 45  },
    { position: 9,  rollNumber: "2501CS19", name: "Aditya Kumar",             totalScore: 42  },
    { position: 10, rollNumber: "2501ME26", name: "Deepanshu Dash",           totalScore: 41  },
  ],
};

const carouselSlides = [
  { src: "/helloworld/helloworld1.JPG" },
  { src: "/helloworld/helloworld2.jpg" },
  { src: "/helloworld/helloworld3.jpeg" },
  { src: "/helloworld/helloworld4.jpeg" },
  { src: "/helloworld/helloworld5.JPG" },
  { src: "/helloworld/helloworld6.jpg" },
  { src: "/helloworld/helloworld7.jpg" },
  { src: "/helloworld/helloworld8.JPG" },
  { src: "/helloworld/helloworld9.jpeg" },
  { src: "/helloworld/helloworld10.jpg" },
  { src: "/helloworld/helloworld11.jpg" },
  { src: "/helloworld/helloworld12.jpg" },
  { src: "/helloworld/helloworld13.jpeg" },
  { src: "/helloworld/helloworld14.jpeg" },
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

function AnimatedTableRow({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLTableRowElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delay = `${Math.min(index * 0.045, 0.4)}s`;

  return (
    <tr
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0px)" : "translateX(40px)",
        transition: `background-color 0.15s ease, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
      }}
    >
      {children}
    </tr>
  );
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const heroHeadingVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.08, 
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export default function HelloWorldPage() {
  const [timelineYear, setTimelineYear] = useState("2025");
  const [leaderboardYear, setLeaderboardYear] = useState("2025");
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
            variants={heroHeadingVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-widest"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-blue-500">
              HELLO WORLD
            </span>
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
            dolir sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
              <tbody key={timelineYear}>
                {(timelineData[timelineYear] ?? []).map((row, i) => (
                  <AnimatedTableRow
                    key={i}
                    index={i}
                    className="bg-[#080D22] border-b border-white/15 hover:bg-[#0d1435]"
                  >
                    <td className="w-1/2 py-3.25 px-4 sm:px-8 text-center text-[#94A3B8] text-xs sm:text-sm lg:text-base">
                      {row.club}
                    </td>
                    <td className="w-1/2 py-3.25 px-4 sm:px-8 text-center text-[#94A3B8] text-xs sm:text-sm lg:text-base">
                      {row.dates}
                    </td>
                  </AnimatedTableRow>
                ))}
              </tbody>
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
              <tbody key={leaderboardYear}>
                {(leaderboardData[leaderboardYear] ?? []).map((row, i) => (
                  <AnimatedTableRow
                    key={i}
                    index={i}
                    className="bg-[#080D22] border-b border-white/15 hover:bg-[#0d1435]"
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
                  </AnimatedTableRow>
                ))}
              </tbody>
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
              className="shrink-0 text-white transition-colors select-none leading-none cursor-pointer"
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
                    alt={`Exhibition Slide ${currentSlide + 1}`}
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
              className="shrink-0 text-white transition-colors select-none leading-none cursor-pointer"
              style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 300 }}
            >
              ›
            </m.button>
          </div>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {carouselSlides.map((_, i) => (
              <m.button
                key={i}
                onClick={() => setCurrentSlide(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
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