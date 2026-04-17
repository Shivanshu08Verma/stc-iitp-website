"use client";

import { useState } from "react";
import { m, LazyMotion, domAnimation, Variants } from "framer-motion";
import EventCarousel from "@/components/EventCarousel";
import YearSelector from "@/components/YearSelectorHW";
import AnimatedRowHW from "@/components/AnimatedRowHW";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
	timelineData,
	leaderboardData,
	carouselSlides,
} from "@/data/helloworldData";

const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const heroHeadingVariants: Variants = {
	hidden: { opacity: 0, scale: 0.85, filter: "blur(12px)" },
	visible: {
		opacity: 1,
		scale: 1,
		filter: "blur(0px)",
		transition: { delay: 0.08, duration: 2.5, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function HelloWorldPage() {
	const [timelineYear, setTimelineYear] = useState("2025");
	const [leaderboardYear, setLeaderboardYear] = useState("2025");

	const [timelineHeaderRef, timelineHeaderVisible] =
		useScrollReveal<HTMLDivElement>(0.1);
	const [leaderboardHeaderRef, leaderboardHeaderVisible] =
		useScrollReveal<HTMLDivElement>(0.1);

	const carouselImages = carouselSlides.map((slide, i) => ({
		id: i,
		src: slide.src,
	}));

	return (
		<LazyMotion features={domAnimation}>
			{/* 1. Applied ICTC Outer Main Dimensions */}
			<main className="min-h-screen flex flex-col items-center font-manrope text-white overflow-x-hidden">
				{/* 2. Applied ICTC Inner max-w-6xl and px-6 md:px-12 */}
				<div className="w-full max-w-6xl px-6 md:px-12 flex flex-col pt-10 pb-[100px]">
					{/* HERO SECTION */}
					<section className="relative flex items-center justify-center pt-4 sm:pt-8 md:pt-10 pb-20 sm:pb-32">
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

					{/* ABOUT SECTION */}
					<m.section
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="w-full pb-10 sm:pb-14"
					>
						<h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
							About
						</h2>
						<p className="font-roboto text-[#94A3B8] leading-[1.75] text-xs sm:text-sm lg:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
					</m.section>

					{/* TIMELINE SECTION */}
					<m.section
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="w-full pb-10 sm:pb-14"
					>
						<div className="flex items-center justify-between mb-3">
							<h2 className="text-base sm:text-lg md:text-xl font-bold text-white">
								Event Time Line
							</h2>
							<YearSelector year={timelineYear} onChange={setTimelineYear} />
						</div>

						<div className="w-full overflow-x-auto pb-4 no-scrollbar">
							<div className="min-w-[500px] md:min-w-full flex flex-col font-roboto">
								<div
									ref={timelineHeaderRef}
									className="grid grid-cols-2 items-center bg-black/40 border-b border-white/10 rounded-t-[20px] h-[53px]"
									style={{
										opacity: timelineHeaderVisible ? 1 : 0,
										transform: timelineHeaderVisible
											? "translateX(0px)"
											: "translateX(40px)",
										transition:
											"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
									}}
								>
									{["CLUB", "DATES"].map((h) => (
										<div
											key={h}
											className="flex items-center justify-center font-bold text-[13px] md:text-[15px] tracking-[0.15em] text-[#94A3B8] uppercase"
										>
											{h}
										</div>
									))}
								</div>

								{(timelineData[timelineYear] ?? []).map((row, i) => (
									<AnimatedRowHW key={i} index={i}>
										<div className="grid grid-cols-2 text-[14px] md:text-[16px] h-16 items-center text-center">
											<div className="font-normal text-white/70">
												{row.club}
											</div>
											<div className="font-normal text-white/70">
												{row.dates}
											</div>
										</div>
									</AnimatedRowHW>
								))}
							</div>
						</div>
					</m.section>

					{/* LEADERBOARD SECTION */}
					<m.section
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="w-full pb-10 sm:pb-14"
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

						<div className="w-full overflow-x-auto pb-4 no-scrollbar">
							<div className="min-w-[600px] md:min-w-full flex flex-col font-roboto">
								<div
									ref={leaderboardHeaderRef}
									className="grid grid-cols-4 items-center bg-black/40 border-b border-white/10 rounded-t-[20px] h-[53px]"
									style={{
										opacity: leaderboardHeaderVisible ? 1 : 0,
										transform: leaderboardHeaderVisible
											? "translateX(0px)"
											: "translateX(40px)",
										transition:
											"opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
									}}
								>
									{["Position", "Roll Number", "Name", "Total Score"].map(
										(h) => (
											<div
												key={h}
												className="flex items-center justify-center font-bold text-[11px] md:text-[13px] tracking-[0.1em] text-[#94A3B8] uppercase text-center px-2"
											>
												{h}
											</div>
										),
									)}
								</div>

								{(leaderboardData[leaderboardYear] ?? []).map((row, i) => (
									<AnimatedRowHW key={i} index={i}>
										<div className="grid grid-cols-4 text-[13px] md:text-[15px] h-16 items-center text-center">
											<div className="font-bold text-white">{row.position}</div>
											<div className="font-normal text-white/70">
												{row.rollNumber}
											</div>
											<div className="font-normal text-white/70 truncate px-2">
												{row.name}
											</div>
											<div className="font-semibold text-[#3b82f6]">
												{row.totalScore}
											</div>
										</div>
									</AnimatedRowHW>
								))}
							</div>
						</div>
					</m.section>

					{/* CAROUSEL SECTION */}
					<m.section
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="w-full pb-8 sm:pb-12"
					>
						<EventCarousel images={carouselImages} />
					</m.section>
				</div>
			</main>
		</LazyMotion>
	);
}
