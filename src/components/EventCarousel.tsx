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
		<section className="mb-[120px] flex flex-col items-center w-full px-4">
			<div className="flex items-center justify-center w-full max-w-[1304px] gap-4 md:gap-[40px] group">
				<button
					onClick={handlePrev}
					disabled={isFirstSlide}
					className={`flex items-center justify-center w-[40px] h-[40px] md:w-[56px] md:h-[56px] z-20 flex-shrink-0 transition-all duration-300 rounded-full ${
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
						className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</button>

				<div className="relative w-full max-w-[1071px] h-[250px] md:h-[499px] bg-[#0B1120] rounded-[20px] overflow-hidden shadow-2xl border border-gray-800/50">
					{events.map((event, index) => (
						<div
							key={event.id}
							className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out flex items-center justify-center ${
								index === currentIndex
									? "opacity-100 translate-y-0 scale-100 z-10"
									: "opacity-0 translate-y-[48px] scale-95 z-0"
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
					className={`flex items-center justify-center w-[40px] h-[40px] md:w-[56px] md:h-[56px] z-20 flex-shrink-0 transition-all duration-300 rounded-full ${
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
						className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</button>
			</div>

			<div className="mt-[32px] flex flex-col items-center">
				<p
					key={currentIndex}
					className="text-center text-[20px] md:text-[24px] font-bold text-white tracking-wide animate-fade-in-up"
				>
					{events[currentIndex].name}
				</p>

				<div className="flex gap-[12px] mt-[16px]">
					{events.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`h-[8px] rounded-full transition-all duration-500 ${
								index === currentIndex
									? "w-[32px] bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.5)]"
									: "w-[8px] bg-gray-600 hover:bg-gray-400"
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
