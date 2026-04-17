"use client";

import { YEARS } from "@/data/helloworldData";

export default function YearSelector({
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
