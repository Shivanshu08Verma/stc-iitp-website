"use client";

import { useState } from "react";
import Image from "next/image";
import { events } from "../data/eventData";

export default function EventCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const isFirstSlide = currentIndex === 0;
	const isLastSlide = currentIndex === events.length - 1;

	const handleNext = () => {
		if (!isLastSlide) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
		}
	};

	const handlePrev = () => {
		if (!isFirstSlide) {
			setCurrentIndex((prevIndex) => prevIndex - 1);
		}
	};

	return (
		<section className="mb-30 flex flex-col items-center w-full px-4">
			<div className="flex items-center justify-center w-full max-w-326 gap-4 md:gap-10 group">
				<button
					onClick={handlePrev}
					disabled={isFirstSlide}
					className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 z-20 shrink-0 transition-all duration-300 rounded-full ${
						isFirstSlide
							? "text-gray-700 opacity-50 cursor-not-allowed"
							: "text-gray-400 hover:text-white cursor-pointer hover:scale-110"
					}`}
					aria-label="Previous event"
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

				<div className="relative w-full max-w-267.75 h-62.5 md:h-124.75 bg-[#0B1120] rounded-[20px] overflow-hidden shadow-2xl border border-gray-800/50">
					{events.map((event, index) => (
						<div
							key={event.id}
							className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out flex items-center justify-center ${
								index === currentIndex
									? "opacity-100 translate-y-0 scale-100 z-10"
									: "opacity-0 translate-y-12 scale-95 z-0"
							}`}
						>
							<Image
								src={event.imagePath}
								alt={event.name}
								fill
								sizes="(max-width: 1071px) 100vw, 1071px"
								className="object-cover object-center"
								priority={true}
							/>
						</div>
					))}
				</div>

				<button
					onClick={handleNext}
					disabled={isLastSlide}
					className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 z-20 shrink-0 transition-all duration-300 rounded-full ${
						isLastSlide
							? "text-gray-700 opacity-50 cursor-not-allowed"
							: "text-gray-400 hover:text-white cursor-pointer hover:scale-110"
					}`}
					aria-label="Next event"
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

			<div className="mt-8 flex flex-col items-center">
				<div className="flex gap-3 mt-4">
					{events.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`h-2 rounded-full transition-all duration-500 ${
								index === currentIndex
									? "w-8 bg-[#6bfb9a] shadow-[0_0_10px_rgba(107,251,154,0.5)]"
									: "w-2 bg-gray-600 hover:bg-gray-400"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
