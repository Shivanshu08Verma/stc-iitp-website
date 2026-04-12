"use client";

import { useState, useEffect, useRef } from "react";

type Event = {
  name: string;
  club: string;
  dates: string;
};

const allEvents: Record<number, Event[]> = {
  2025: [
    { name: "ROSReboot", club: "Team Phoenix", dates: "14th June – 14th July" },
    { name: "NSOC", club: "NJACK", dates: "14th June – 20th July" },
    { name: "Logic Forge", club: "Sparkonics", dates: "15th June – 15th July" },
    { name: "Inside the Blackbox", club: "RnA", dates: "21st June – 24th June" },
    { name: "Mind over Math", club: "OptiMatX", dates: "22nd June – 5th July" },
    { name: "Quant Quest", club: "TIC", dates: "25th June – 1st July" },
    { name: "Code Fin", club: "Finance Club", dates: "25th June – 8th July" },
    { name: "Wonda Vision", club: "Tinkerer's Lab", dates: "25th June – 10th July" },
    { name: "Cosmic Loom", club: "AP Club", dates: "30th June – 14th July" },
    { name: "Cringe Quench", club: "MatES", dates: "1st July – 7th July" },
    { name: "Design Hub", club: "SCME", dates: "1st July – 7th July" },
    { name: "Quant Circuit Challenge", club: "QTC", dates: "1st July – 21st July" },
    { name: "Avogadro's Playground", club: "ChESSx", dates: "2nd July – 4th July" },
    { name: "Cross & Beyond", club: "ACE", dates: "6th July – 9th July" },
    { name: "Brandstorm", club: "E-Cell & MoodBoard", dates: "1st July – 8th July" },
  ],
  2026: [],
};

const years = [2025, 2026];

const DropdownArrow = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.38804 -9.34601e-05L13.6147 -9.34601e-05C14.0579 -0.000735283 14.4923 0.124154 14.8674 0.360118C15.2426 0.596083 15.5433 0.933474 15.7347 1.33324C15.9587 1.80756 16.045 2.33528 15.9837 2.85626C15.9225 3.37724 15.716 3.87053 15.388 4.27991L9.77471 11.0799C9.55442 11.3341 9.28206 11.5379 8.9761 11.6776C8.67014 11.8173 8.33772 11.8896 8.00137 11.8896C7.66502 11.8896 7.3326 11.8173 7.02664 11.6776C6.72068 11.5379 6.44833 11.3341 6.22804 11.0799L0.614705 4.27991C0.286697 3.87053 0.080286 3.37724 0.0189943 2.85626C-0.0422974 2.33528 0.0439968 1.80756 0.268041 1.33324C0.45943 0.933474 0.760118 0.596083 1.1353 0.360118C1.51049 0.124154 1.94482 -0.000735283 2.38804 -9.34601e-05Z" fill="#F6F6F6"/>
  </svg>
);

function useScrollReveal<T extends HTMLElement>(threshold = 0.1): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function EventTable() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [titleRef, titleVisible] = useScrollReveal<HTMLHeadingElement>(0.1);
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>(0.1);
  const events = allEvents[selectedYear] || [];

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <>
      <style>{`
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="w-full flex flex-col overflow-x-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2
            ref={titleRef}
            className="text-white font-extrabold text-3xl md:text-4xl"
            style={{
              fontFamily: "'Roboto', sans-serif",
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateX(0px)" : "translateX(40px)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            Event Time Line
          </h2>

          <div ref={wrapperRef} className="relative z-40">
            <button
              onClick={() => setOpen((o) => !o)}
              className="w-[140px] h-[44px] flex items-center justify-between px-5 rounded-xl border border-white transition-colors"
              style={{ background: open ? "rgba(255,255,255,0.08)" : "transparent" }}
            >
              <span className="font-semibold text-base text-[#F6F6F6]">{selectedYear}</span>
              <div className={`transition-transform duration-250 ${open ? "rotate-180" : "rotate-0"}`}>
                <DropdownArrow />
              </div>
            </button>

            {open && (
              <div className="absolute top-[calc(100%+6px)] right-0 w-[140px] bg-[#0a1628] border border-white/40 rounded-xl overflow-hidden z-40 shadow-2xl animate-[dropFade_0.2s_ease_forwards]">
                {years.map((yr, i) => (
                  <div
                    key={yr}
                    onClick={() => { setSelectedYear(yr); setOpen(false); }}
                    className={`px-5 py-3 cursor-pointer text-base font-semibold transition-all hover:bg-white/10 hover:text-white ${yr === selectedYear ? "bg-white/10 text-white" : "text-white/50"}`}
                    style={{ borderBottom: i < years.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
                  >
                    {yr}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* WRAPPER FOR HORIZONTAL SCROLL ON SMALL PHONES */}
        <div className="min-w-[600px] md:min-w-full">
          <div
            ref={headerRef}
            className="grid grid-cols-3 items-center bg-[#E8EAF6] rounded-t-[20px]"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateX(0px)" : "translateX(40px)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            {["EVENT", "CLUB", "DATES"].map((h) => (
              <div key={h} className="h-[53px] flex items-center justify-center font-black text-[13px] md:text-[15px] tracking-wider text-black">
                {h}
              </div>
            ))}
          </div>

          {events.length > 0 ? (
            events.map((ev, i) => <AnimatedRow key={ev.name} ev={ev} index={i} />)
          ) : (
            <div className="w-full py-16 flex items-center justify-center border-b border-white/15 text-white/30 text-base">
              No events announced for {selectedYear} yet
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function AnimatedRow({ ev, index }: { ev: Event; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delay = `${Math.min(index * 0.045, 0.4)}s`;

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 items-center border-b border-white hover:bg-white/5 transition-colors"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0px)" : "translateX(40px)",
        transition: `background 0.15s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
      }}
    >
      <div className="py-4 px-2 flex items-center justify-center text-center font-bold text-sm md:text-base text-white">
        {ev.name}
      </div>
      <div className="py-4 px-2 flex items-center justify-center text-center font-normal text-sm md:text-base text-white/70">
        {ev.club}
      </div>
      <div className="py-4 px-2 flex items-center justify-center text-center font-semibold text-sm md:text-base text-white/90">
        {ev.dates}
      </div>
    </div>
  );
}