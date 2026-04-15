"use client";

import { useState } from "react";
import { leaderboardData } from "../data/leaderboardData";

export default function Leaderboard() {
	const [selectedYear, setSelectedYear] = useState<string>("2024");
	const currentData = leaderboardData[selectedYear];

	const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedYear(e.target.value);
	};

	return (
		<section
			className="mb-16 w-full max-w-326 mx-auto px-4 opacity-0 animate-fade-in-up"
			style={{ animationDelay: "200ms" }}
		>
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
				<h2 className="text-[24px] md:text-[32px] font-bold text-white tracking-wide">
					Leaderboard
				</h2>

				{/* Updated Dropdown to match the sleek button style */}
				<select
					value={selectedYear}
					onChange={handleYearChange}
					className="bg-transparent border border-white/20 text-[#F6F6F6] font-semibold text-[14px] md:text-[16px] rounded-xl px-5 py-2.5 outline-none cursor-pointer hover:bg-white/5 transition-colors w-full sm:w-auto"
				>
					{Object.keys(leaderboardData)
						.sort((a, b) => Number(b) - Number(a))
						.map((year) => (
							<option
								key={year}
								value={year}
								className="bg-[#0a1628] text-white"
							>
								{year}
							</option>
						))}
				</select>
			</div>

			<div className="w-full overflow-x-auto pb-4 no-scrollbar">
				<div className="min-w-150 md:min-w-full flex flex-col">
					{/* UPDATED HEADER: Dark background, slate text, rounded top corners */}
					<div className="grid grid-cols-3 items-center bg-black/40 border-b border-white/10 rounded-t-[20px] h-[53px]">
						{["POSITION", "TEAM", "TOTAL SCORE"].map((h) => (
							<div
								key={h}
								className="flex items-center justify-center font-bold text-[13px] md:text-[15px] tracking-[0.15em] text-[#94A3B8] uppercase text-center"
							>
								{h}
							</div>
						))}
					</div>

					{/* ROWS: Subtle border-white/5, dark hover state */}
					{currentData?.map((row, index) => (
						<div
							key={`${selectedYear}-${index}`}
							className="border-b border-white/5 last:border-b-0 opacity-0 animate-slide-in-right hover:bg-white/5 transition-colors"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="grid grid-cols-3 text-[14px] md:text-[16px] h-16 items-center text-center">
								<div className="font-bold text-white">{row.position}</div>
								<div className="font-normal text-white/70">{row.team}</div>
								{/* Keeping the neon blue for the scores! */}
								<div className="font-semibold text-[#3b82f6]">{row.score}</div>
							</div>
						</div>
					))}

					{!currentData && (
						<div className="text-center py-16 text-white/30 text-[16px] border-b border-white/15">
							No data available for {selectedYear}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
