"use client";

import HeroSection from "@/components/HeroSectionSS";
import AboutSection from "@/components/AboutSectionSS";
import EventTable from "@/components/EventTableSS";
import EventCarousel from "@/components/EventCarousel";
import { slides } from "@/data/galleryDataSS";

export default function SummerSprintPage() {
	const summerSprintImages = slides.map((slide, index) => ({
		id: index,
		src: slide.src,
		name: slide.caption,
	}));

	return (
		// 1. Applied ICTC Outer Main Dimensions
		<main className="min-h-screen flex flex-col items-center font-roboto overflow-x-hidden">
			{/* 2. Applied ICTC Inner max-w-6xl and px-6 md:px-12 */}
			<div className="w-full max-w-6xl px-6 md:px-12 flex flex-col pt-[80px] pb-[100px] gap-20">
				<div className="w-full flex flex-col gap-[60px]">
					<HeroSection />
					<AboutSection />
				</div>

				<div className="w-full">
					<EventTable />
				</div>

				<div className="w-full">
					<EventCarousel images={summerSprintImages} />
				</div>
			</div>
		</main>
	);
}
