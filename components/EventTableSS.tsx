"use client";

import { useState, useEffect, useRef } from "react";
import { allEvents, years } from "@/data/eventDataSS";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AnimatedRow from "@/components/AnimatedRowSS";

const DropdownArrow = () => (
	<svg
		width="16"
		height="12"
		viewBox="0 0 16 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2.38804 -9.34601e-05L13.6147 -9.34601e-05C14.0579 -0.000735283 14.4923 0.124154 14.8674 0.360118C15.2426 0.596083 15.5433 0.933474 15.7347 1.33324C15.9587 1.80756 16.045 2.33528 15.9837 2.85626C15.9225 3.37724 15.716 3.87053 15.388 4.27991L9.77471 11.0799C9.55442 11.3341 9.28206 11.5379 8.9761 11.6776C8.67014 11.8173 8.33772 11.8896 8.00137 11.8896C7.66502 11.8896 7.3326 11.8173 7.02664 11.6776C6.72068 11.5379 6.44833 11.3341 6.22804 11.0799L0.614705 4.27991C0.286697 3.87053 0.080286 3.37724 0.0189943 2.85626C-0.0422974 2.33528 0.0439968 1.80756 0.268041 1.33324C0.45943 0.933474 0.760118 0.596083 1.1353 0.360118C1.51049 0.124154 1.94482 -0.000735283 2.38804 -9.34601e-05Z"
			fill="#F6F6F6"
		/>
	</svg>
);

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
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
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

			<div className="w-full flex flex-col">
				{/* 1. Header & Dropdown (No overflow here!) */}
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
					<h2
						ref={titleRef}
						className="text-white font-extrabold text-3xl md:text-4xl"
						style={{
							fontFamily: "'Roboto', sans-serif",
							opacity: titleVisible ? 1 : 0,
							transform: titleVisible ? "translateX(0px)" : "translateX(40px)",
							transition:
								"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
						}}
					>
						Event Time Line
					</h2>

					<div ref={wrapperRef} className="relative z-40">
						<button
							onClick={() => setOpen((o) => !o)}
							className="w-[140px] h-[44px] flex items-center justify-between px-5 rounded-xl border border-[#3a4060] transition-colors cursor-pointer"
							style={{
								background: open ? "rgba(255,255,255,0.05)" : "transparent",
							}}
						>
							<span className="font-semibold text-sm sm:text-base text-[#F6F6F6]">
								{selectedYear}
							</span>
							<div
								className={`transition-transform duration-250 ${open ? "rotate-180" : "rotate-0"}`}
							>
								<DropdownArrow />
							</div>
						</button>

						{open && (
							<div className="absolute top-[calc(100%+6px)] right-0 w-[140px] bg-[#080D22] border border-[#3a4060] rounded-xl overflow-hidden z-40 shadow-2xl animate-[dropFade_0.2s_ease_forwards]">
								{years.map((yr, i) => (
									<div
										key={yr}
										onClick={() => {
											setSelectedYear(yr);
											setOpen(false);
										}}
										className={`px-5 py-3 cursor-pointer text-sm sm:text-base font-semibold transition-all hover:bg-[#0d1435] hover:text-white ${yr === selectedYear ? "bg-white/10 text-white" : "text-white/50"}`}
										style={{
											borderBottom:
												i < years.length - 1
													? "1px solid rgba(255,255,255,0.05)"
													: "none",
										}}
									>
										{yr}
									</div>
								))}
							</div>
						)}
					</div>
				</div>

				{/* 2. Table Wrapper (Added overflow-x-auto and no-scrollbar here!) */}
				<div className="w-full overflow-x-auto pb-4 no-scrollbar">
					<div className="min-w-[600px] md:min-w-full flex flex-col">
						<div
							ref={headerRef}
							// 1. Changed back to dark background, added the subtle bottom border, and rounded corners
							className="grid grid-cols-3 items-center bg-white/80 border-b border-white/10 rounded-t-[20px]"
							style={{
								opacity: headerVisible ? 1 : 0,
								transform: headerVisible
									? "translateX(0px)"
									: "translateX(40px)",
								transition:
									"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
							}}
						>
							{["EVENT", "CLUB", "DATES"].map((h) => (
								<div
									key={h}
									// 2. Changed text color back to the muted gray/blue (#94A3B8)
									className="h-[48px] sm:h-[53px] flex items-center justify-center font-extrabold text-[#00051A] uppercase text-[13px] md:text-[15px] tracking-[0.15em] text-center"
								>
									{h}
								</div>
							))}
						</div>

						{events.length > 0 ? (
							events.map((ev, i) => (
								<AnimatedRow key={ev.name} ev={ev} index={i} />
							))
						) : (
							<div className="w-full py-16 flex items-center justify-center bg-[#080D22] border-b border-white/15 text-[#94A3B8] text-xs sm:text-sm">
								No events announced for {selectedYear} yet
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
