"use client";

import { useState } from "react";
import { leaderboardData, LeaderboardEntry } from "@/data/leaderboardData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AnimatedLeaderboardRow = ({
	row,
	index,
}: {
	row: LeaderboardEntry;
	index: number;
}) => {
	const [ref, isVisible] = useScrollReveal<HTMLDivElement>(0.1);
	return (
		<div
			ref={ref}
			className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translateX(0px)" : "translateX(40px)",
				transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, background-color 0.15s`,
			}}
		>
			<div className="grid grid-cols-3 text-[14px] md:text-[16px] h-16 items-center text-center">
				<div className="font-bold text-white">{row.position}</div>
				<div className="font-normal text-white/70">{row.team}</div>
				<div className="font-semibold text-[#3b82f6]">{row.score}</div>
			</div>
		</div>
	);
};

export default function Leaderboard() {
	const [selectedYear, setSelectedYear] = useState<string>("2025");
	const currentData = leaderboardData[selectedYear];

	const [titleRef, titleVisible] = useScrollReveal<HTMLHeadingElement>(0.1);
	const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>(0.1);

	const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedYear(e.target.value);
	};

	return (
		<section className="mb-16 w-full max-w-326 mx-auto px-4">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
				<h2
					ref={titleRef}
					className="text-[24px] md:text-[32px] font-bold text-white tracking-wide"
					style={{
						opacity: titleVisible ? 1 : 0,
						transform: titleVisible ? "translateX(0px)" : "translateX(40px)",
						transition:
							"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
					}}
				>
					Leaderboard
				</h2>

				<select
					value={selectedYear}
					onChange={handleYearChange}
					className="bg-[#0a1628] border border-white/20 text-[#F6F6F6] font-semibold text-[14px] md:text-[16px] rounded-xl px-5 py-2.5 outline-none cursor-pointer hover:bg-white/10 transition-colors w-full sm:w-auto"
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
					<div
						ref={headerRef}
						className="grid grid-cols-3 items-center bg-black/40 border-b border-white/10 rounded-t-[20px] h-[53px]"
						style={{
							opacity: headerVisible ? 1 : 0,
							transform: headerVisible ? "translateX(0px)" : "translateX(40px)",
							transition:
								"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
						}}
					>
						{["POSITION", "TEAM", "TOTAL SCORE"].map((h) => (
							<div
								key={h}
								className="flex items-center justify-center font-bold text-[13px] md:text-[15px] tracking-[0.15em] text-[#94A3B8] uppercase text-center"
							>
								{h}
							</div>
						))}
					</div>

					{currentData ? (
						currentData.map((row, index) => (
							<AnimatedLeaderboardRow
								key={`${selectedYear}-${index}`}
								row={row}
								index={index}
							/>
						))
					) : (
						<div className="text-center py-16 text-white/30 text-[16px] border-b border-white/15">
							No data available for {selectedYear}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
