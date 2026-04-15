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

				<select
					value={selectedYear}
					onChange={handleYearChange}
					className="bg-transparent border border-gray-600 text-white text-[14px] md:text-[16px] rounded-md px-4 py-2 outline-none cursor-pointer hover:border-gray-400 transition-colors w-full sm:w-auto"
				>
					{Object.keys(leaderboardData)
						.sort((a, b) => Number(b) - Number(a))
						.map((year) => (
							<option
								key={year}
								value={year}
								className="bg-[#050914] text-white"
							>
								{year}
							</option>
						))}
				</select>
			</div>

			<div className="w-full overflow-x-auto pb-4 no-scrollbar">
				<div className="min-w-150 md:min-w-full flex flex-col">
					{/* UPDATED HEADER: Light background (#E8EAF6), black text, sharp square corners (removed rounded classes) */}
					<div className="grid grid-cols-3 bg-[#E8EAF6] text-black font-extrabold text-[12px] tracking-widest uppercase h-12 items-center text-center">
						<div>POSITION</div>
						<div>TEAM</div>
						<div>TOTAL SCORE</div>
					</div>

					{/* ROWS: Dark background, thin borders, matching the screenshot */}
					{currentData?.map((row, index) => (
						<div
							key={`${selectedYear}-${index}`}
							className="border-b border-white/10 last:border-b-0 opacity-0 animate-slide-in-right"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="grid grid-cols-3 text-[14px] md:text-[16px] h-14 items-center text-center text-gray-300 hover:bg-white/5 transition-colors">
								<div className="font-medium text-white">{row.position}</div>
								<div>{row.team}</div>
								<div className="font-medium text-[#3b82f6]">{row.score}</div>
							</div>
						</div>
					))}

					{!currentData && (
						<div className="text-center py-10 text-gray-500 text-[14px] border-t border-white/10">
							No data available for {selectedYear}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
