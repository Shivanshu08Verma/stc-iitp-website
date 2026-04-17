"use client";

import { useState } from "react";
import { slides } from "@/data/galleryDataSS";

export default function Gallery() {
	const [current, setCurrent] = useState(0);
	const isFirst = current === 0;
	const isLast = current === slides.length - 1;

	return (
		<div className="w-full flex flex-col gap-6 items-center">
			<div className="flex items-center justify-between w-full gap-3 md:gap-8 group">
				{/* PREV BUTTON */}
				<button
					onClick={() => setCurrent((c) => c - 1)}
					aria-label="Previous"
					disabled={isFirst}
					className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 shrink-0 transition-all duration-300 rounded-full ${
						isFirst
							? "text-gray-700 opacity-50 cursor-not-allowed"
							: "text-gray-400 hover:text-white cursor-pointer hover:scale-110"
					}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2.5}
						stroke="currentColor"
						className="w-6 h-6 md:w-8 md:h-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</button>

				{/* IMAGE CONTAINER */}
				<div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] bg-[#0B1120] rounded-[24px] overflow-hidden shadow-2xl border border-gray-800/50">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out flex items-center justify-center ${
								index === current
									? "opacity-100 translate-y-0 scale-100 z-10"
									: "opacity-0 translate-y-12 scale-95 z-0"
							}`}
						>
							{slide.src ? (
								/* eslint-disable-next-line @next/next/no-img-element */
								<img
									src={slide.src}
									alt={slide.caption}
									className="w-full h-full object-cover"
								/>
							) : (
								<div className="w-full h-full flex flex-col items-center justify-center gap-3 text-white/30 text-base font-roboto bg-gradient-to-br from-[#0d1a2b] to-[#1a2d47]">
									<div className="w-14 h-14 border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center text-2xl">
										🖼️
									</div>
									<span>Add event photos in /public folder</span>
								</div>
							)}
						</div>
					))}
				</div>

				{/* NEXT BUTTON */}
				<button
					onClick={() => setCurrent((c) => c + 1)}
					aria-label="Next"
					disabled={isLast}
					className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 shrink-0 transition-all duration-300 rounded-full ${
						isLast
							? "text-gray-700 opacity-50 cursor-not-allowed"
							: "text-gray-400 hover:text-white cursor-pointer hover:scale-110"
					}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2.5}
						stroke="currentColor"
						className="w-6 h-6 md:w-8 md:h-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</button>
			</div>

			{/* GREEN DOTS */}
			<div className="flex gap-3 mt-1">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrent(index)}
						className={`h-2 rounded-full transition-all duration-500 ${
							index === current
								? "w-8 bg-[#6bfb9a] shadow-[0_0_10px_rgba(107,251,154,0.5)]"
								: "w-2 bg-gray-600 hover:bg-gray-400"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
