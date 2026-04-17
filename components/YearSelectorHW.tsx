"use client";

import { useState, useEffect, useRef } from "react";

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

export default function YearSelector({
	year,
	onChange,
	availableYears, // New prop
}: {
	year: string;
	onChange: (y: string) => void;
	availableYears: string[]; // Added this
}) {
	const [open, setOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!open) return;
		const handler = (e: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, [open]);

	// If there's only one year, don't show the dropdown at all
	if (availableYears.length <= 1) return null;

	return (
		<div ref={wrapperRef} className="relative z-40 inline-block">
			<style>{`@keyframes dropFade { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
			<button
				type="button"
				onClick={() => setOpen((o) => !o)}
				className="w-[140px] h-[44px] flex items-center justify-between px-5 rounded-xl border border-[#3a4060] transition-colors cursor-pointer text-white"
				style={{ background: open ? "rgba(255,255,255,0.05)" : "transparent" }}
			>
				<span className="font-semibold text-sm sm:text-base text-[#F6F6F6]">{year}</span>
				<div className={`transition-transform duration-250 ${open ? "rotate-180" : "rotate-0"}`}><DropdownArrow /></div>
			</button>

			{open && (
				<div className="absolute top-[calc(100%+6px)] right-0 w-[140px] bg-[#080D22] border border-[#3a4060] rounded-xl overflow-hidden z-40 shadow-2xl animate-[dropFade_0.2s_ease_forwards]">
					{availableYears.map((y, i) => (
						<div
							key={y}
							onClick={() => { onChange(y); setOpen(false); }}
							className={`px-5 py-3 cursor-pointer text-sm sm:text-base font-semibold transition-all hover:bg-[#0d1435] hover:text-white ${y === year ? "bg-white/10 text-white" : "text-white/50"}`}
							style={{ borderBottom: i < availableYears.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
						>
							{y}
						</div>
					))}
				</div>
			)}
		</div>
	);
}